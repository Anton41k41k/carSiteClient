import { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FormInput from "../FormInput";
import RequestStatus from "../RequestStatus";

const topics = [
  { id: 0, text: "Автомобили" },
  { id: 1, text: "Поддержка веб-сайта" },
  { id: 2, text: "Проверка на наличие технических акций" },
  { id: 3, text: "Другое" },
];

export default function FeedbackForm() {
  const [status, setStatus] = useState("");
  const [feedbackData, setFeedbackData] = useState({
    gender: "male",
    firstName: "",
    lastName: "",
    surname: "",
    email: "",
    number: "",
    VIN: "",
    topic: "",
    message: "",
  });
  const handlerSubmitForm = async () => {
    setStatus("pending");
    fetch(`${import.meta.env.VITE_BASE_URL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(feedbackData),
    })
      .then((response) => {
        if (response.ok) {
          setStatus("fulfilled");
          setFeedbackData({
            gender: "male",
            firstName: "",
            lastName: "",
            surname: "",
            email: "",
            number: "",
            VIN: "",
            topic: "",
            message: "",
          });
          setTimeout(() => {
            setStatus("");
          }, 4000);
        } else {
          throw new Error("Ошибка отправки запроса");
        }
      })
      .catch((e) => {
        console.error(`Ошибка отправки сообщения: ` + e.message);
        setStatus("rejected");
      });
  };

  return (
    <Grid
      component="form"
      mt={5}
      xs={4}
      sm={6}
      md={10}
      lg={14}
      xl={16}
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        handlerSubmitForm();
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
        spacing={2}
        component={FormControl}
      >
        <Grid mb={1} xs={4} sm={8} md={12} lg={16} xl={18}>
          <FormLabel>Обращение</FormLabel>
          <RadioGroup
            value={feedbackData.gender}
            row
            sx={{ ":focus": { color: "#262626" } }}
            onChange={(e) => {
              setFeedbackData({
                ...feedbackData,
                gender: e.target.value,
              });
            }}
          >
            <FormControlLabel
              value="male"
              control={<Radio size="medium" />}
              label="Уважаемый"
              disabled={status === "pending" ? true : false}
            />
            <FormControlLabel
              value="female"
              control={<Radio size="medium" />}
              label="Уважаемая"
              disabled={status === "pending" ? true : false}
            />
          </RadioGroup>
        </Grid>
        <FormInput
          value={feedbackData.firstName}
          type="text"
          handleChange={(e) => {
            setFeedbackData({
              ...feedbackData,
              firstName: e.target.value,
            });
          }}
          name="firstName"
          label="Имя"
          required={true}
          disabled={status === "pending" ? true : false}
        />

        <FormInput
          value={feedbackData.lastName}
          type="text"
          handleChange={(e) => {
            setFeedbackData({
              ...feedbackData,
              lastName: e.target.value,
            });
          }}
          name="lastName"
          label="Фамилия"
          required={true}
          disabled={status === "pending" ? true : false}
        />
        <FormInput
          value={feedbackData.surname}
          type="text"
          handleChange={(e) => {
            setFeedbackData({
              ...feedbackData,
              surname: e.target.value,
            });
          }}
          name="surname"
          label="Отчество"
          required={false}
          disabled={status === "pending" ? true : false}
        />
        <FormInput
          value={feedbackData.email}
          type="email"
          handleChange={(e) => {
            setFeedbackData({
              ...feedbackData,
              email: e.target.value,
            });
          }}
          name="email"
          label="Email"
          required={true}
          disabled={status === "pending" ? true : false}
        />
        <FormInput
          value={feedbackData.number}
          type="tel"
          handleChange={(e) => {
            setFeedbackData({
              ...feedbackData,
              number: e.target.value,
            });
          }}
          name="number"
          label="Номер телефона"
          required={true}
          disabled={status === "pending" ? true : false}
        />
        <FormInput
          value={feedbackData.VIN}
          type="text"
          handleChange={(e) => {
            setFeedbackData({
              ...feedbackData,
              VIN: e.target.value,
            });
          }}
          name="VIN"
          label="VIN автомобиля, последние 7 знаков"
          required={false}
          disabled={status === "pending" ? true : false}
        />
        <Grid
          required
          fullWidth
          component={FormControl}
          xs={4}
          sm={8}
          md={6}
          lg={5.33}
          xl={6}
          disabled={status === "pending" ? true : false}
        >
          <InputLabel
            id="selectId"
            sx={{
              pt: "0.5rem",
              pl: "0.8rem",
              backgroundColor: "unSet",
            }}
          >
            Тема обращения
          </InputLabel>
          <Select
            required
            onChange={(e) => {
              setFeedbackData({
                ...feedbackData,
                topic: e.target.value,
              });
            }}
            fullWidth
            label="Тема обращения"
            labelId="selectId"
            value={feedbackData.topic}
            sx={{
              MozAppearance: "none",
            }}
          >
            {topics.map((topic) => (
              <MenuItem key={topic.id} value={topic.text}>
                {topic.text}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid xs={4} sm={8} md={12} lg={16} xl={18} mb={1}>
          <TextField
            disabled={status === "pending" ? true : false}
            required
            minRows={4}
            multiline
            label={"Текст письма"}
            name="message"
            value={feedbackData.message}
            onChange={(e) => {
              setFeedbackData({
                ...feedbackData,
                message: e.target.value,
              });
            }}
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "60%",
                xl: "70%",
              },
            }}
          />
        </Grid>
        <Grid
          xs={4}
          sm={8}
          md={12}
          lg={16}
          xl={18}
          mb={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Checkbox required disabled={status === "pending" ? true : false} />
          <Typography variant="subtitle2" sx={{ fontWeight: "300" }}>
            Даю согласие на обработку персональных данных
          </Typography>
        </Grid>
        <Grid
          xs={4}
          sm={8}
          md={12}
          lg={16}
          xl={18}
          mb={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            size="medium"
            id="FeedbackFormSubmit"
            disabled={status === "pending" ? true : false}
          >
            Отправить
          </Button>
          <RequestStatus status={status} />
        </Grid>
      </Grid>
    </Grid>
  );
}

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

const topics = [
  { id: 0, text: "Автомобили" },
  { id: 1, text: "Поддержка веб-сайта" },
  { id: 2, text: "Проверка на наличие технических акций" },
  { id: 3, text: "Другое" },
];

export default function FeedbackForm() {
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
    fetch(`${import.meta.env.VITE_BASE_URL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(feedbackData),
    }).catch((e) => alert(`Ошибка отправки сообщения: ` + e.message));

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
            />
            <FormControlLabel
              value="female"
              control={<Radio size="medium" />}
              label="Уважаемая"
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
        />
        <FormInput
          value={feedbackData.email}
          type="mail"
          handleChange={(e) => {
            setFeedbackData({
              ...feedbackData,
              email: e.target.value,
            });
          }}
          name="email"
          label="Email"
          required={true}
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
          <Checkbox required />
          <Typography variant="subtitle2" sx={{ fontWeight: "300" }}>
            Даю согласие на обработку персональных данных
          </Typography>
        </Grid>
        <Grid xl={3}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            id="FeedbackFormSubmit"
          >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

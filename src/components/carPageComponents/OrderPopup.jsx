import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

import PropTypes from "prop-types";
import { Box, Checkbox, Typography } from "@mui/material";
import RequestStatus from "../RequestStatus";

OrderPopup.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  total: PropTypes.number,
};

export default function OrderPopup({ make, model, total }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setStatus("");
    setOpen(false);
  }

  const handlerSendOrder = async (data) => {
    setStatus("pending");
    fetch(`${import.meta.env.VITE_BASE_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          setStatus("fulfilled");
          setTimeout(() => {
            handleClose();
          }, 3000);
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
      xs={4}
      sm={8}
      md={12}
      lg={16}
      xl={18}
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      p={2}
    >
      <Typography
        variant="p"
        textAlign="center"
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.4rem",
            lg: "1.5rem",
            xl: "1.7rem",
          },
          color: "#262626",
        }}
      >
        Для заказа или уточнения информации оставьте заявку
      </Typography>
      <Button variant="outlined" onClick={handleOpen} sx={{ margin: 2 }}>
        Оставить заявку
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            formJson.make = make;
            formJson.model = model;
            handlerSendOrder(JSON.stringify(formJson));
          },
        }}
      >
        <DialogTitle>Заказ автомобиля</DialogTitle>
        <DialogContent sx={{ justifyContent: "flex-start", px: "auto", py: 0 }}>
          <DialogContentText>
            Оставьте заявку на заказ автомобиля, наш оператор свяжется с вами
            для соглосования. Цена на данный автомобиль от:{" "}
            {total.toLocaleString("ru") + "₽"}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            name="fullName"
            label="ФИО"
            type="text"
            fullWidth
            variant="standard"
            disabled={status === "pending" ? true : false}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="city"
            label="Город проживания"
            type="text"
            fullWidth
            variant="standard"
            disabled={status === "pending" ? true : false}
          />
          <TextField
            autoFocus
            fullWidth
            required
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            variant="standard"
            disabled={status === "pending" ? true : false}
          />
          <TextField
            required
            margin="dense"
            name="telephone"
            label="Номер телефона"
            type="tel"
            variant="standard"
            disabled={status === "pending" ? true : false}
          />
          <Box
            width="100%"
            my={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 2,
            }}
            disabled={status === "pending" ? true : false}
          >
            <Checkbox
              required
              size="small"
              sx={{ padding: 0 }}
              disabled={status === "pending" ? true : false}
            />
            <Typography
              variant="subtitle2"
              sx={{
                color: "#666666",
                fontWeight: "300",
              }}
            >
              Даю согласие на обработку персональных данных
            </Typography>
          </Box>
          <Box
            width="100%"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              height: "3rem",
            }}
          >
            <RequestStatus status={status} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Назад</Button>
          <Button
            type="submit"
            disabled={
              status === "pending" || status === "fulfilled" ? true : false
            }
          >
            Отправить заявку
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

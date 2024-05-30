import { Box, CircularProgress as Pending, Typography } from "@mui/material";
import Okey from "@mui/icons-material/Done";
import Error from "@mui/icons-material/ErrorOutlineOutlined";
import PropTypes from "prop-types";

RequestStatus.propTypes = {
  status: PropTypes.string,
};

export default function RequestStatus({ status }) {
  switch (status) {
    case "pending": {
      return <Pending size={25} />;
    }
    case "fulfilled": {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Okey size="medium" sx={{ color: "blue" }} />
          <Typography
            variant="caption"
            sx={{ fontWeight: "300", color: "blue" }}
            textAlign="center"
          >
            Заявка успешно отправлена
          </Typography>
        </Box>
      );
    }
    case "rejected": {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Error sx={{ color: "red" }} />
          <Typography
            variant="caption"
            sx={{ fontWeight: "300", color: "red" }}
            textAlign="center"
          >
            Ошибка, повторите попытку
          </Typography>
        </Box>
      );
    }

    default: {
      break;
    }
  }
}

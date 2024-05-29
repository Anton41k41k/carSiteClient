import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import PropTypes from "prop-types";

Presentation.propTypes = {
  backdrop_path: PropTypes.string,
  model: PropTypes.string,
  make: PropTypes.string,
  year: PropTypes.number,
  total: PropTypes.number,
  setImageLoaded: PropTypes.func,
};

export default function Presentation({
  backdrop_path,
  model,
  make,
  year,
  total,
  setImageLoaded,
}) {
  return (
    <Grid component={Paper} elevation={0} sx={{ width: "100%" }}>
      <Box
        component={"section"}
        sx={{
          position: "relative",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component={"section"}
          className="main-img"
          sx={{
            position: "relative",
            zIndex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100vw",
            width: "100%",
            heidth: "auto",
          }}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src={backdrop_path}
            alt="model"
            rel="preload"
            onLoad={() => setImageLoaded(true)}
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              textAlign: "left",
              color: "white",
              padding: { xs: "0 2rem", md: "0 6rem" },
              top: { md: "25%", lg: "30%", xl: "30%" },
              bottom: { xs: "10%", sm: "12%" },
            }}
          >
            <Typography
              fontWeight="300"
              lineHeight="1rem"
              variant="p"
              mb={1}
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                  lg: "1.6rem",
                  xl: "3.2rem",
                },
              }}
            >
              {make}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "1.3rem",
                  sm: "1.8rem",
                  md: "2.5rem",
                  lg: "3rem",
                  xl: "4rem",
                },
              }}
              fontWeight="400"
              variant="h2"
            >
              {`${year} ${model}`}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.2rem",
                  lg: "1.3rem",
                  xl: "2.3rem",
                },
              }}
              fontWeight="400"
              variant="body1"
            >
              {`От ${total.toLocaleString("ru") + "₽"}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

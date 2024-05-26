import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PropTypes from "prop-types";

Overview.propTypes = {
  text: PropTypes.string,
};

export default function Overview({ text }) {
  return (
    <Grid component={Paper} elevation={0}>
      <Box
        component={Typography}
        fontWeight="300"
        lineHeight="1.5rem"
        variant="body1"
        paragraph={true}
        mb={1}
        sx={{
          width: "100%",
          textAlign: "justify",
          color: "#262626",
          padding: { xs: "2rem", md: "4rem" },
          fontSize: {
            xs: "1rem",
            sm: "0.8rem",
            md: "1.1rem",
            lg: "1.3rem",
          },
        }}
      >
        {text}
      </Box>
    </Grid>
  );
}

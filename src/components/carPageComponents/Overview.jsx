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
        lineHeight={{ xs: "1.5rem", lg: "2.2rem", xl: "2.7rem" }}
        variant="body1"
        paragraph={true}
        mb={1}
        sx={{
          textIndent: "1.5rem",
          width: "100%",
          textAlign: "justify",
          color: "#262626",
          padding: { xs: "2rem", md: "4rem" },
          fontSize: {
            xs: "1rem",
            sm: "0.8rem",
            md: "1.1rem",
            lg: "1.3rem",
            xl: "1.7rem",
          },
        }}
      >
        {text}
      </Box>
    </Grid>
  );
}

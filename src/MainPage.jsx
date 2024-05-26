import { Box, CircularProgress } from "@mui/material";
import "./mainPage.css";
import MainImgSection from "./components/mainComponents/MainImgSection";
import { lazy, useState } from "react";
const MainPageInformaton = lazy(() =>
  import("./components/mainComponents/MainPageInformation")
);

export default function MainPage() {
  const [imageLoaded, setImageLoaded] = useState();

  return (
    <Box component={"main"} className="main">
      <MainImgSection setImageLoaded={setImageLoaded} />
      {imageLoaded ? (
        <MainPageInformaton />
      ) : (
        <CircularProgress sx={{ mt: "15%" }} />
      )}
    </Box>
  );
}

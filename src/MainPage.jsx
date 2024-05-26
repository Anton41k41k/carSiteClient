import { Box, CircularProgress } from "@mui/material";
import "./mainPage.css";
import MainImgSection from "./components/mainComponents/MainImgSection";
import { Suspense, lazy, useState } from "react";
const MainPageInformaton = lazy(() =>
  import("./components/mainComponents/MainPageInformation")
);

export default function MainPage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box component={"main"} className="main">
      <MainImgSection setImageLoaded={setImageLoaded} />
      {!imageLoaded && <CircularProgress sx={{ margin: "15% 50vw" }} />}
      {imageLoaded && (
        <Suspense>
          <MainPageInformaton />
        </Suspense>
      )}
    </Box>
  );
}

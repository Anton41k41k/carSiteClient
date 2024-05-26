import { Box } from "@mui/material";
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
      {imageLoaded && (
        <Suspense>
          <MainPageInformaton />
        </Suspense>
      )}
    </Box>
  );
}

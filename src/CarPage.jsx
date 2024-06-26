import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Presentation from "./components/carPageComponents/Presentation";
const Design = lazy(() => import("./components/carPageComponents/Desing"));
import { CircularProgress, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
const Features = lazy(() => import("./components/carPageComponents/Features"));
const Characteristics = lazy(() =>
  import("./components/carPageComponents/Characteristics")
);
const OrderPopup = lazy(() =>
  import("./components/carPageComponents/OrderPopup")
);
const Overview = lazy(() => import("./components/carPageComponents/Overview"));

export default function CarPage() {
  const { carId } = useParams();
  const [information, setInformation] = useState();
  const [imageLoaded, setImageLoaded] = useState(false);
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    fetch(
      `https://66454468b8925626f8916e2a.mockapi.io/db/mainPage/makes/${carId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setInformation(result));
  }, [carId]);
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
      justifyContent="center"
    >
      {information ? (
        <Presentation
          {...information}
          imageLoaded={imageLoaded}
          setImageLoaded={setImageLoaded}
        />
      ) : (
        <CircularProgress sx={{ mt: "15%" }} />
      )}
      {imageLoaded && (
        <Suspense>
          <Overview text={information.overview} />
        </Suspense>
      )}
      {imageLoaded && (
        <Suspense>
          <Features {...information} isPhone={isPhone} />
        </Suspense>
      )}
      {imageLoaded && (
        <Suspense>
          <Characteristics characteristics={information.characteristics} />
        </Suspense>
      )}
      {imageLoaded && (
        <Suspense>
          <Design design={information.design} isPhone={isPhone} />
        </Suspense>
      )}
      {imageLoaded && (
        <Suspense>
          <OrderPopup {...information} />
        </Suspense>
      )}
    </Grid>
  );
}

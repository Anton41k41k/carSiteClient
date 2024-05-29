import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Box, Card, CardContent, Typography } from "@mui/material";

import PropTypes from "prop-types";

Desing.propTypes = {
  design: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  isPhone: PropTypes.bool,
};

export default function Desing({ design, isPhone }) {
  return (
    <>
      {isPhone ? (
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
          mb={2}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.8rem",
                md: "2.2rem",
                lg: "2.4rem",
                xl: "2.4rem",
              },
              color: "#262626",
            }}
            fontWeight="400"
            variant="h5"
            mb={1}
          >
            УНИКАЛЬНЫЙ ДИЗАЙН
          </Typography>
          <Swiper
            loop={true}
            initialSlide={0}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1110: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1600: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, Pagination]}
            pagination={true}
            centeredSlides={true}
            spaceBetween={40}
            autoplay={{
              reverseDirection: true,
              delay: 6000,
              disableOnInteraction: false,
            }}
            style={{
              padding: "1rem 1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            {design &&
              design.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <Box
                    className="newItemsInfo__item"
                    display="flex"
                    p={2}
                    sx={{
                      flexDirection: "column",
                      width: "100%",
                      maxWidth: "400px",
                    }}
                  >
                    <img src={slide.img} alt={slide.title} rel="preload" />
                    <Typography
                      variant="h4"
                      mt={1.5}
                      fontWeight="500"
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          sm: "1rem",
                          md: "1.1rem",
                          lg: "1.3rem",
                          xl: "1.5rem",
                        },
                        color: "#262626",
                      }}
                    >
                      {slide.title}
                    </Typography>
                    <Typography
                      variant="p"
                      textAlign="justify"
                      pt={1}
                      sx={{
                        fontSize: {
                          xs: "0.9rem",
                          sm: "1rem",
                          md: "1.1rem",
                          lg: "1.2rem",
                          xl: "1.3rem",
                        },

                        color: "#666666",
                      }}
                    >
                      {slide.text}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>
        </Grid>
      ) : (
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
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.8rem",
                md: "2.2rem",
                lg: "2.4rem",
                xl: "2.4rem",
              },
              color: "#262626",
            }}
            fontWeight="400"
            variant="h5"
            mb={1}
          >
            УНИКАЛЬНЫЙ ДИЗАЙН
          </Typography>
          <Box
            my={2}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            width="100%"
            px={2}
            gap={3}
          >
            {design.map((card) => (
              <Card
                key={card.id}
                sx={{ maxWidth: 345, margin: "0 1rem", width: "100%" }}
                elevation={0}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "100%" }}
                  rel="preload"
                />
                <CardContent>
                  <Typography
                    variant="h4"
                    mt={1.5}
                    fontWeight="500"
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1rem",
                        md: "1.1rem",
                        lg: "1.3rem",
                        xl: "1.5rem",
                      },
                      color: "#262626",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="p"
                    textAlign="justify"
                    pt={1}
                    sx={{
                      fontSize: {
                        xs: "0.9rem",
                        sm: "1rem",
                        md: "1.1rem",
                        lg: "1.2rem",
                        xl: "1.3rem",
                      },
                      color: "#666666",
                    }}
                  >
                    {card.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      )}
    </>
  );
}

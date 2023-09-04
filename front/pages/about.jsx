import {
  Box,
  Typography,
  Container,
  Card,
  Stack,
  useMediaQuery,
} from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AliceCarousel from "react-alice-carousel";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import DiamondIcon from "@mui/icons-material/Diamond";
import Value from "../values/value";
import { client } from "../lib/contentful/client";
import RichText from "../components/RichText";

import "react-alice-carousel/lib/alice-carousel.css";

export default function About({ props }) {
  const isXsScreen = useMediaQuery("(min-width:921px)");
  const isSm = useMediaQuery("(min-width:390px)");
  const isLg = useMediaQuery("(min-width:605px)");

  const content = props[0].fields.taniltsuulga;

  const smallerStyle = {
    width: isSm ? 350 : 300,
    color: "black",
    height: 260,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const items = [
    <Card sx={smallerStyle}>
      <Box
        sx={{
          borderRadius: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
          bgcolor: "rgb(222,234,224)",
        }}>
        <AutoGraphIcon
          sx={{ color: "rgb(50, 115, 70)", fontSize: "47px", m: 2 }}
        />
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
        Тасралтгүй Хөгжил
      </Typography>
    </Card>,

    <Card sx={smallerStyle}>
      <Box
        sx={{
          borderRadius: "60%",
          bgcolor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
          bgcolor: "rgb(214,238,248)",
        }}>
        <HealthAndSafetyIcon
          sx={{ color: "rgb(76,166,227)", fontSize: "47px", m: 2 }}
        />
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
        Аюулгүй Байдал
      </Typography>
    </Card>,

    <Card sx={smallerStyle}>
      <Box
        sx={{
          borderRadius: "60%",
          bgcolor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
          bgcolor: "rgb(247,231,231)",
        }}>
        <ThumbUpOffAltIcon
          sx={{ color: "rgb(219, 68, 64)", fontSize: "47px", m: 2 }}
        />
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
        Сэтгэл Ханамж
      </Typography>
    </Card>,
  ];
  return (
    <Box sx={{ width: "100%", pt: 7 }}>
      <Container maxWidth="rs" sx={{ height: "100%" }}>
        <Stack spacing={13}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={7}>
            <Stack spacing={3} sx={{ height: "100%" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "rgb(67,114,74)" }}>
                Танилцуулга
              </Typography>
              <Card sx={{ boxShadow: 0, bgcolor: "transparent" }}>
                <div className="mx-auto prose">
                  <RichText content={props[0].fields.taniltsuulga} />
                </div>
              </Card>
            </Stack>
            <img
              src={props[0].fields.img.fields.file.url}
              style={{ width: 450, height: 450 }}
            />
          </Stack>

          {isXsScreen ? (
            <Value />
          ) : (
            <AliceCarousel
              mouseTracking
              items={items}
              controlsStrategy="alternate"
              responsive={responsive}
              disableButtonsControls
            />
          )}
        </Stack>

        <Stack
          sx={{
            pb: 10,
            display: "flex",
            alignItems: "center",
            mt: 5,
          }}
          direction={{ sm: "column", md: "row" }}
          spacing={16}>
          <Box>
            <div
              style={{
                position: "relative",
                width: isLg ? 400 : 300,
                height: isLg ? 500 : 400,
              }}>
              <img
                style={{
                  width: isLg ? 400 : 300,
                  height: isLg ? 500 : 400,
                  top: 45,
                  left: 38,
                  zIndex: 2,
                  position: isLg ? "absolute" : "static",
                }}
                src={props[0].fields.coverPhoto.fields.file.url}
              />
              {isLg ? (
                <div
                  style={{
                    width: isLg ? 400 : 300,
                    height: isLg ? 500 : 400,
                    background: "rgb(25,42,5)",
                    background:
                      "linear-gradient(90deg, rgba(25,42,5,1) 0%, rgba(63,121,9,1) 10%, rgba(59,182,29,1) 81%, rgba(9,219,151,1) 100%, rgba(0,212,255,1) 100%)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                />
              ) : (
                <div />
              )}

              <div
                style={{
                  position: "absolute",
                  top: isLg ? 460 : 350,
                  left: isLg ? 300 : 100,
                  zIndex: 3,
                  color: "black",
                  background: " #00ff77",
                  width: 200,
                  height: 60,
                  padding: 6,
                }}>
                <Typography sx={{ fontWeight: "bold" }}>Bold</Typography>
                <Typography>CEO</Typography>
              </div>
            </div>
          </Box>

          <Box>
            <Card sx={{ mt: 7 }}>
              <FormatQuoteIcon
                sx={{
                  color: "darkgreen",
                  fontSize: "70px",
                }}
              />

              <Box sx={{ p: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                  Эрхэм Зорилго
                </Typography>
                <Typography>
                  Сэтгэлд нийцсэн эрүүл мэндийн оношилгоо,эмчилгээ, сувилгаа,
                  үйлчилгээг орчин үеийн дэвшилтэт технологи ашиглан, чанар
                  аюулгүй байдлыг хангасан нэгдмэл багийн үйл ажиллагааг
                  тасралтгүй хүргэхэд оршино.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <FormatQuoteIcon
                  sx={{
                    color: "darkgreen",
                    fontSize: "70px",
                  }}
                />
              </Box>
            </Card>

            <Card sx={{ mt: 7 }}>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <DiamondIcon
                    sx={{
                      color: "darkgreen",
                      fontSize: "60px",
                    }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Алсын Хараа
                  </Typography>
                </Box>
                <Typography>
                  Хүн амд үзүүлэх эмнэлгийн тусламж, үйлчилгээний чанарыг
                  тасралтгүй сайжруулах, олон улсад магадлан итгэмжлэгдсэн
                  эмнэлэг байна.
                </Typography>
              </Box>
            </Card>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

const responsive = {
  0: { items: 1 },
  500: { items: 1.3 },
  652: { items: 1.7 },
  770: { items: 2 },
  1024: { items: 3 },
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "tuhai" });

  return {
    props: {
      props: response.items,
      revalidate: 60,
    },
  };
};

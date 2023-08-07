import {
  Box,
  Typography,
  Card,
  Container,
  ThemeProvider,
  createTheme,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Value from "../values/value";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { Reveal } from "./reveal";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      rs: 1290,
      xl: 1600,
      customLg: 1400,
      customXl: 1980,
    },
  },
});

export default function Display() {
  const isSm = useMediaQuery("(min-width:390px)");
  const isXsScreen = useMediaQuery("(min-width:921px)");
  const isSize = useMediaQuery("(min-width:730px)");

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
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "rgb(243, 243, 246)",
          pb: "35px",
          display: "flex",
          alignItems: "center",
          color: "black",
        }}>
        <Container
          maxWidth="rs"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Box>
            <Card
              sx={{
                boxShadow: "none",
                maxWidth: 600,
                bgcolor: "rgb(243, 243, 246)",
                mt: 20,
              }}>
              <Reveal>
                <Typography
                  variant="h3"
                  sx={{ color: "#007541", fontWeight: "bold" }}>
                  ЭРҮҮЛ ИРЭЭДҮЙН ТӨЛӨӨ ЭРТ ҮЗҮҮЛЖ ЭРТ ЭМЧИЛЬЕ
                </Typography>
              </Reveal>
            </Card>

            <Card
              sx={{
                boxShadow: "none",
                maxWidth: 500,
                mt: 1,
                bgcolor: "rgb(243, 243, 246)",
              }}>
              <Reveal>
                {" "}
                <Typography sx={{ color: "#5E6282" }}>
                  Бриллиант эмнэлэг нь эрүүл мэндийн урьдчилан сэргийлэх үзлэг
                  шинжилгээг хувь хүн болон албан байгууллага нэгжийн онцлогт
                  тохируулан түргэн шуурхай, найдвартай хий үйлчилж байна
                </Typography>{" "}
              </Reveal>
            </Card>
          </Box>

          <Box sx={{ mt: 35 }}>
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
          </Box>

          <Box sx={{ width: "100%", height: "1px", bgcolor: "grey", mt: 15 }} />

          <Box sx={{ mt: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: isSize ? "row" : "column",
              }}>
              <Reveal>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography variant="h3" sx={{ color: "rgb(50, 115, 70)" }}>
                    10
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    ЖИЛИЙН ТУРШЛАГА
                  </Typography>
                </Box>
              </Reveal>

              <Reveal>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: isSize ? 0 : 8,
                  }}>
                  <Typography
                    variant="h3"
                    sx={{ textAlign: "center", color: "rgb(50, 115, 70)" }}>
                    430000
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    ХҮНД ҮЙЛЧИЛСЭН
                  </Typography>
                </Box>
              </Reveal>

              <Reveal>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                    alignItems: "center",
                    mt: isSize ? 0 : 8,
                  }}>
                  <Typography
                    variant="h3"
                    sx={{ textAlign: "center", color: "rgb(50, 115, 70)" }}>
                    120
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    НИЙТ АЖИЛЛАГСАД
                  </Typography>
                </Box>
              </Reveal>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

const responsive = {
  0: { items: 1 },
  500: { items: 1.3 },
  652: { items: 1.7 },
  770: { items: 2 },
  1024: { items: 3 },
};

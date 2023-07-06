import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  ThemeProvider,
  createTheme,
  Button,
} from "@mui/material";
import styl from "../styles/styles.module.css";

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
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          width: "100wv",
          height: "100vh",
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
            alignItems: "center",
          }}>
          <Box>
            <Card
              sx={{
                boxShadow: "none",
                maxWidth: 600,
                bgcolor: "rgb(243, 243, 246)",
              }}>
              <Typography
                variant="h3"
                sx={{ color: "#007541", fontWeight: "bold" }}>
                ЭРҮҮЛ ИРЭЭДҮЙН ТӨЛӨӨ ЭРТ ҮЗҮҮЛЖ ЭРТ ЭМЧИЛЬЕ
              </Typography>
            </Card>

            <Card
              sx={{
                boxShadow: "none",
                maxWidth: 500,
                mt: 1,
                bgcolor: "rgb(243, 243, 246)",
              }}>
              <Typography sx={{ color: "#5E6282" }}>
                Бриллиант эмнэлэг нь эрүүл мэндийн урьдчилан сэргийлэх үзлэг
                шинжилгээг хувь хүн болон албан байгууллага нэгжийн онцлогт
                тохируулан түргэн шуурхай, найдвартай хий үйлчилж байна
              </Typography>
            </Card>
            {/* 
            <Button>Facebook хуудас</Button> */}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

import {
  Box,
  Stack,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Map from "./contacts/map";
import { Info } from "./contacts/info";
import { Social } from "./contacts/social";

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

export default function Contact() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          width: "100vw",
          height: { xs: "114vh", sm: "61vh", color: "white" },
          bgcolor: "rgb(34, 34,34)",
        }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "107vh", sm: "55vh" },
          }}>
          <Container
            maxWidth="rs"
            sx={{
              height: "100%",
              pt: 6,
            }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={8}>
              <Info />
              <Map />
              <Social />
            </Stack>
          </Container>
        </Box>

        <Box sx={{ height: "1px", width: "100%", bgcolor: "rgb(61,61,61)" }} />
        <Box sx={{ width: "100%", height: "6vh" }}>
          <Container
            maxWidth="rs"
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Typography fontSize="small">
              {" "}
              © 2023 Brilliant Эмнэлэг. Зохиогчийн эрхийг хуулиар хамгаална.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

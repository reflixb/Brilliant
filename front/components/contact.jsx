import {
  Box,
  Stack,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
  useMediaQuery,
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
  const matches = useMediaQuery("(min-width:750px)");
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          width: "100vw",
          bgcolor: "rgb(34, 34,34)",
        }}>
        <Box
          sx={{
            width: "100%",
          }}>
          <Container
            maxWidth="rs"
            sx={{
              height: "100%",
              py: 8,
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: matches ? "row" : "column",
              }}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={7}>
                <Social />
                <Map />
              </Stack>

              <Box sx={{ mt: matches ? 0 : 7 }}>
                {" "}
                <Info />{" "}
              </Box>
            </Box>
          </Container>
        </Box>

        <Box sx={{ height: "1px", width: "100%", bgcolor: "rgb(61,61,61)" }} />
        <Box sx={{ width: "100%", p: 2 }}>
          <Container
            maxWidth="rs"
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Typography fontSize="small">
              © 2023 Brilliant Эмнэлэг. Зохиогчийн эрхийг хуулиар хамгаална.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

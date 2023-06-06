import {
  Box,
  Stack,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

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
      <Box sx={{ width: "100vw", height: "60vh" }}>
        <Box
          sx={{
            width: "100%",
            height: "50vh",
          }}>
          <Container
            maxWidth="rs"
            sx={{
              bgcolor: "rgb(34, 34,34)",
              height: "100%",
            }}>
            <Stack direction="row">
              <Box sx={{ mt: 7 }}>
                <Box>
                  <Typography>Холбоо барих</Typography>
                  <Box
                    sx={{
                      height: "2px",
                      width: "60px",
                      bgcolor: "rgb(50, 115, 70)",
                      mt: 1.5,
                    }}
                  />
                </Box>

                <Stack>
                  <Box sx={{ display: "flex", mt: 4 }}>
                    <LocationOnIcon />
                    <Typography sx={{ ml: 1 }}>Brilliant</Typography>
                  </Box>

                  <Box sx={{ display: "flex", mt: 2 }}>
                    <EmailIcon />
                    <Typography sx={{ ml: 1 }}>info@brilliant.mn</Typography>
                  </Box>

                  <Box sx={{ display: "flex", mt: 2 }}>
                    <CallIcon />
                    <Typography sx={{ ml: 1 }}>7609 6666</Typography>
                  </Box>
                </Stack>
              </Box>

              <Box sx={{ mt: 7 }}>
                <Box>
                  <Typography>Манай хаяг</Typography>
                  <Box
                    sx={{
                      height: "2px",
                      width: "60px",
                      bgcolor: "rgb(50, 115, 70)",
                      mt: 1.5,
                    }}
                  />
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

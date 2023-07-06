import { Box, Typography, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Social = () => {
  return (
    <Box>
      <Stack spacing={1}>
        <Box
          sx={{
            display: "flex",
          }}>
          <img src="./images/blogo.svg" alt="" />

          <Typography
            variant="h5"
            color="inherit"
            sx={{
              display: "flex",
              textAlign: "center",
              mx: 1,
              fontWeight: "bold",
              color: "rgb(50, 115, 70)",
            }}>
            Brilliant
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <a
            href="https://www.facebook.com/brilliantclinicmongolia"
            target="_blank"
            rel="noopener noreferrer">
            <Box
              sx={{ bgcolor: "rgb(56, 116, 203)", borderRadius: "50%", p: 1 }}>
              <FacebookIcon sx={{ color: "white" }} fontSize="medium" />
            </Box>
          </a>

          <a
            href="https://twitter.com/brilliantclinic?lang=en"
            target="_blank"
            rel="noopener noreferrer">
            <Box
              sx={{ bgcolor: "rgb(75, 154, 229)", borderRadius: "50%", p: 1 }}>
              <TwitterIcon sx={{ color: "white" }} fontSize="medium" />
            </Box>
          </a>
        </Stack>
      </Stack>
    </Box>
  );
};

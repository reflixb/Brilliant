import { Box, Typography, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

export const Info = () => {
  return (
    <Box>
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
          <Typography sx={{ ml: 1 }}>Улаанбаатар хот</Typography>
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
  );
};

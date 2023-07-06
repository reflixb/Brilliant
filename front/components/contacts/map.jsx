import React from "react";
import { Box, Typography } from "@mui/material";
const Map = () => (
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
    <Box sx={{ mt: 4 }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.1185449061304!2d106.93942841157217!3d47.91474366652869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969385c30fba19%3A0xcc50996bf5aaea14!2sBrilliant%20Hospital!5e0!3m2!1sen!2smn!4v1686203441147!5m2!1sen!2smn"
        width="230"
        height="240"
        style={{ border: "0" }}
        loading="lazy"
      />
    </Box>
  </Box>
);

export default Map;

import { Box, Stack, Card, Typography } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { Reveal } from "../components/reveal";

export default function Value() {
  return (
    <Box>
      <Stack direction="row" spacing={7}>
        <Reveal>
          {" "}
          <Card sx={style}>
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
            <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
              Тасралтгүй Хөгжил
            </Typography>
          </Card>
        </Reveal>

        <Reveal>
          {" "}
          <Card sx={style}>
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
            <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
              Аюулгүй Байдал
            </Typography>
          </Card>
        </Reveal>

        <Reveal>
          {" "}
          <Card sx={style}>
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
            <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
              Сэтгэл Ханамж
            </Typography>
          </Card>{" "}
        </Reveal>
      </Stack>
      <Box sx={{ width: "100%", height: 75 }} />
    </Box>
  );
}

const style = {
  width: 380,
  color: "black",
  height: 290,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  ":hover": {
    boxShadow: 20,
  },
};

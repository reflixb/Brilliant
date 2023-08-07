import {
  Box,
  Typography,
  Stack,
  Card,
  useMediaQuery,
  theme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Info = () => {
  const matches = useMediaQuery("(min-width:830px)");
  const fSize = matches ? "16px" : "15px";

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
          <Card
            sx={{
              ml: 2,
              maxWidth: 400,
              bgcolor: "transparent",
              color: "white",
              boxShadow: "none",
            }}>
            <Typography sx={{ fontSize: fSize }}>
              БЗД, 13 хороолол, Хавдар судлалын үндэсний төвийн ард Бриллиант
              эмнэлэг
            </Typography>
          </Card>
        </Box>

        <Box sx={{ display: "flex", mt: 2 }}>
          <EmailOutlinedIcon />
          <Typography sx={{ ml: 2 }}>info@brilliant.mn</Typography>
        </Box>

        <Box sx={{ display: "flex", mt: 2 }}>
          <CallIcon />
          <Typography sx={{ ml: 2 }}>7609 6666</Typography>
        </Box>

        <Box sx={{ display: "flex", mt: 2, alignItems: "center" }}>
          <AccessTimeIcon />
          <Box sx={{ ml: 2 }}>
            <Card
              sx={{
                boxShadow: "none",
                bgcolor: "transparent",
                color: "white",
              }}>
              <Typography sx={{ fontSize: fSize }}>
                Даваа - Баасан 08:30 - 17:00
              </Typography>
              <Typography sx={{ fontSize: fSize }}>
                Бямба - Ням: Амарна
              </Typography>
              <Typography sx={{ fontSize: fSize }}>Ням: Амарна</Typography>
            </Card>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

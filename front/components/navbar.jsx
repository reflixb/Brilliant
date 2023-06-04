import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Stack,
  Menu,
  MenuItem,
  IconButton,
  useTheme,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/hover.module.css";

const style = {
  my: 1,
  color: "black",
  textTransform: "none",
  textDecoration: "none",
  fontSize: "16px",
  "&:hover": {
    bgcolor: "black",
    color: "white",
    borderRadius: "5px",
  },
  fontWeight: "547",
};
const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      rs: 1330,
      xl: 1600,
      customLg: 1400,
      customXl: 1980,
    },
  },
});

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  //   const isXsScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          bgcolor: "white",
          color: "black",
          boxShadow: "none",
          height: "78px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Container maxWidth="rs">
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Stack
              direction="row"
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
              }}
              spacing={7}>
              <Button sx={style}>Services</Button>
              <Button sx={style} size="large">
                About us
              </Button>
              <Button sx={style} size="large">
                Help us
              </Button>
              <Button sx={style} size="large">
                News
              </Button>
              <Button sx={style} size="large">
                Contact
              </Button>
            </Stack>

            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ p: 0 }}>
                <MenuIcon fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <Stack
                    spacing={1}
                    sx={{ display: { xs: "block", md: "none" } }}>
                    <Typography textAlign="left">Services</Typography>
                    <Typography textAlign="left">About us</Typography>
                    <Typography textAlign="left">Help Center</Typography>
                    <Typography textAlign="left">News</Typography>
                    <Typography textAlign="left">Contact</Typography>
                  </Stack>
                </MenuItem>
              </Menu>
            </Box>

            <img src="/images/blogo.svg" alt="" />

            <Typography
              variant="h5"
              color="inherit"
              className={styles.hover}
              sx={{
                display: "flex",
                textAlign: "center",
                mx: 1,
                mt: 1,
                fontWeight: "bold",
                "&:hover": {
                  color: "rgb(219, 68, 64)",
                },
              }}>
              Brilliant
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </ThemeProvider>
  );
}

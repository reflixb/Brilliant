"use client";
import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Link,
  Container,
  createTheme,
  ThemeProvider,
  Stack,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.png";

const style = {
  my: 1,
  mx: 4,
  color: "black",
  textDecoration: "underline",
  textDecorationColor: "gray",
  textTransform: "none",
  fontSize: "16px",
};
const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1600,
      customLg: 1400,
      customXl: 1980,
    },
  },
});

export default function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          bgcolor: "white",
          color: "black",
          boxShadow: "none",
        }}>
        <Container maxWidth="customXl">
          <Toolbar sx={{ flexWrap: "wrap" }} className="test">
            <Stack
              direction="row"
              sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
              <Link variant="button" color="text.primary" href="#" sx={style}>
                Services
              </Link>
              <Link variant="button" color="text.primary" href="#" sx={style}>
                About us
              </Link>
              <Link variant="button" color="text.primary" href="#" sx={style}>
                Help Center
              </Link>
              <Link variant="button" color="text.primary" href="#" sx={style}>
                News
              </Link>
              <Link variant="button" color="text.primary" href="#" sx={style}>
                Contact
              </Link>
            </Stack>

            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
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

            <Typography
              variant="h5"
              color="inherit"
              sx={{ display: "flex", textAlign: "center", color: "#007541" }}>
              Brilliant
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ width: "100%", height: "130px" }} />
    </ThemeProvider>
  );
}

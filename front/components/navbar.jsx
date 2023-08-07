import React from "react";
import {
  AppBar,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Stack,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/hover.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navLinks = [
    {
      name: "Нүүр",
      link: "/",
    },
    {
      name: "Бидний тухай",
      link: "/about",
    },
    {
      name: "Үйлчилгээ",
      link: "/services",
    },
    {
      name: "Эмч нар",
      link: "/doctor",
    },
    {
      name: "Мэдээлэл",
      link: "/posts",
    },
  ];

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar
        position="sticky"
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
          <Box
            sx={{
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}>
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
              }}
              onClick={() => {
                router.push("/");
              }}>
              Brilliant
            </Typography>
            <Box sx={{ flexGrow: "1" }} />

            {/* color: "rgb(50, 115, 70)"  */}

            <Stack
              direction="row"
              spacing={20}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}>
              <nav className="shift">
                <ul>
                  <li>
                    {navLinks.map(({ link, name }) => {
                      return (
                        <Box
                          key={name}
                          sx={{ color: "black", fontSize: "17px" }}>
                          <Link
                            className={
                              pathname === link ? "text-green-700" : ""
                            }
                            href={link}>
                            {name}
                          </Link>
                        </Box>
                      );
                    })}
                  </li>
                </ul>
              </nav>
            </Stack>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                    spacing={2}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}>
                    {navLinks.map(({ link, name }) => {
                      return (
                        <Box key={name} sx={{ color: "black" }}>
                          <Link
                            className={
                              pathname === link ? "text-green-700" : ""
                            }
                            href={link}>
                            {name}
                          </Link>
                        </Box>
                      );
                    })}
                  </Stack>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

import Navbar from "./navbar";
import Contact from "./contact";
import "../src/app/globals.css";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";

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

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <main
        style={{
          backgroundColor: "rgb(243, 243, 246)",
          color: "black",
        }}>
        {children}
      </main>
      <Contact />
    </ThemeProvider>
  );
}

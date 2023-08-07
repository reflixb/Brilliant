"use client";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material";

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

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <html lang="en">
        <body suppressHydrationWarning={true}>{children}</body>
      </html>
    </ThemeProvider>
  );
}

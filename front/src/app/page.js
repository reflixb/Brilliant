"use client";
import { Box } from "@mui/material";
import Navbar from "../../components/navbar";
import Display from "../../components/display";
import Contact from "../../components/contact";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Display />
      <Contact />
    </Box>
  );
}

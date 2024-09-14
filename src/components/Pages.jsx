import { Box, Stack } from "@mui/material";

function Pages() {
  return (
    <Box className="hidden md:flex items-center gap-10  justify-center">
      <a href="#">Home</a>
      <a href="#">Collection</a>
      <a href="#choose">Choose</a>
      <a href="#about">About</a>
      <a href="#plans">Roadmap</a>
    </Box>
  );
}

export default Pages;

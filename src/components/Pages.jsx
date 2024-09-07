import { Box, Stack } from "@mui/material";

function Pages() {
  return (
    <Box className="hidden md:flex items-center gap-10  justify-center">
      <a href="#">Home</a>
      <a href="#">Collection</a>
      <a href="#">Chose</a>
      <a href="#">About</a>
      <a href="#">Roadmap</a>
    </Box>
  );
}

export default Pages;

import { Box, Stack, Typography } from "@mui/material";
import image from "../Images/01.png.png";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
function ArtistCard({ style }) {
  return (
    <Box className="text-center">
      <Box className={`w-fit m-auto relative ${style}`} data-aos="fade-up">
        <img
          src={image}
          alt="artits-image"
          className="block outline outline-secondary p-1 mb-3 rounded-3xl"
        />
        <Typography variant="h6">Ahmed Tarek</Typography>
        <Typography variant="p" className="text-primary">
          Co-founder
        </Typography>
        <Stack
          direction={"row"}
          gap="10px"
          justifyContent={"center"}
          sx={{ marginTop: "20px" }}
        >
          <Twitter sx={{ fontSize: "20px" }} />
          <LinkedIn sx={{ fontSize: "20px" }} />
          <Instagram sx={{ fontSize: "20px" }} />
        </Stack>
      </Box>
    </Box>
  );
}

export default ArtistCard;

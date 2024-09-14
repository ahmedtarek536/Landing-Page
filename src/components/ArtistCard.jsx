import { Box, Stack, Typography } from "@mui/material";
import image from "../Images/01.png.png";
import { Instagram, LinkedIn, Mail, Twitter } from "@mui/icons-material";
function ArtistCard({ style, artist }) {
  return (
    <Box className="text-center">
      <Box className={`w-fit m-auto relative ${style}`} data-aos="fade-up">
        <img
          src={artist.image}
          alt="artits-image"
          className="block outline outline-secondary p-1 mb-3 rounded-3xl"
        />
        <Typography variant="h6">{artist.name}</Typography>
        <Typography variant="p" className="text-primary">
          {artist.job}
        </Typography>
        <Stack
          direction={"row"}
          gap="10px"
          justifyContent={"center"}
          sx={{ marginTop: "20px" }}
        >
          <Twitter sx={{ fontSize: "20px", cursor: "pointer" }} />
          <LinkedIn sx={{ fontSize: "20px", cursor: "pointer" }} />
          <Mail sx={{ fontSize: "20px", cursor: "pointer" }} />
        </Stack>
      </Box>
    </Box>
  );
}

export default ArtistCard;

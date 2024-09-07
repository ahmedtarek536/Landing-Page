import { Box, Typography } from "@mui/material";
import image from "../Images/Link ⏵ art_04.jpg.png";
function CollectionCard() {
  return (
    <Box className="text-center min-w-fit">
      <img src={image} alt="collection-image" className="" />
      <Typography variant="h5">Aelcy Art</Typography>
      <p className="text-sm text-[#777]">By The Roney</p>
    </Box>
  );
}

export default CollectionCard;

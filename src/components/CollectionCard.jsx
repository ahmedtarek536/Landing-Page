import { Box, Typography } from "@mui/material";
import image from "../Images/Link ⏵ art_04.jpg.png";
function CollectionCard({ collection }) {
  return (
    <Box className="text-center min-w-fit">
      <img src={collection.img} alt="collection-image" className="mb-3" />
      <Typography variant="h5">{collection.title}</Typography>
      <p className="text-sm text-[#777]">{collection.author}</p>
    </Box>
  );
}

export default CollectionCard;

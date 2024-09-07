import { Box } from "@mui/material";
import image from "../Images/Vector.png";
function Divider() {
  return (
    <Box>
      <img src={image} alt="divider-line" className="w-fit" />
    </Box>
  );
}

export default Divider;

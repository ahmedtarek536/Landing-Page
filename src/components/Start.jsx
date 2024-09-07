import Button from "./Button";
import TitleSection from "./TitleSection";
import BGImage from "../Images/div.cta-bg.png";
import { Box, Typography } from "@mui/material";

function Start() {
  return (
    <Box className={` mt-60 text-center start-section px-3 py-20 `}>
      <TitleSection firstTitle={"Let's Start"} secondTitle={"work"} />
      <br />

      <Typography variant="p" className="text-primary block mt-3 mb-12">
        Invest and manage all your NFTs at one place.
      </Typography>
      <br />
      <br />
      <Button>Get Start</Button>
    </Box>
  );
}

export default Start;

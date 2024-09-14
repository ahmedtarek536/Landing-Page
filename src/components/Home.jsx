import { Avatar, AvatarGroup, Box, Stack, Typography } from "@mui/material";
import Header from "./Header";
import image from "../Images/div.col-lg-6.png";
import avtar from "../Images/03.png.png";

import Button from "./Button";

function Home() {
  return (
    <Box>
      <Header />
      <Box className="flex flex-col justify-between items-center gap-16 md:flex-row mt-20 md:mt-10 z-[-1] relative overflow-hidden">
        <Box className="">
          <h2 className="mb-6 font-bold text-4xl sm:text-5xl lg:text-6xl ">
            High Quailty Software Products
          </h2>
          <Typography
            variant="p"
            className="text-primary block"
            data-aos="fade-up"
          >
            A 890 piece custom Nfthub's collection is joining the NFT space on
            Opensea.
          </Typography>
          <br />
          <br />
          <Button>Work With US</Button>
          <Stack
            direction={"row"}
            gap="20px"
            className="mt-8"
            alignItems={"center"}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <AvatarGroup max={3} alignItems="start">
              <Avatar alt="Remy Sharp" src={avtar} />
              <Avatar alt="Travis Howard" src={avtar} />
              <Avatar alt="Cindy Baker" src={avtar} />
            </AvatarGroup>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                47k+
              </Typography>
              <p className="text-primary text-sm">Community</p>
            </Box>
          </Stack>
        </Box>
        <img src={image} alt="" className="md:w-[50%]" data-aos="fade-left" />
      </Box>
    </Box>
  );
}

export default Home;

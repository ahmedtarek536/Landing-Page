import { Box } from "@mui/material";
import TitleSection from "./TitleSection";
import ArtistCard from "./ArtistCard";

function Artist() {
  return (
    <Box className="mt-40 ">
      <TitleSection firstTitle={"Meet"} secondTitle={"the artists"} />
      <Box className="grid grid-template-250 gap-8 mt-20">
        <ArtistCard />
        <ArtistCard style={"md:top-10"} />
        <ArtistCard />
        <ArtistCard style={"md:top-10"} />
      </Box>
    </Box>
  );
}

export default Artist;

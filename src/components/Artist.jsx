import { Box } from "@mui/material";
import TitleSection from "./TitleSection";
import ArtistCard from "./ArtistCard";
import Artists from "../data/ArtistData";

function Artist() {
  return (
    <Box className=" ">
      <TitleSection firstTitle={"Meet"} secondTitle={"the artists"} />
      <Box className="grid grid-template-250 gap-8 mt-20">
        {Artists.map((aritst, i) => (
          <ArtistCard
            artist={aritst}
            style={i % 2 != 0 ? "md:top-10" : ""}
            key={i}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Artist;

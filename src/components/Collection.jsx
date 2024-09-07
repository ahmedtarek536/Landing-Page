import { Box, Typography } from "@mui/material";
import CollectionCard from "./CollectionCard";
import Button from "./Button";
import TitleSection from "./TitleSection";

function Collection() {
  return (
    <Box className="mt-28">
      <TitleSection firstTitle={"NFTHub's"} secondTitle={"Collection"} />
      <Box className="w-full overflow-scroll collection mt-16">
        <Box
          className="flex  w-full gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </Box>
      </Box>
      <Box className="text-center mt-20">
        <Button>View Collection</Button>
      </Box>
    </Box>
  );
}

export default Collection;

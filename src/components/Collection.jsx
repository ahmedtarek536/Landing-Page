import { Box } from "@mui/material";
import CollectionCard from "./CollectionCard";
import Button from "./Button";
import TitleSection from "./TitleSection";
import CollectionData from "../data/CollectionData";

function Collection() {
  return (
    <Box className="">
      <TitleSection firstTitle={"NFTHub's"} secondTitle={"Collection"} />
      <Box className="w-full overflow-scroll collection mt-16">
        <Box
          className="flex  w-full gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {CollectionData.map((collection, i) => (
            <CollectionCard key={i} collection={collection} />
          ))}
        </Box>
      </Box>
      <Box className="text-center mt-20">
        <Button>View Collection</Button>
      </Box>
    </Box>
  );
}

export default Collection;

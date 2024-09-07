import { Box, Stack } from "@mui/material";
import TitleSection from "./TitleSection";
import Button from "./Button";

function Drop() {
  return (
    <Box
      className="w-60% border border-secondary rounded-3xl mt-32 text-center px-8 py-12"
      data-aos="fade-up"
    >
      <TitleSection firstTitle={"Never"} secondTitle={"miss a drop!"} />
      <p className="text-sm text-primary">
        Subscribe to our super-rare and exclusive drops & collectibles.
      </p>
      <Box className="mt-8 flex flex-col sm:flex-row justify-center gap-6 items-center">
        <input
          type="text"
          className="w-full rounded-full p-3 px-5 bg-[#7b758325] max-w-96"
          placeholder="Enter  your email"
        />
        <Button>Subscripe</Button>
      </Box>
    </Box>
  );
}

export default Drop;

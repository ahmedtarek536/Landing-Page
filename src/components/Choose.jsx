import { Box } from "@mui/material";
import ChooseCard from "./ChooseCard";
import TitleSection from "./TitleSection";
import whyChooseUs from "../data/WhyChooseUs";

function Choose() {
  const data = whyChooseUs;
  let count = 1;
  return (
    <Box className="">
      <TitleSection firstTitle={"Why"} secondTitle={"Choose US?"} />
      <Box className="grid grid-template-250 gap-8 mt-20">
        {data.map((e, i) => {
          count += 2;
          return (
            <ChooseCard
              delay={`${count++ * 100}`}
              key={i}
              data={e}
              style={i % 2 != 0 ? "sm:top-12" : ""}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default Choose;

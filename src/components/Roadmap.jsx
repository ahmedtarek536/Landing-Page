import { Box } from "@mui/material";
import TitleSection from "./TitleSection";
import RoadmapCard from "./RoadmapCard";
import roadmapPlans from "../data/RoadmapData";

function Roadmap() {
  const data = roadmapPlans;
  let count = 1;
  return (
    <Box className="mt-48">
      <TitleSection firstTitle="NFTHub's" secondTitle="Roadmap" />
      <Box className="grid grid-template-300 gap-10 mt-16">
        {data.map((plan, i) => {
           count += 2;
          return <RoadmapCard key={i} data={plan} delay={count * 100} />;
        })}
      </Box>
    </Box>
  );
}

export default Roadmap;

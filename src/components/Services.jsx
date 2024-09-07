import { Box } from "@mui/material";
import TitleSection from "./TitleSection";
import ServiceCard from "./ServiceCard";
import ourServices from "../data/ServicesData";

function Services() {
  return (
    <Box className="mt-44">
      <TitleSection firstTitle={"Our"} secondTitle={"Services"} />
      <Box>
        {ourServices.map((service, i) => (
          <ServiceCard key={i} data={service} reverse={i % 2 !== 0} />
        ))}
      </Box>
    </Box>
  );
}

export default Services;

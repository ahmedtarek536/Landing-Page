import { Box, Link } from "@mui/material";
import image from "../Images/features-06.png.png";
function ServiceCard({ reverse, data }) {
  let direction = reverse ? "md:order-2" : "md:order-0";
  return (
    <Box className="grid grid-template-350 gap-16  mt-44 sm:mt-20 overflow-hidden">
      <img
        src={image}
        alt="service photo"
        data-aos={`${!reverse ? "fade-right" : "fade-left"}`}
        className={`${direction}`}
      />
      <Box data-aos={`${!reverse ? "fade-left" : "fade-right"}`}>
        <p className=" text-linear font-bold ">{data.num}</p>
        <h4 className="text-5xl font-bold mt-3 font-mono">{data.title}</h4>
        <p className="text-primary mt-8 mb-2 text-lg ">{data.description}</p>
        <Link sx={{ color: "" }}>Learn More</Link>
      </Box>
    </Box>
  );
}

export default ServiceCard;

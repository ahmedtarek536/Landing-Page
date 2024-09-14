import { Box, Divider, Stack, Typography } from "@mui/material";
import icon from "../Images/Check_Icon.png";
function RoadmapCard({ delay, data }) {
  return (
    <Box
      className="px-8 py-12 border border-secondary rounded-3xl"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="p" className="text-linear font-semibold">
          PHASAE 1
        </Typography>
        <Box className="bg-linear rounded-full p-3 text-center text-white flex items-center justify-center"></Box>
      </Stack>
      <Typography
        variant="h5"
        className="font-bold"
        sx={{
          margin: "10px 0px 15px",
          fontWeight: "bold",
        }}
      >
        {data.title}
      </Typography>

      <Typography variant="p" className="text-primary">
        {data.description}
      </Typography>
      <br />
      <br />
      <Divider />
      <Box className="mt-6">
        {data.features.map((feature, i) => (
          <Feature key={i} feature={feature} />
        ))}
      </Box>
    </Box>
  );
}

function Feature({ feature }) {
  return (
    <Box className="flex gap-2 items-start justify-start mt-4">
      <img src={icon} alt="" />
      <Typography variant="p" className="font-semibold  block text-sm">
        {" "}
        {feature}
      </Typography>
    </Box>
  );
}

export default RoadmapCard;

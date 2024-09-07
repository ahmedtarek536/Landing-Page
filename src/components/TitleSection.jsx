import { Typography } from "@mui/material";

function TitleSection({ firstTitle, secondTitle }) {
  return (
    <Typography
      variant="h3"
      sx={{ fontWeight: "bold" }}
      className="text-center"
      data-aos="fade-up"
    >
      {firstTitle} <span className="text-linear">{secondTitle}</span>
    </Typography>
  );
}

export default TitleSection;

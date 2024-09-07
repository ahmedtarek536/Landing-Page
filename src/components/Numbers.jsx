import { Box, Typography } from "@mui/material";
import companyStats from "../data/NumberData";

function Numbers() {
  const len = companyStats.length - 1;
  return (
    <Box className="grid grid-template-250 gap-8 mt-60">
      {companyStats.map((e, i) => (
        <Number data={e} key={i} style={i != len ? "" : "md:border-none"} />
      ))}
    </Box>
  );
}

function Number({ style, data }) {
  return (
    <Box className={`border-r-2 ${style} border-secondary text-center`}>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        {data.stat}
      </Typography>
      <p className="text-primary ">{data.description}</p>
    </Box>
  );
}

export default Numbers;

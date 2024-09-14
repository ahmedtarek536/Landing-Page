import { Box, Typography } from "@mui/material";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
function ChooseCard({ style, delay, data }) {
  return (
    <Box
      className={`px-6 pt-12 pb-4  border border-secondary rounded-2xl relative ${style}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <img src={data.icon} alt="" />
      <h5 className="text-3xl font-bold mb-6 mt-6">{data.title}</h5>
      <Typography variant="p" className="text-primary">
        {data.description}
      </Typography>
    </Box>
  );
}

export default ChooseCard;

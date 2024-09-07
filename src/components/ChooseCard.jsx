import { Box, Typography } from "@mui/material";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
function ChooseCard({ style, delay, data }) {
  return (
    <Box
      className={`px-8 py-12  border border-secondary rounded-2xl relative ${style}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <FontAwesomeIcon icon={faCircleCheck} className="text-3xl icon-linear" />
      <h5 className="text-3xl font-bold mb-6 mt-3">{data.title}</h5>
      <Typography variant="p" className="text-primary">
        {data.description}
      </Typography>
    </Box>
  );
}

export default ChooseCard;

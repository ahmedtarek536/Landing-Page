import { LinkedIn, MailOutline, WhatsApp } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import BarIcon from "../Images/Bar.png";
import Bar from "./Bar";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      gap={"6px"}
      className="relative"
    >
      {/* <Twitter sx={{ cursor: "pointer" }} /> */}
      <LinkedIn sx={{ cursor: "pointer" }} />
      <MailOutline sx={{ cursor: "pointer" }} />
      <WhatsApp sx={{ cursor: "pointer" }} />
      <img
        src={BarIcon}
        alt="bar"
        className="block pl-2 sm:pl-6 md:hidden cursor-pointer"
        onClick={() => setIsOpen((e) => !e)}
      />
      <Box className="absolute top-10 right-0 z-10 w-[200px] sm:w-[300px] md:hidden">
        {isOpen && <Bar />}
      </Box>
    </Stack>
  );
}

export default Contact;

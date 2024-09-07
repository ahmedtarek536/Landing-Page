import { Instagram, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material";
import { Stack } from "@mui/material";

function Contact() {
  return (
    <Stack direction={"row"} justifyContent={"center"} gap={"6px"}>
      <Twitter />
      <Instagram />
      <LinkedIn />
      <WhatsApp />
    </Stack>
  );
}

export default Contact;

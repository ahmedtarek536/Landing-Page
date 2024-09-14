import {
  Instagram,
  LinkedIn,
  Mail,
  MailOutline,
  Twitter,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <footer className="border-t border-secondary" data-aos="">
      <Box className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 ">
        <Box>
          <Typography variant="h5" className="text-linear block  font-bold">
            NFTHub
          </Typography>
          <Typography variant="p" className="text-primary block py-3">
            Join our Discord channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </Typography>
          <Stack
            direction={"row"}
            gap="10px"
            justifyContent={"center"}
            sx={{ marginTop: "20px" }}
          >
            <Twitter sx={{ fontSize: "20px" }} />
            <LinkedIn sx={{ fontSize: "20px" }} />
            <Mail sx={{ fontSize: "20px" }} />
          </Stack>
        </Box>
        <Box></Box>
        <Box>
          <Typography variant="p" className="font-bold text-2lx block py-2">
            Quick Link
          </Typography>
          <Typography variant="p" className="text-primary block py-2">
            About
          </Typography>
          <Typography variant="p" className="text-primary block py-2">
            Collection
          </Typography>
          <Typography variant="p" className="text-primary block py-2">
            Roadmap
          </Typography>
          <Typography variant="p" className="text-primary block py-2">
            FAQs
          </Typography>
        </Box>
        <Box>
          <Typography variant="p" className="font-bold text-2lx block py-2">
            Community
          </Typography>
          <Typography variant="p" className="text-primary block py-2">
            How it work!
          </Typography>
          <Typography variant="p" className="text-primary block py-2">
            Block Chain
          </Typography>
          <Typography variant="p" className="text-primary block py-2">
            Get in touch
          </Typography>
        </Box>
      </Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        className="mt-12 mb-3"
        gap={"10px"}
      >
        <Typography variant="p" className="text-primary block py-2">
          Copyright © 2023 Nfthub All Rights Reserved.
        </Typography>
        <Box className="text-sm flex  gap-8">
          <Typography variant="p" className="text-primary block py-2">
            Pervicy Policy
          </Typography>
          <Typography variant="p" className="text-primary block py-2">
            Term of Uses
          </Typography>
        </Box>
      </Stack>
    </footer>
  );
}

export default Footer;

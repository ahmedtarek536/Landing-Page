import { Stack } from "@mui/material";
import Logo from "./Logo";
import Pages from "./Pages";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize the animation duration here
    });
  }, []);
  return (
    <header className="p-3" data-aos="fade-down">
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Logo />
        <Pages />
        <Contact />
      </Stack>
    </header>
  );
}

export default Header;

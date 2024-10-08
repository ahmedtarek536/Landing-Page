import Choose from "./components/Choose";
import Collection from "./components/Collection";
import Home from "./components/Home";
import { Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Services from "./components/Services";
import Drop from "./components/Drop";
import Roadmap from "./components/Roadmap";
import Artist from "./components/Artist";
import Questions from "./components/Questions";
import Start from "./components/Start";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";
import Line from "./components/Divider";
import CustomSolution from "./components/CustomSolution";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0F051D", // This is the main background color
    },
  },
});

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // You can customize the animation duration here
  //   });
  // }, []);
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Home />
          <Line />
          <CustomSolution />
          <Line />
          <Services />
          <Line />
          <Collection />
          <Line />
          <Choose />
          <Line />
          <Numbers />
          <Line />
          <Drop />
          <Line />
          <Roadmap />
          <Line />
          <Artist />
          <Line />
          <Questions />
          <Line />
          <Start />
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

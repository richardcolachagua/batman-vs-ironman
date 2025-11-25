import React, { useEffect, useRef } from "react";
import { Grid, Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BioSection from "../components/BioSection";
import AdvantagesSection from "../components/AdvantagesSection";
import CompaniesSection from "../components/CompaniesSection";
import CombatSkillsSection from "../components/CombatSkillsSection";
import StrategiesSection from "../components/StrategiesSection";
import MultimediaSection from "../components/MultimediaSection";
import VotingPollSection from "../components/VotingPollSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Batman from "../components/Suits/BatmanSuits/BatmanCarousel";
import Ironman from "../components/Suits/IronmanSuits/Ironman";
import Lenis from "@studio-freight/lenis";

const LandingPage = () => {
  const defaultTheme = createTheme();
  const lenisRef = useRef();

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 3.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureOrientation: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
          padding: { xs: "16px", md: "32px" },
        }}
      >
        {/* Place your sections/grids as needed */}
        <BioSection />
        <Batman />
        <Ironman />
        <AdvantagesSection />
        <CompaniesSection />
        <CombatSkillsSection />
        <StrategiesSection />
        <MultimediaSection />
        <VotingPollSection />
        <ScrollToTopButton />
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;

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
    <Box
      sx={{
        backgroundColor: "#111",
        width: "100vw",
        minHeight: "100vh",
        p: 0,
        m: 0,
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Grid
          container
          spacing={8}
          sx={{ m: 0, width: "100vw", maxWidth: "100vw" }}
        >
          <Grid item xs={12}>
            <BioSection />
          </Grid>
          <Grid item xs={12}>
            <AdvantagesSection />
          </Grid>
          <Grid item xs={12}>
            <Batman />
          </Grid>
          <Grid item xs={12}>
            <Ironman />
          </Grid>
          <Grid item xs={12}>
            <CompaniesSection />
          </Grid>
          <Grid item xs={12}>
            <CombatSkillsSection />
          </Grid>
          <Grid item xs={12}>
            <StrategiesSection />
          </Grid>
          <Grid item xs={12}>
            <MultimediaSection />
          </Grid>
          <Grid item xs={12}>
            <VotingPollSection />
          </Grid>
          <Grid item xs={12}>
            <ScrollToTopButton />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default LandingPage;

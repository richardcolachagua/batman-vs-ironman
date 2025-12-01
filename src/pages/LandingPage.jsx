import { useEffect, useRef } from "react";
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
  const defaultTheme = createTheme({
    typography: {
      fontFamily:
        "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    },
  });

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
      <Box sx={{ minHeight: "100vh", bgcolor: "white", color: "white" }}>
        {/* 1. Character Origins full-bleed */}
        <BioSection />

        {/* 2+. Content in centered container */}
        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: 1.5, sm: 3, md: 4 },
            pt: { xs: 6, md: 8 },
            pb: { xs: 6, md: 8 },
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{ mb: { xs: 6, md: 8 }, alignItems: "center" }}
          >
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              {/* Batman suits first */}
              <Batman />

              {/* Add some spacing between them */}
              <Box sx={{ mt: { xs: 4, md: 6 } }}>
                <Ironman />
              </Box>
            </Box>
          </Grid>

          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <AdvantagesSection />
          </Box>

          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <CompaniesSection />
          </Box>

          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <CombatSkillsSection />
          </Box>

          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <StrategiesSection />
          </Box>

          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <MultimediaSection />
          </Box>

          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <VotingPollSection />
          </Box>
        </Box>

        <ScrollToTopButton />
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;

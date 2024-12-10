import React from "react";
import "../styles.css";
import { Container, Grid, Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BioSection from "../components/BioSection";
import AdvantagesSection from "../components/AdvantagesSection";
import CompaniesSection from "../components/CompaniesSection";
import CombatSkillsSection from "../components/CombatSkillsSection";
import StrategiesSection from "../components/StrategiesSection";
import MultimediaSection from "../components/MultimediaSection";
import VotingPollSection from "../components/VotingPollSection";
import ScrollToTopButton from "../components/ScrollToTopButton";

const LandingPage: React.FC = () => {
  const defaultTheme = createTheme();

  return (
    <>
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <Container>
            <CssBaseline />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <BioSection />
              </Grid>

              <Grid item xs={12}>
                <AdvantagesSection />
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
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default LandingPage;

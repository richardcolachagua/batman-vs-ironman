import React from "react";
import { Container, Typography, Grid, Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import BioSection from "../components/BioSection";
import SuitsSection from "../components/SuitsSection";
import AdvantagesSection from "../components/AdvantagesSection";
import CompaniesSection from "../components/CompaniesSection";
import CombatSkillsSection from "../components/CombatSkillsSection";
import StrategiesSection from "../components/StrategiesSection";
import MultimediaSection from "../components/MultimediaSection";
import VotingPollSection from "../components/VotingPollSection";

const LandingPage: React.FC = () => {
  const defaultTheme = createTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url("/assets/Ironman_and_Batman_fighting_each_other.png")`,
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  variant="h2"
                  align="center"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Batman vs Ironman
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <BioSection />
            </Grid>
            <Grid item xs={12}>
              <SuitsSection />
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
          </Grid>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default LandingPage;

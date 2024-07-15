import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import BioSection from '../components/BioSection';
import SuitsSection from '../components/SuitsSection';
import AdvantagesSection from '../components/AdvantagesSection';
import CompaniesSection from '../components/CompaniesSection';

const LandingPage: React.FC = () => {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Typography variant="h2" align="center">Batman vs Ironman</Typography>
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
        </Grid>
      </Container>
    );
  };
  
  export default LandingPage;
// src/components/CompaniesSection.tsx
import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const CompaniesSection: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" align="center">Their Companies</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Wayne Enterprises</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Wayne Enterprises is a multi-billion dollar conglomerate owned by Bruce Wayne. It funds Batman's crime-fighting activities and provides resources for his advanced technology.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Stark Industries</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Stark Industries is a tech conglomerate founded by Howard Stark and run by Tony Stark. It is at the forefront of technological innovation, providing the resources for Iron Man's suits and inventions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompaniesSection;
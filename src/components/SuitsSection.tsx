// src/components/SuitsSection.tsx
import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const SuitsSection: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" align="center">Suits</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Batman's Suits</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                - Classic Blue and Gray Suit<br />
                - The Dark Knight Returns Suit<br />
                - Jim Lee's Hush Suit<br />
                - Batman Incorporated Suit<br />
                - Hellbat Suit
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Iron Man's Suits</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                - Mark I-III<br />
                - Hulkbuster Armor<br />
                - Bleeding Edge Armor<br />
                - Extremis Armor<br />
                - Prometheum Armor
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SuitsSection;
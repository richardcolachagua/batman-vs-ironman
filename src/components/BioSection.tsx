// src/components/BioSection.tsx
import React from "react";
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const BioSection: React.FC = () => {
  return (
    <>
      <Typography variant="h4" align="center">
        Bios
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Bruce Wayne"
              height="600"
              image="/assets/Batman_during_prep_time_getting_ready_to_fight.png"
              title="Bruce Wayne"
            />
            <CardContent>
              <Typography variant="h5">Bruce Wayne</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Bruce Wayne, also known as Batman, is a billionaire playboy and
                philanthropist who fights crime in Gotham City.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Tony Stark"
              height="600"
              image="/assets/Tony_Stark_suiting_up_in_Ironman_armor_to_fight.png"
              title="Tony Stark"
            />
            <CardContent>
              <Typography variant="h5">Tony Stark</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Tony Stark, also known as Iron Man, is a genius inventor and
                billionaire who uses his advanced suit of armor to protect the
                world.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default BioSection;

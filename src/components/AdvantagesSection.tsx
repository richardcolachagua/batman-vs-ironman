// src/components/AdvantagesSection.tsx
import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

const AdvantagesSection: React.FC = () => {
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "white", fontWeight: "bold", paddingBottom: "10px" }}
      >
        Key Advantages
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ background: "black" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                }}
              >
                Batman's Advantages
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                - Master strategist and detective
                <br />
                - Extensive martial arts training
                <br />
                - Stealth and tactical planning
                <br />- Access to advanced gadgets and vehicles
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Iron Man's Advantages</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                - Advanced technology and weaponry
                <br />
                - Superhuman strength and flight
                <br />
                - Versatile and adaptable suits
                <br />- AI assistance from J.A.R.V.I.S.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdvantagesSection;

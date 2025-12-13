// src/components/AdvantagesSection.tsx
import React from "react";
import { Typography, Grid, Card, CardContent, Box } from "@mui/material";

const AdvantagesSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        width: "100vw",
        px: 0,
        py: 8,
        m: 0,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "white", fontWeight: "bold", mb: 6 }}
      >
        Key Advantages
      </Typography>
      <Grid container spacing={6} sx={{ px: 0 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ minHeight: 220, width: "100%", boxShadow: 6 }}>
            <CardContent sx={{ backgroundColor: "black" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Batman's Advantages
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", fontSize: "1rem", lineHeight: 1.7 }}
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
          <Card sx={{ minHeight: 250, mx: 2 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "red", fontWeight: "bold", mb: 2 }}
              >
                Iron Man's Advantages
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", fontSize: "1rem", lineHeight: 1.7 }}
              >
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
    </Box>
  );
};

export default AdvantagesSection;

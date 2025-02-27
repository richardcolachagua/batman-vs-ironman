// src/components/CombatSkillsSection.tsx
import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

const CombatSkillsSection: React.FC = () => {
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "white", fontWeight: "bold", paddingBottom: "10px" }}
      >
        Combat Skills
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
                Batman's Combat Skills
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                - Mastery of multiple martial arts
                <br />
                - Expert hand-to-hand combatant
                <br />
                - Stealth and tactical planning
                <br />- Use of gadgets and weapons
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ background: "black" }}>
              <Typography
                variant="h5"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Iron Man's Combat Skills
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                - Proficient in using his armored suits
                <br />
                - Advanced weaponry and repulsor technology
                <br />
                - Flight and aerial combat
                <br />- AI-assisted targeting and analysis
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CombatSkillsSection;

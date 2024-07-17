import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

const StrategiesSection: React.FC = () => {
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "white", fontWeight: "bold", paddingBottom: "10px" }}
      >
        Fighting Strategies
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
                Batman's Strategies
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                - Extensive planning and preparation
                <br />
                - Use of stealth and surprise
                <br />
                - Exploiting opponents' weaknesses
                <br />- Tactical use of gadgets and environment
              </Typography>
            </CardContent>
          </Card>
        </Grid>
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
                Iron Man's Strategies
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                - Direct offensive approach
                <br />
                - Utilizing advanced technology and weaponry
                <br />
                - Adapting suits to counter specific threats
                <br />- AI-assisted tactical analysis
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default StrategiesSection;

// src/components/CompaniesSection.tsx
import React from "react";
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const CompaniesSection: React.FC = () => {
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "white", fontWeight: "bold" }}
      >
        Titans Of Industry
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Wayne Enterprises"
              height="600"
              image="/assets/Wayne_Enterprises_building.png"
              title="Wayne Enterprises"
            />
            <CardContent sx={{ background: "black" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                }}
              >
                Wayne Enterprises
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Wayne Enterprises (formerly WayneCorp) is a company in the DC
                Universe. Wayne Enterprises is owned by billionaire Bruce Wayne
                and run by his business manager Lucius Fox. It was founded by
                merchant ancestors of the Wayne family in the 17th century as a
                merchant house. It changed and gradually grew when it was
                officially erected in the 19th century when Alan Wayne, heir to
                Solomon Wayne, founded Wayne Shipping and Wayne Chemical. Along
                with Wayne Manufacturing, which came later, the Industrial
                Revolution fueled Wayne Enterprises into becoming a major
                powerhouse. In addition to providing an income for Bruce Wayne,
                the various activities of the organization help facilitate his
                Batman activities in Gotham City.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Wayne Enterprises"
              height="600"
              image="/assets/Stark_Industries_Corporate_office_in_New_York.png"
              title="Wayne Enterprises"
            />
            <CardContent sx={{ background: "black" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                }}
              >
                Stark Industries
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Stark Industries is a multinational industrial company and the
                largest tech conglomerate in the world. Founded in 1939 by
                Howard Stark, the elder Stark ran the company from its inception
                up until his death in 1991, after which Obadiah Stane was
                appointed interim CEO, with Tony Stark officially assuming the
                position shortly after at the age of twenty-one. Under Stark's
                control, the company flourished financially for nearly two
                decades; however, when Stark discovered that Stane was selling
                their weapons to terrorist groups around the world, such as the
                Ten Rings, he shut down their lucrative weapons division. In
                2010, Stark appointed Pepper Potts as the CEO of Stark
                Industries after realizing that he was dying from palladium
                poisoning, a position that Stark allowed Potts to maintain after
                he engineered his own recovery.{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompaniesSection;

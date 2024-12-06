// src/components/BioSection.tsx
import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Box,
} from "@mui/material";

const BioSection: React.FC = () => {
  return (
    <>
      <Typography
        variant="h1"
        align="left"
        sx={{ color: "black", fontWeight: "bold", paddingBottom: "30px" }}
      >
        Character Origins
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <CardMedia
              component="img"
              alt="Bruce Wayne"
              height="600"
              image="/assets/Batman_during_prep_time_getting_ready_to_fight.png"
              title="Bruce Wayne"
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography
              variant="h2"
              sx={{
                color: "yellow",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Bruce Wayne
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "yellow",
                fontWeight: "bold",
                fontSize: "1.2rem",
                lineHeight: 1.6,
              }}
            >
              Batman is the superhero protector of Gotham City, a tortured,
              brooding vigilante dressed as a bat who fights against evil and
              strikes fear into the hearts of criminals everywhere. In his
              public identity, he is Bruce Wayne, a billionaire industrialist
              and notorious playboy. Although he has no superhuman abilities, he
              is one of the world's smartest men and greatest fighters. His
              physical prowess, technical ingenuity, and tactical thinking make
              him an incredibly dangerous opponent. He was also a founding
              member of the Justice League.
            </Typography>
          </Stack>
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
            <CardContent sx={{ background: "black" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                }}
              >
                Tony Stark
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Anthony Edward "Tony" Stark is a billionaire industrialist, a
                founding member of the Avengers, and the former CEO of Stark
                Industries. A brash but brilliant inventor, Stark is
                self-described as a genius, billionaire, playboy, and
                philanthropist. With his great wealth and exceptional technical
                knowledge, Stark was one of the world's most powerful men
                following the deaths of his parents and enjoyed the playboy
                lifestyle for many years until he was kidnapped by the Ten Rings
                in Afghanistan, while demonstrating a fleet of Jericho missiles.
                With his life on the line, Stark created an armored suit which
                he used to escape his captors. Upon returning home, he utilized
                several more armors to use against terrorists, as well as
                Obadiah Stane who turned against Stark. Following his fight
                against Stane, Stark publicly revealed himself as Iron Man.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default BioSection;

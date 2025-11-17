import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  Stack,
  Box,
  Divider,
} from "@mui/material";

const BioSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Typography
        variant="h1"
        align="center"
        sx={{ color: "white", fontWeight: "bold", pb: 5 }}
      >
        Character Origins
      </Typography>

      {/* Bruce Wayne Section */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              maxWidth: 345,
              maxHeight: 500,
              margin: "auto",
            }}
          >
            <CardMedia
              component="img"
              alt="Bruce Wayne"
              image="/assets/Batman_during_prep_time_getting_ready_to_fight.png"
              title="Bruce Wayne"
              sx={{
                borderRadius: "10px",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography
              variant="h2"
              sx={{ color: "yellow", fontWeight: "bold" }}
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
      </Grid>

      {/* Divider Between Sections */}
      <Divider sx={{ my: 6, borderColor: "gray" }} />

      {/* Tony Stark Section */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              maxWidth: 345,
              maxHeight: 500,
              margin: "auto",
            }}
          >
            <CardMedia
              component="img"
              alt="Tony Stark"
              image="/assets/Tony_Stark_suiting_up_in_Ironman_armor_to_fight.png"
              title="Tony Stark"
              sx={{
                borderRadius: "10px",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography variant="h2" sx={{ color: "red", fontWeight: "bold" }}>
              Tony Stark
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                lineHeight: 1.6,
              }}
            >
              Anthony Edward "Tony" Stark is a billionaire industrialist, a
              founding member of the Avengers, and the former CEO of Stark
              Industries. A brash but brilliant inventor, Stark is
              self-described as a genius, billionaire, playboy, and
              philanthropist. With his great wealth and exceptional technical
              knowledge, Stark was one of the world's most powerful men
              following the deaths of his parents and enjoyed the playboy
              lifestyle for many years until he was kidnapped by the Ten Rings
              in Afghanistan. With his life on the line, Stark created an
              armored suit which he used to escape. Afterward, he publicly
              revealed himself as Iron Man.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BioSection;

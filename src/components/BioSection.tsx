import React from "react";
import { Typography, Grid, CardMedia, Box } from "@mui/material";

const BioSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "black",
        color: "white",
        width: "100vw",
        overflow: "hidden",
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          bgcolor: "black",
          borderBottom: "4px solid black",
          mb: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.2rem", md: "3.2rem" },
            letterSpacing: { xs: 0, md: "0.08em" },
            lineHeight: 1.1,
            py: { xs: 1.5, md: 2 },
          }}
        >
          Character Origins
        </Typography>
      </Box>

      <Grid container spacing={0} sx={{ height: { xs: "auto", md: "80vh" } }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <CardMedia
              component="img"
              image="/assets/Tony_Stark_suiting_up_in_Ironman_armor_to_fight.png"
              alt="Iron Man"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                p: { xs: 2.5, sm: 3, md: 4 },
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "@2rem", md: "2.6rem" },
                  color: "#ff2a2a",
                  textShadow: "0 0 16px rgba(0,0,0,0.8)",
                  mb: 1,
                }}
              >
                Iron Man
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  lineHeight: 1.7,
                  maxWidth: "42rem",
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
                revealed himself as Iron Man.{" "}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Batman */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <CardMedia
              component="img"
              image="/assets/Batman_during_prep_time_getting_ready_to_fight.png"
              alt="Batman"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                p: { xs: 2.5, sm: 3, md: 4 },
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  color: "#ffe81a",
                  textShadow: "0 0 16px rgba(0,0,0,0.8)",
                  mb: 1,
                }}
              >
                Batman
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  lineHeight: 1.7,
                  maxWidth: "42rem",
                }}
              >
                Batman is the dark guardian of Gotham City, a vigilante who
                channels the trauma of his parents’ murder into an unrelenting
                war on crime. By day he is Bruce Wayne, a billionaire
                industrialist and public playboy; by night he relies on
                intellect, peak physical conditioning, and advanced technology
                to strike fear into the hearts of criminals.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BioSection;

import React from "react";
import { Typography, Grid, CardMedia, Box } from "@mui/material";

const BioSection: React.FC = () => {
  return (
    <>
      {/* Title on top of image, no extra background strip */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 2,
          pt: { xs: 2, md: 3 },
          textAlign: "center",
          pointerEvents: "none", // lets scroll, no blocking
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.2rem", md: "3.2rem" },
            letterSpacing: { md: "0.08em" },
            color: "white",
            textShadow: "0 0 12px rgba(0,0,0,0.9)",
          }}
        >
          Character Origins
        </Typography>
      </Box>

      {/* Fullscreen Iron Man hero */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          m: 0,
        }}
      >
        {/* Background image only (no black bg) */}
        <Box
          component="img"
          src="/assets/Tony_Stark_suiting_up_in_Ironman_armor_to_fight.png"
          alt="Iron Man"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* subtle dark veil just for readability */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.35)",
          }}
        />

        {/* Centered text */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2.5, sm: 4, md: 6 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.4rem", md: "3.4rem" },
              color: "#ff2a2a",
              textShadow: "0 0 22px rgba(0,0,0,0.9)",
              mb: 2,
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
            Industries. A brash but brilliant inventor, Stark is self-described
            as a genius, billionaire, playboy, and philanthropist. With his
            great wealth and exceptional technical knowledge, Stark was one of
            the world's most powerful men following the deaths of his parents
            and enjoyed the playboy lifestyle for many years until he was
            kidnapped by the Ten Rings in Afghanistan. With his life on the
            line, Stark created an armored suit which he used to escape.
            Afterward, he publicly revealed himself as Iron Man.
          </Typography>
        </Box>
      </Box>

      {/* FULLSCREEN BATMAN */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="/assets/Batman_during_prep_time_getting_ready_to_fight.png"
          alt="Batman"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.4)", // a bit darker for Gotham
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2.5, sm: 4, md: 6 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.4rem", md: "3.4rem" },
              color: "#ffe81a",
              textShadow: "0 0 22px rgba(0,0,0,0.9)",
              mb: 2,
            }}
          >
            Batman
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "720px",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.8,
              color: "white",
              textShadow: "0 0 14px rgba(0,0,0,0.9)",
            }}
          >
            Batman is the dark guardian of Gotham City, a vigilante who turns
            the trauma of his parents’ murder into an unrelenting mission
            against crime. As Bruce Wayne he uses wealth, intellect, and
            advanced technology; as Batman he relies on fear, strategy, and
            relentless training to outthink and outfight his enemies.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BioSection;

// BioSection.tsx
import React from "react";
import { Typography, Box } from "@mui/material";

const BioSection: React.FC = () => {
  return (
    <>
      {/* Title in normal flow, not fixed/absolute */}
      <Box
        sx={{
          width: "100%",
          py: { xs: 3, md: 4 },
          textAlign: "center",
          bgcolor: "black",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.2rem", md: "3.2rem" },
            letterSpacing: { md: "0.08em" },
            color: "white",
          }}
        >
          Character Origins
        </Typography>
      </Box>

      {/* Fullscreen Iron Man */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 800,
          overflow: "hidden",
        }}
      >
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
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.35)",
          }}
        />
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
              color: "white",
              textShadow: "0 0 14px rgba(0,0,0,0.9)",
            }}
          >
            Anthony Edward "Tony" Stark is a billionaire industrialist, a
            founding member of the Avengers, and the former CEO of Stark
            Industries. A brash but brilliant inventor, Stark is self-described
            as a genius, billionaire, playboy, and philanthropist. With his
            great wealth and exceptional technical knowledge, Stark became one
            of the world&apos;s most powerful men until he was kidnapped by the
            Ten Rings in Afghanistan and built the first Iron Man armor to
            escape.
          </Typography>
        </Box>
      </Box>

      {/* Fullscreen Batman */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 800,
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
            bgcolor: "rgba(0,0,0,0.4)",
          }}
        />
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
            the trauma of his parents&apos; murder into an unrelenting mission
            against crime. As Bruce Wayne he uses wealth, intellect, and
            advanced technology; as Batman he relies on fear, strategy, and
            relentless training to outthink and outfight his enemies.{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BioSection;

import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import VideoBackground from "../components/VideoBackground";

const WelcomePage: React.FC = () => {
  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", p: 0, m: 0 }}>
      <VideoBackground videoSrc="assets/WelcomePageVideo.mp4">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", color: "white", px: 0, pt: 6, pb: 2 }}
        >
          BILLIONAIRES, GENIUSES, PLAYBOYS, PHILANTROPISTS
        </Typography>

        <Button
          component={Link}
          to="/landing"
          variant="contained"
          sx={{
            color: "red",
            backgroundColor: "white",
            width: { xs: "80vw", md: "340px" },
            borderRadius: "30px",
            mx: "auto",
            my: 6,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          WHO WOULD WIN IN A FIGHT?
        </Button>
      </VideoBackground>
    </Box>
  );
};

export default WelcomePage;

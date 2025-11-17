import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import VideoBackground from "../components/VideoBackground";

const WelcomePage: React.FC = () => {
  return (
    <Box>
      <VideoBackground videoSrc="assets/WelcomePageVideo.mp4">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", color: "white", paddingLeft: "30px" }}
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
            paddingX: 3,
            paddingY: 2,
            mx: "auto",
            my: 4,
            width: "340px",
            borderRadius: "30px",
            display: "block",
            textAlign: "center",
          }}
        >
          WHO WOULD WIN IN A FIGHT?
        </Button>
      </VideoBackground>
    </Box>
  );
};

export default WelcomePage;

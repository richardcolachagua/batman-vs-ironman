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
            alignItems: "left",
            color: "red",
            backgroundColor: "white",
            paddingLeft: "20px",
            marginLeft: "30px",
            margin: "30px",
            width: "340px",
            borderRadius: "30px",
          }}
        >
          WHO WOULD WIN IN A FIGHT?
        </Button>
      </VideoBackground>
    </Box>
  );
};

export default WelcomePage;

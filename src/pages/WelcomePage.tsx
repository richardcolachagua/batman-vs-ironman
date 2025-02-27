import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("/assets/Ironman_and_Batman_fighting_each_other.png")`,
        backgroundColor: "red",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        align="left"
        sx={{ fontWeight: "bold", color: "red", paddingLeft: "30px" }}
      >
        The Clash of the Billionaires
      </Typography>
      <Typography
        variant="h3"
        align="left"
        sx={{ fontWeight: "bold", color: "red", paddingLeft: "30px" }}
      >
        Two Geniuses
      </Typography>
      <Typography
        align="left"
        sx={{
          fontWeight: "bold",
          color: "red",
          fontSize: "20px",
          paddingLeft: "30px",
          fontFamily: "monospace",
        }}
      >
        Two trauma damaged men, fighting their own demons by fighting crime
      </Typography>

      <Button
        component={Link}
        to="/landing"
        variant="contained"
        sx={{
          alignItems: "left",
          color: "red",
          backgroundColor: "black",
          paddingLeft: "20px",
          marginLeft: "30px",
          margin: "30px",
          width: "340px",
        }}
      >
        WHO WOULD REALLY WIN IN A FIGHT?
      </Button>
    </Box>
  );
};

export default WelcomePage;

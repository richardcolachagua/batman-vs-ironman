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
        backgroundPosition: "center",
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
        sx={{ fontWeight: "bold", color: "white", paddingLeft: "30px" }}
      >
        The Clash of the Billionaires
      </Typography>
      <Typography
        variant="h3"
        align="left"
        sx={{ fontWeight: "bold", color: "white", paddingLeft: "30px" }}
      >
        Two Geniuses
      </Typography>
      <Typography
        align="left"
        sx={{
          fontWeight: "bold",
          color: "white",
          fontSize: "20px",
          paddingLeft: "30px",
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
          color: "black",
          backgroundColor: "white",
          paddingLeft: "20px",
          marginLeft: "30px",
          margin: "30px",
          width: "340px",
        }}
      >
        Go to landing page
      </Button>
    </Box>
  );
};

export default WelcomePage;

import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
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
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>
        The Clash of the Billionaires
      </Typography>
      <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>
        Two Geniuses
      </Typography>
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
        Two trauma damaged men, fighting their own demons by fighting crime
      </Typography>

      <Button
        component={Link}
        to="/landing"
        variant="contained"
        sx={{
          alignItems: "center",
          color: "white",
          backgroundColor: "black",
        }}
      >
        Go to landing page
      </Button>
    </Box>
  );
};

export default WelcomePage;

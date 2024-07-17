// src/components/VotingPollSection.tsx
import React, { useState } from "react";
import { Typography, Button, Grid, Box, Stack } from "@mui/material";

const VotingPollSection: React.FC = () => {
  const [votes, setVotes] = useState({ batman: 0, ironman: 0 });

  const handleVote = (hero: "batman" | "ironman") => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [hero]: prevVotes[hero] + 1,
    }));
  };

  return (
    <Grid container justifyContent="center" alignItems="center" paddingTop={20}>
      <Box
        marginBottom={10}
        sx={{
          backgroundColor: "black",
          backgroundImage: `url("/assets/Tony_Stark_and_Bruce_Wayne_staring_eye_to_eye.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          borderRadius: "16px",
          boxShadow: "0px 0px 10px #000",
          border: "4px solid white",
          padding: "50px",
          justifyContent: "space-around",
          alignItems: "center",
          height: "250px",
          width: "60%",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "white", fontWeight: "bold", paddingBottom: "10px" }}
        >
          Who Would Win In A Fight?
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleVote("batman")}
              sx={{
                marginRight: "10px",
                backgroundColor: "yellow",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Vote for Batman
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleVote("ironman")}
              sx={{
                marginRight: "10px",
                backgroundColor: "red",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Vote for Ironman
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "10px" }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "white", fontWeight: "bold", paddingRight: "10px" }}
          >
            Batman: {votes.batman} votes
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Ironman: {votes.ironman} votes
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default VotingPollSection;

// src/components/VotingPollSection.tsx
import React, { useState } from "react";
import { Typography, Button, Grid } from "@mui/material";

const VotingPollSection: React.FC = () => {
  const [votes, setVotes] = useState({ batman: 0, ironman: 0 });

  const handleVote = (hero: "batman" | "ironman") => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [hero]: prevVotes[hero] + 1,
    }));
  };

  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "white", fontWeight: "bold", paddingBottom: "10px" }}
      >
        Who Would Win?
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleVote("batman")}
          >
            Vote for Batman
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleVote("ironman")}
          >
            Vote for Ironman
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h6" align="center">
        Batman: {votes.batman} votes
      </Typography>
      <Typography variant="h6" align="center">
        Ironman: {votes.ironman} votes
      </Typography>
    </div>
  );
};

export default VotingPollSection;

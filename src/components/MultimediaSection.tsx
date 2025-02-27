// src/components/MultimediaSection.tsx
import React from "react";
import { Typography, Grid } from "@mui/material";
import YouTube from "react-youtube";

const MultimediaSection: React.FC = () => {
  const videoIds = ["rokGy0huYEA", "L2vS_050c-M", "dQw4w9WgXcQ"]; // Example video IDs

  return (
    <div>
      <Typography variant="h4" align="center">
        Multimedia
      </Typography>
      <Grid
        container
        spacing={3}
        direction="row"
        wrap="nowrap"
        style={{ overflowX: "scroll" }}
      >
        {videoIds.map((id) => (
          <Grid item key={id}>
            <YouTube videoId={id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MultimediaSection;

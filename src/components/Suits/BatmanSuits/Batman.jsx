import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

// You can further abstract 'picture' for more complex responsive images!
export default function CarouselCard({
  title,
  description,
  imgSrc,
  imgSrcSet,
  ctaUrl,
}) {
  return (
    <Card
      sx={{
        background: "var(--dark-color-darker)",
        borderRadius: "20px",
        boxShadow: "0 6px 20px rgba(0,0,0,.34)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        m: 0,
        p: 0,
      }}
    >
      <div
        className="media-container"
        style={{ aspectRatio: "8 / 5", width: "100%" }}
      >
        <picture>
          {imgSrcSet && <source srcSet={imgSrcSet} />}
          <img
            src={imgSrc}
            alt={title}
            className="fit-cover middle-center"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 16,
            }}
            decoding="async"
          />
        </picture>
      </div>
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "var(--light-color)" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "var(--light-color-darker-translucent)", mb: 2 }}
        >
          {description}
        </Typography>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={ctaUrl}
          className="cta-button"
          sx={{
            backgroundColor: "var(--button-bg-color)",
            color: "var(--button-color)",
            border: `1px solid var(--button-border-color)`,
            borderRadius: "32px",
            textTransform: "none",
            fontWeight: 500,
          }}
        >
          Glitchfy More
        </Button>
      </CardContent>
    </Card>
  );
}

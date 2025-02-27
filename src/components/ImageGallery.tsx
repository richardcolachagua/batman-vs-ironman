import React from "react";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const images = [""];

const ImageGallery: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {images.map((src, index) => (
        <Grid item xs={12} md={6} key={index}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGallery;

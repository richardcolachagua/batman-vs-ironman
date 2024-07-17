import React, { useState } from "react";
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import batmanSuits from "../data/batmanSuits";
import ironManSuits from "../data/ironManSuits";
import SuitModal from "./SuitModal";
import { BatmanSuit, IronManSuit } from "../data/types";

const SuitsSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [selectSuit, setSelectSuit] = useState<BatmanSuit | IronManSuit | null>(
    null
  );

  const handleSuitClick = (suit: BatmanSuit | IronManSuit) => {
    setSelectSuit(suit);
  };

  const handleCloseModal = () => {
    setSelectSuit(null);
  };

  return (
    <div>
      <Typography variant="h4" align="center">
        Suits
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <motion.div style={{ scale }}>
            {batmanSuits.map((suit, index) => (
              <Card
                key={index}
                style={{ marginBottom: "16px", cursor: "pointer" }}
                onClick={() => handleSuitClick(suit)}
              >
                <CardMedia
                  component="img"
                  alt={suit.name}
                  height="140"
                  image={suit.image}
                  title={suit.name}
                />
                <CardContent>
                  <Typography variant="h5">{suit.name}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {suit.abilities}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div style={{ scale }}>
            {ironManSuits.map((suit, index) => (
              <Card
                key={index}
                style={{ marginBottom: "16px" }}
                onClick={() => handleSuitClick(suit)}
              >
                <CardMedia
                  component="img"
                  alt={suit.name}
                  height="140"
                  image={suit.image}
                  title={suit.name}
                />
                <CardContent>
                  <Typography variant="h5">{suit.name}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {suit.abilities}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </Grid>
      </Grid>
      <SuitModal suit={selectSuit} onClose={handleCloseModal} />
    </div>
  );
};

export default SuitsSection;

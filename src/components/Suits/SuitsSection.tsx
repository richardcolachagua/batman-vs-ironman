import React, { useState } from "react";
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import batmanSuits from "./data/batmanSuits";
import ironManSuits from "./data/ironManSuits";
import { Suit } from "../Suits/data/types";

const SuitsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const allSuits = [...batmanSuits, ...ironManSuits];

  return (
    <div className="container">
      <Typography>Suits</Typography>
    </div>
  );
};

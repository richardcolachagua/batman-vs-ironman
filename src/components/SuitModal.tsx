import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { BatmanSuit, IronManSuit } from "../data/types";

interface SuitModalProps {
  suit: BatmanSuit | IronManSuit | null;
  onClose: () => void;
}

const SuitModal: React.FC<SuitModalProps> = ({ suit, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <AnimatePresence>
      {suit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={onClose}
        >
          <Card style={{ maxWidth: "600px" }}>
            <CardMedia
              component="img"
              alt={suit.name}
              height="300"
              image={suit.image}
              title={suit.name}
            />
            <CardContent>
              <Typography variant="h5">{suit.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {suit.abilities}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuitModal;

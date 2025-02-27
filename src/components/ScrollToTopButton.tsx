import React, { useCallback, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const SCROLL_THRESHOLD = 500;
const SCROLL_DURATION = 500;

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollHeight =
      window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollHeight > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: SCROLL_DURATION,
      smooth: true,
    });
  };

  return (
    <Zoom in={showButton || trigger}>
      <Fab
        color="primary"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;

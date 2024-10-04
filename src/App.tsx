import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { motion, useScroll, useSpring } from "framer-motion";
import WelcomePage from "./pages/WelcomePage";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Router>
        <Routes>
          <Route path="/landing" Component={LandingPage} />
          <Route path="/welcomepage" element={<WelcomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

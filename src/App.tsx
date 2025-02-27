import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WelcomePage from "./pages/WelcomePage";
import Batman from "./components/Suits/BatmanSuits/Batman";
import Ironman from "./components/Suits/IronmanSuits/Ironman";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/landing/*" element={<LandingPage />} />
          <Route path="/welcomepage" element={<WelcomePage />} />
          <Route path="/batman" element={<Batman />} />
          <Route path="/ironman" element={<Ironman />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

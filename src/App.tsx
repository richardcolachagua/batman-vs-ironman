import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WelcomePage from "./pages/WelcomePage";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/landing/*" element={<LandingPage />} />
          <Route path="/welcomepage" element={<WelcomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

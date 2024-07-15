// src/components/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/landing" Component={LandingPage} />
        <Route path="/" Component={LandingPage} />
      </Routes>
    </Router>
  );
};

export default App;
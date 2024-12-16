import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import OurProjects from "./Home/OurProjects";
import CarbonCreditCalculation from "./Home/CarbonCreditCalculation";
import Dashboard from "./Home/Dashboard";
import Profile from "./Home/Profile"
import Shop from "./Home/Shop"
import CalcIndividual from "./Home/CalcIndividual";
import CalcOrganization from "./Home/CalcOrganization";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/our-projects" element={<OurProjects />} />
        <Route path="/carbon-calculation" element={<CarbonCreditCalculation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile userCategory="farmer" />} />
        <Route path="/shop" element={<Shop userCategory="farmer" />} />
        <Route path="/CalcIndividual" element={<CalcIndividual />} />
        <Route path="/CalcOrganization" element={<CalcOrganization />} />

      </Routes>
    </Router>
  );
}

export default App;

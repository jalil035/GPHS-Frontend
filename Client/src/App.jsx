import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard/DashBoard";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/academic/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

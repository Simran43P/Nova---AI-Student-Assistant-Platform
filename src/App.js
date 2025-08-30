import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state

  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Dashboard page - only accessible if logged in */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/" replace />
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login"; 
import Attendance from "./components/Attendance";
import Expense from "./components/Expense";
import FocusSession from "./components/FocusSession";
import Library from "./components/Library";
import Planner from "./components/Planner";

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
        {/* Library */}
        <Route
          path="/library"
          element={isLoggedIn ? <Library /> : <Navigate to="/" replace />}
        />

        {/*Planner  */}
        <Route 
         path = "/planner"
         element={isLoggedIn ? <Planner /> : <Navigate to = "/" replace />}
         />

         {/* Focus Session */}
        <Route
          path="/focus"
          element={isLoggedIn ? <FocusSession /> : <Navigate to="/" replace />}
        />

        {/* Attendance */}
        <Route
          path="/attendance"
          element={isLoggedIn ? <Attendance /> : <Navigate to="/" replace />}
        />

        {/* Expense */}
        <Route
          path="/expense"
          element={isLoggedIn ? <Expense /> : <Navigate to="/" replace />}
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

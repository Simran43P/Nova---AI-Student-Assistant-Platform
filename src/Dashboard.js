import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Attendance from "./components/Attendance";
import Expense from "./components/Expense";
import FocusSession from "./components/FocusSession";
import Library from "./components/Library";
import Planner from "./components/Planner";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <h1 className="dashboard-title">Hi Student 👋</h1>
      <p className="dashboard-subtitle">Here’s your daily overview:</p>

      <div className="dashboard-grid">
        {/* Library */}
        <div className="dashboard-card">
          <h2>📚 Library</h2>
          <p>Your smart hub for all notes—organized, accessible, and clutter-free.</p>
          <Link to="/Library">
            <button>Open Library</button>
          </Link>
        </div>

        {/* Planner */}
        <div className="dashboard-card">
          <h2>🗓️ Planner</h2>
          <p>Plan smarter, achieve faster.</p>
          <Link to = "/planner">
          <button>Open Planner</button>
          </Link>
        </div>

        {/* Focus Session */}
        <div className="dashboard-card">
          <h2>⏳ Focus Session</h2>
          <p>Stay focused, achieve more.</p>
          <Link to = "/focus">
          <button>Open Focus</button>
          </Link>
        </div>

        {/* Attendance */}
        <div className="dashboard-card">
          <h2>📊 Attendance</h2>
          <p>Track every class, never miss a beat.</p>
          <Link to ="/attendance">
          <button>Open Attendance Tracker</button>
          </Link>
        </div>

        {/* Expenses */}
        <div className="dashboard-card">
          <h2>💰 Expenses</h2>
          <p>Manage your money, master your month.</p>
          <Link to = "/expense">
          <button>Open Expense Tracker</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

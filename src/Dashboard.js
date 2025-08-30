import React from "react";
import "./Dashboard.css";
import Attendance from "./components/Attendance";
import Expense from "./components/Expense";
import FocusSession from "./components/FocusSession";
import Library from "./components/Library";
import Planner from "./components/Planner";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Hi Student 👋</h1>
      <p className="dashboard-subtitle">Here’s your daily overview:</p>

      <div className="dashboard-grid">
      
        {/* Library */}  
<div className="dashboard-card library-card">
  <div className="library-content">
    <h2 className="library-title">Feel the calm of being more organized</h2>
    <button className="library-btn">Open Library</button>
  </div>
</div>




        {/* Focus Session */}
        <div className="dashboard-card">
          <h2>⏳ Focus Session</h2>
          <div className="card-content">
            <p className="card-text">
              Boost your concentration with structured pomodoro sessions. Track
              your focus time and stay consistent every day.
            </p>
            <div className="card-image">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.F7OqaNfyf_MH0FJJoDVCrQHaHa?pid=Api&P=0&h=180"
                alt="Focus"
              />
            </div>
          </div>
        </div>

        {/* Attendance */}
        <div className="dashboard-card">
          <h2>📊 Attendance</h2>
          <div className="card-content">
            <p className="card-text">
              Keep track of your classes and never miss an update. Monitor your
              attendance percentage at a glance.
            </p>
            <div className="card-image">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.XfTB2EBZeWe5C8LONdCtugHaE7?pid=Api&P=0&h=180"
                alt="Attendance"
              />
            </div>
          </div>
        </div>

        {/* Expenses */}
        <div className="dashboard-card">
          <h2>💰 Expenses</h2>
          <div className="card-content">
            <p className="card-text">
              Record and analyze your daily spending habits. Stay financially
              smart while managing your student life.
            </p>
            <div className="card-image">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.UBsJ0quTWjsJvQk51qKFPAHaE8?pid=Api&P=0&h=180"
                alt="Expenses"
              />
            </div>
          </div>
        </div>

        {/* Planner */}
        <div className="dashboard-card">
          <h2>🗓️ Planner</h2>
          <div className="card-content">
            <p className="card-text">
              Plan your daily tasks, assignments, and goals. Stay ahead with a
              clear schedule tailored for you.
            </p>
            <div className="card-image">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.aARh8UnGNpYLJPJjxaY-BQHaE8?pid=Api&P=0&h=180"
                alt="Planner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


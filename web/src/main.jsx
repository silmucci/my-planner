import React from "react";
import ReactDOM from "react-dom/client";
import AuthGate from "./components/AuthGate.jsx";
import MonthlyPlanner from "./components/MonthlyPlanner.jsx";
import "./styles/planner.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthGate>
      <MonthlyPlanner />
    </AuthGate>
  </React.StrictMode>
);

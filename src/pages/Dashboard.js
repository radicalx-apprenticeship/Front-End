import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Navigation/Sidebar";
import { useAuth } from "../context/AuthContext";
// CSS Imports
import "../styles/Dashboard/dashboard.css";

const Dashboard = () => {
  // State Variables
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useNavigate();

  // Event Listeners
  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div>
        {error && <h3 className="red">{error}</h3>}
        <button className="logout-btn" variant="link" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

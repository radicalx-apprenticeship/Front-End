import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  // State Variables
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
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
    <div>
      {error && <h3 className="red">{error}</h3>}
      Dashboard
      <button variant="link" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;

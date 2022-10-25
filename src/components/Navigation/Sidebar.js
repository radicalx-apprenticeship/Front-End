import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
//CSS Imports
import "../../styles/Dashboard/sidebar.css";
import radicalXLogo from "../../assets/RadicallX-Black-Logo 1.png";
import dashboard from "../../assets/dashboard-3.svg";
import apprencticeship from "../../assets/medal-star.svg";
import book from "../../assets/book.svg";
import briefcase from "../../assets/briefcase.svg";
import settings from "../../assets/setting-2.svg";
import avatar from "../../assets/avatar.jpeg";
import logoutIcon from "../../assets/bx-log-out.svg";

const Sidebar = () => {
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
    <div className="sidebar-container">
      <img src={radicalXLogo} className="sidebar-logo" alt="RadicalX" />
      <br />
      <div className="nav-link">
        <img className="nav-icon" alt="" src={dashboard} />
        <p className="link-text">Dashboard</p>
      </div>
      <div className="nav-link active-link">
        <img className="nav-icon" alt="" src={apprencticeship} />
        <p className="link-text">Apprenticeships</p>
      </div>
      <div className="nav-link">
        <img className="nav-icon" alt="" src={book} />
        <p className="link-text">Internships</p>
      </div>
      <div className="nav-link">
        <img className="nav-icon" alt="" src={briefcase} />
        <p className="link-text">Jobs</p>
      </div>
      <div className="nav-link">
        <img className="nav-icon" alt="" src={settings} />
        <p className="link-text">Settings</p>
      </div>
      {error && <h3 className="red">{error}</h3>}
      {/* Logout */}
      <div className="nav-link">
        <img className="nav-icon" alt="" src={logoutIcon} />
        <button
          className="logout-btn link-text"
          variant="link"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
      {/* Footer/User */}
      <div className="sidebar-footer">
        <img className="avatar" alt="" src={avatar} />
        <p>Adam Scott</p>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
//CSS Imports
import "../../styles/Dashboard/sidebar.css";
import radicalXLogo from "../../assets/RadicallX-Black-Logo 1.png";
import dashboard from "../../assets/dashboard-3.svg";
import apprencticeship from "../../assets/medal-star.svg";
import book from '../../assets/book.svg';
import briefcase from "../../assets/briefcase.svg";
import settings from "../../assets/setting-2.svg";
import avatar from "../../assets/avatar.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img src={radicalXLogo} className="sidebar-logo" alt="RadicalX" />
      <br/>
      <div className="nav-link">
        <img className="nav-icon" src={dashboard}/>
        <p className="link-text">Dashboard</p>
      </div>
      <div className="nav-link active-link">
        <img className="nav-icon" src={apprencticeship}/>
        <p className="link-text">Apprenticeships</p>
      </div>
      <div className="nav-link">
        <img className="nav-icon" src={book}/>
        <p className="link-text">Internships</p>
      </div>
      <div className="nav-link">
        <img className="nav-icon" src={briefcase}/>
        <p className="link-text">Jobs</p>
      </div>
      <div className="nav-link">
        <img className="nav-icon" src={settings}/>
        <p className="link-text">Settings</p>
      </div>
      {/* Footer/User */}
      <div className="sidebar-footer">
        <img className="avatar" src={avatar}/>
        <p>Adam Scott</p>
      </div>
    </div>
  );
};

export default Sidebar;

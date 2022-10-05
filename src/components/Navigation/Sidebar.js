import React from "react";
//CSS Imports
import "../../styles/Dashboard/sidebar.css";
import radicalXLogo from "../../assets/RadicallX-Black-Logo 1.png";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img src={radicalXLogo} className="sidebar-logo" alt="RadicalX" />
    </div>
  );
};

export default Sidebar;

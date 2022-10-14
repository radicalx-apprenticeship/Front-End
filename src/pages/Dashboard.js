import React from "react";
import Sidebar from "../components/Navigation/Sidebar";
import AddLogo from "../assets/add-square.svg";
import { Button } from "../components";
// CSS Imports
import "../styles/Dashboard/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div>
        <Button icon={AddLogo} href="#">
          Create New Apprenticeship
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;

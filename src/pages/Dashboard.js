import React from "react";
import Sidebar from "../components/Navigation/Sidebar";
import AddLogo from "../assets/add-square.svg";
import Card from "../components/Dashboard/Card";
import { Button } from "../components";
import { useNavigate } from "react-router";
// CSS Imports
import "../styles/Dashboard/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="page-header">
          <h1>Apprenticeship</h1>
          <Button icon={AddLogo} onClick={() => navigate("/apprenticeship")}>
            Create New Apprenticeship
          </Button>
        </div>
        <div className="card__container">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

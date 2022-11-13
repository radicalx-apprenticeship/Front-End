import React from "react";
import ApprenticeshipHeader from "./ApprenticeshipHeader";
import ProgressBar from "./ProgressBar";
import CompanyLogoCard from "./CompanyLogoCard";
// CSS Imports
import "../../styles/apprenticeship.css";
const Apprenticeship = () => {
  return (
    <div className="appren-container">
      {/* Page header */}
      <ApprenticeshipHeader />
      {/* Progress bar */}
      <ProgressBar />
      {/* Cards */}
      <div className="apprenticeship-cards">
        <CompanyLogoCard />
      </div>
    </div>
  );
};

export default Apprenticeship;

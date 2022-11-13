import React from "react";
import ApprenticeshipHeader from "./ApprenticeshipHeader";
import ProgressBar from "./ProgressBar";
// CSS Imports
import "../../styles/apprenticeship.css";
const Apprenticeship = () => {
  return (
    <div className="appren-container">
      {/* Page header */}
      <ApprenticeshipHeader />
      {/* Progress bar */}
      <ProgressBar />
    </div>
  );
};

export default Apprenticeship;

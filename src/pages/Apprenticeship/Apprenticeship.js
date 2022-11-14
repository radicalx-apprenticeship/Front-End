import React from "react";
import ApprenticeshipHeader from "./ApprenticeshipHeader";
import ProgressBar from "./ProgressBar";
import CompanyLogoCard from "./CompanyLogoCard";
import CompanyDescription from "./CompanyDescription";
import ApprenticeshipDescription from "./ApprenticeshipDescription";
import IntroVid from "./IntroVid";
import TeamType from "./TeamType";

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
        <CompanyDescription />
        <ApprenticeshipDescription />
        <IntroVid />
        <TeamType />
      </div>
    </div>
  );
};

export default Apprenticeship;

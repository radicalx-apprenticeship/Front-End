import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components";
// CSS Imports
import "../styles/apprenticeship.css";
import arrow from "../assets/arrow-left.svg";
import AddLogo from "../assets/add-square.svg";

const Apprenticeship = () => {
  // State Variables
  const history = useNavigate();

  return (
    <div className="appren-container">
      {/* Page header */}
      <div className="appren-header">
        {/* Go Back Button */}
        <button
          className="back-btn-container back-button"
          onClick={() => {
            // go back handler
            history(-1);
          }}
        >
          <img src={arrow} alt="" />
          <p> Back</p>
        </button>
        <h2>Creating Apprenticeship</h2>
        <Button icon={AddLogo} disabled>
          Publish Apprenticeship
        </Button>
      </div>
    </div>
  );
};

export default Apprenticeship;

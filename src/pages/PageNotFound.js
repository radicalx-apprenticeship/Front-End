import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components";
//CSS Imports
import "../styles/pagenotfound.css";

const PageNotFound = () => {
  // State Variables
  const history = useNavigate();

  return (
    <div className="main-container">
      <h1 className="page-title">404</h1>
      <p>Page Not Found</p>
      <Button
        className="login-button"
        onClick={() => {
          // go back event handler
          history("/");
        }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default PageNotFound;

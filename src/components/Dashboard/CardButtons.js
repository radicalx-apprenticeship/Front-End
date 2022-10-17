import React from "react";
import "../../styles/Dashboard/buttons.css";
import copyButton from "../../assets/copy.svg";
import deleteButton from "../../assets/trash.svg";
import editButton from "../../assets/edit.svg";

const CardButtons = () => {
  return (
    <div className="cardButtons">
      <button id="edit">
        {" "}
        <img src={editButton} className="editButton" alt="editButton" />
      </button>
      <button id="copy">
        <img src={copyButton} className="copyButton" alt="copyButton" />
      </button>
      <button id="delete">
        <img src={deleteButton} className="deleteButton" alt="DeleteButton" />
      </button>
    </div>
  );
};

export default CardButtons;

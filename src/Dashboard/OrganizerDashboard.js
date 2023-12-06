// OrganizerCard.js

import React from "react";
import { FiPlus } from "react-icons/fi";
import EventCard from "./EventCard";
import "./Dashboard.css";

const OrganizerCard = ({ isAddCard }) => {
  if (isAddCard) {
    return (
      <div className="event-card add-card">
        <span className="add-icon bigger-icon">
          <FiPlus />
        </span>
      </div>
    );
  }
};

export default OrganizerCard;

// OrganizerCard.js

import React from "react";
import { FiPlus } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Dashboard.css";
import CreateEventForm from "./createEventForm";
import { useNavigate } from "react-router-dom";

const OrganizerCard = ({ isAddCard, onCreateEvent }) => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    // Navigate to the event creation screen
    navigate("/create-event");
  };

  if (isAddCard) {
    return (
      <div>
        <div className="event-card add-card" onClick={handleCreateEvent}>
          <span className="add-icon bigger-icon">
            <FiPlus />
          </span>
        </div>

        {/* Render the CreateEventForm component conditionally based on the route */}
        {/* {navigate().location.pathname === "/create-event" && (
          <CreateEventForm
            onCancel={() => navigate("/dashboard")} // Navigate back to the dashboard on cancel
            onEventCreated={onCreateEvent} // Callback to update the dashboard after event creation
          />
        )} */}
      </div>
    );
  }
};

export default OrganizerCard;

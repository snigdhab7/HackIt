// OrganizerDashboard.js

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Dashboard.css";

const OrganizerCard = ({ isAddCard }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleCreateEvent = (event) => {
    event.preventDefault();
    // Handle event creation logic here
    closePopup();
  };

  if (isAddCard) {
    return (
      <div>
        <div className="event-card add-card" onClick={openPopup}>
          <span className="add-icon bigger-icon">
            <FiPlus />
          </span>
        </div>

        {isPopupOpen && (
          <div className="popup-container">
            <div className="popup">
              {/* Your form content goes here */}
              <form onSubmit={handleCreateEvent}>
                <div className="mb-3">
                  <label htmlFor="eventName" className="form-label">Event Name:</label>
                  <input type="text" className="form-control form-field-white form-field-rounded" id="eventName" name="eventName" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="eventSummary" className="form-label">Event Summary:</label>
                  <textarea className="form-control form-field-white form-field-rounded" id="eventSummary" name="eventSummary" required></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="eventDate" className="form-label">Event Date:</label>
                  <input type="date" className="form-control form-field-white form-field-rounded" id="eventDate" name="eventDate" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="eventLocation" className="form-label">Event Location:</label>
                  <input type="text" className="form-control form-field-white form-field-rounded" id="eventLocation" name="eventLocation" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="aboutEvent" className="form-label">About the Event:</label>
                  <textarea className="form-control form-field-white form-field-rounded" id="aboutEvent" name="aboutEvent" required></textarea>
                </div>

                <div className="button-container">
                  <button type="submit" className="btn btn-danger btn-rounded">Create Event</button>
                  <button type="button" className="btn btn-secondary btn-rounded" onClick={closePopup}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default OrganizerCard;

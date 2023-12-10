// CreateEventForm.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

const CreateEventForm = ({ onCancel, onEventCreated }) => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    // Initialize with empty data or default values
    eventName: "",
    summary: "",
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      await client.createEvent(eventData);
      onEventCreated(); // Notify the parent component that an event has been created
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleCancel = () => {
    onCancel();
    navigate("/dashboard"); // Navigate back to the dashboard
  };

  return (
    <div className="create-event-form">
      <h2>Create Event</h2>
      <form onSubmit={handleCreateEvent}>
        {/* Add input fields for event data */}
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">Event Name:</label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            name="eventName"
            onChange={handleInputChange}
            value={eventData.eventName}
            required
          />
        </div>
        {/* Add more input fields for other event data */}

        <div className="button-container">
          <button type="submit" className="btn btn-danger btn-rounded">Create Event</button>
          <button type="button" className="btn btn-secondary btn-rounded" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;

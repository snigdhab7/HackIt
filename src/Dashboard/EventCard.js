import React, { useState } from "react";
import EditEventFormPopup from "./EditEventFormPopup";
import * as client from "./client";
import { useEffect } from "react";

const EventCard = ({ event, userid }) => {
  const [account, setAccount] = useState(null);
  const fetchCurrentUserDetails = async (userid) => {
    try {
        const account = await client.fetchCurrentUserDetails(userid);
        
        setAccount(account);
    } catch (error) {
        console.error("Error fetching user details:", error);
    }

};

const editEventDetails = async (user) => {
  try {
      const event = await client.editEventDetails(user);
      console.log(event);
  } catch (error) {
      console.error("Error fetching user details:", error);
  }

};


useEffect(() => {
  const findUserById = async (userid) => {
    try {
      const user = await client.findUserById(userid);
      setAccount(user);
      console.log("Fetched user:", user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  fetchCurrentUserDetails(userid);
 // findUserById(userid);
}, [userid]);
  
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div key={event.id} className="event-card" style={{ margin: "10px" }}>
      <img src={event.photo} alt={event.eventName} />
      <div>
        <h2>{event.eventName}</h2>
        <p>{event.summary}</p>
        <p>Duration: {event.duration}</p>
        <p>{event.venue}</p>
      </div>
      {account && account.role === 'organizer' && (
          <button className="btn btn-primary" onClick={openPopup}> Edit </button>
        )}
         {account && account.role === 'organizer' && (
          <button className="btn btn-primary"> Delete </button>
        )}
       {isPopupOpen && (
          <EditEventFormPopup
            onCancel={closePopup}
          />
        )}

    </div>
  );
};

export default EventCard;

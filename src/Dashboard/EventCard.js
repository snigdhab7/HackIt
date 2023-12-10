// EventCard.js

import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (

    <Link to={`/eventdetails`} style={{ textDecoration: 'none'}}>
    <div key={event._id} className="event-card" style={{margin: '10px'}}>

      <img src={event.photo} alt={event.eventName} />
      <div>
        <h2>{event.eventName}</h2>
        <p>{event.description}</p>
        <p>{event.timeStart}</p>
        <p>{event.venue}</p>
      </div>
    </div>
    </Link>
  );
};

export default EventCard;

// EventCard.js

import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link to={`/eventdetails`} style={{ textDecoration: 'none'}}>
    <div key={event.id} className="event-card">
      <img src={event.imageUrl} alt={event.title} />
      <div>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p>{event.time}</p>
        <p>{event.venue}</p>
      </div>
    </div>
    </Link>
  );
};

export default EventCard;

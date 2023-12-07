// EventCard.js

import React from "react";

const EventCard = ({ event }) => {
  return (
    <div key={event.id} className="event-card" style={{margin: '10px'}}>
      <img src={event.imageUrl} alt={event.title} />
      <div>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p>{event.time}</p>
        <p>{event.venue}</p>
      </div>
    </div>
  );
};

export default EventCard;

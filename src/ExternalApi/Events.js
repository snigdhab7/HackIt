import React, { useState, useEffect } from "react";
import * as client from "./Client";

function Events({ event }) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
   // fetchExternalEvents();
  }, []);

  const fetchExternalEvents = async () => {
    const events = await client.fetchExternalEvents();
    setEvents(events);
  };

  return (
    <div>
     {/*  <h1 style={{ textAlign: "center" }}>Events</h1> */}
      <div>
        {/* {events.map((event, index) => ( */}
          <div >
            <a href={event.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color:"white"}}>
              <h2 className="external-events-title">{event.title}</h2>
            </a>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default Events;

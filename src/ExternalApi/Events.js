import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as client from './Client';

function Events() {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const events = await client.findAllEvents();
        setEvents(events);
    };

    return (

        <div>
            <h1>Events:</h1>
            <div>
                {events.map((event, index) => (

                    <Link to={event.link}>

                        <div key={index} className="event-card" style={{ margin: "10px" }}>
                            <img src={event.image} alt={event.title} />
                            <div>
                                <h2>{event.title}</h2>
                                <p>{event.description}</p>
                                <p>Duration: {event.date.when}</p>
                                <p>{event.address}</p>
                            </div>
                        </div>

                    </Link>

                ))}
            </div>


        </div>
    );

}
export default Events;
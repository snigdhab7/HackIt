import React, { useState, useEffect } from "react";
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

                    <div key={index}>
                        <h2>{event.title}</h2>
                        <p>Link: <a href={event.link}>{event.link}</a></p>
                    </div>

                ))}
            </div>            
           
        </div>
    );

}
export default Events;
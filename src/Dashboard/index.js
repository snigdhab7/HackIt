// App.js

import React, { useState } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import EventCard from "./EventCard";
import OrganizerCard from "./OrganizerDashboard";

const eventsData = [
  {
    id: 1,
    title: "Tech Event 1",
    description:
      "Join us for an exciting tech event featuring the latest innovations.",
    time: "Date: December 15, 2023 | Time: 2:00 PM",
    venue: "Venue: Tech Hub Convention Center",
    imageUrl: require("./../resources/cristiano-firmani-tmTidmpILWw-unsplash.jpg"),
  },
  {
    id: 2,
    title: "Tech Event 2",
    description: "Discover new technologies and network with industry experts.",
    time: "Date: January 5, 2024 | Time: 3:30 PM",
    venue: "Venue: Innovation Plaza",
    imageUrl: require("./../resources/nejc-soklic-wO42Rmamef8-unsplash.jpg"),
  },
  {
    id: 3,
    title: "Tech Event 3",
    description:
      "Learn from thought leaders and explore groundbreaking tech solutions.",
    time: "Date: February 20, 2024 | Time: 1:00 PM",
    venue: "Venue: FutureTech Auditorium",
    imageUrl: require("./../resources/shane-rounce-1ZZ96uESRJQ-unsplash.jpg"),
  },
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Main Content */}
      <div className="main-content">
        {/* Horizontal Navbar */}
        <div className="navbar-horizontal">
          <Navbar />
        </div>

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* List of Events as Cards */}
        <div className="event-list">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}

          {/* Organizer Card for Adding Events */}
          <OrganizerCard isAddCard={true} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

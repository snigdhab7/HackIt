// index.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import EventCard from "./EventCard";
import OrganizerCard from "./OrganizerDashboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as client from "./client";
import { response } from "express";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the server when the component mounts
    const fetchEvents = async () => {
      try {
        const users = await client.findAllEvents();
        // setEvents(response.data);
        console.log("Fetched events:", users);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []); // The empty dependency array ensures the effect runs once when the component mounts

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="entire-page">
      <div>
        {/* Main Content */}
        <div className="main-content">
          {/* Horizontal Navbar */}
          <div className="navbar-horizontal">
            <Navbar />
          </div>

          {/* Slider Carousel */}
          <Slider {...carouselSettings}>
            {/* Your existing carousel slides */}
          </Slider>
          <br />

          {/* Search Bar */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* List of Events as Cards */}
          <div className="event-list">
            {filteredEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}

            {/* Organizer Card for Adding Events */}
            <OrganizerCard isAddCard={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

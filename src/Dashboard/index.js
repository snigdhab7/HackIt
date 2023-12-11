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
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const userid = useParams().id;
  console.log("id", userid);
  const id1 = useParams().id;
  console.log("id1", id1);

  useEffect(() => {
    

    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const eventsData = await client.findAllEvents();
      setEvents(eventsData); // Fix: Set eventsData instead of response.data
      console.log("Fetched events:", eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Remove the following line to display all events without filtering

  const filteredEvents = events;

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
            <Navbar userid={userid} />
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
            {/* {filteredEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))} */}
            {filteredEvents.map((event) => (
              <Link
                key={event._id}
                to={
                  userid
                    ? `/events/${userid}/${event._id}`
                    : `/events/${event._id}`
                }
                style={{ textDecoration: "none" }}
              >
                <EventCard event={event} />
              </Link>
            ))}

            {/* Organizer Card for Adding Events */}
            <OrganizerCard isAddCard={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

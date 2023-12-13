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
import Events from "../ExternalApi/Events";
const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const [filteredEvents, setFilteredEvents] = useState([]);
  // const [event, setEvent] = useState([]);
  const userid = useParams().id;
  // console.log("id", userid);
  const id1 = useParams().id;
  // console.log("id1", id1);

  const fetchEvents = async (searchTerm) => {
    const events = await client.findAllEvents();
    setEvents(events);
    setFilteredEvents(events);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

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

  const setSearchTerms = (e) => {
    setSearchTerm(e);
    const filtered = events.filter((event) => {
      return event.eventName?.toLowerCase().includes(e.toLowerCase());
    });
    setFilteredEvents(filtered);
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
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerms} />

          {/* List of Events as Cards */}
          <div className="event-list">
            <div className="event-cards">
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
            <div className="external-events">
              <Events />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

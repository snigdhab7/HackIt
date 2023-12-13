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
          <div>
            <img
              src="https://www.aami.org/images/default-source/htm/htm-week/htm24emailheader.jpg?sfvrsn=aebdf854_3"
              alt="Event Management 1"
              className="display-photo1"
            />
          </div>
          <div>
            {/* Add more images for the carousel */}
            <img
              src="https://creative-europe-desk.de/files/styles/slider_1400x735_exakt/public/images/vrdayseurope_immersive_tech.jpg"
              alt="Event Management 2"
              className="display-photo1"
            />
          </div>
          <div>
            {/* Add more images for the carousel */}
            <img
              src="https://theblackwomenintech.com/wp-content/uploads/2022/12/July-Events-Eventbrite-Title-Template-4.jpg"
              alt="Event Management 2"
              className="display-photo1"
            />
          </div>
          <div>
            {/* Add more images for the carousel */}
            <img
              src="https://eventbrowse.com/wp-content/uploads/2023/07/643489949a8e96bb996e787a_Tech20Week20Meta-JsVY83.tmp_.jpg"
              alt="Event Management 2"
              className="display-photo1"
            />
          </div>
          <div>
            {/* Add more images for the carousel */}
            <img
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F563913089%2F496415951365%2F1%2Foriginal.20230728-093246?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C241%2C1080%2C540&s=8de3ab39266095120b7ad8f334bd9eb3"
              alt="Event Management 2"
              className="display-photo1"
            />
          </div>
          <div>
            {/* Add more images for the carousel */}
            <img
              src="https://saeindia.org/jbframework/uploads/2023/03/Banner-2023-03-23T184459.521-1365x384.jpg"
              alt="Event Management 2"
              className="display-photo1"
            />
          </div>
          {/* Add more slides as needed */}
        </Slider>
          <br />
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

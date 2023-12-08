// index.js
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import EventCard from "./EventCard";
import OrganizerCard from "./OrganizerDashboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const eventsData = [
  {
    id: 1,
    title: "Tech Event 3",
    description:
      "Learn from thought leaders and explore groundbreaking tech solutions.",
    time: "Date: February 20, 2024 | Time: 1:00 PM",
    venue: "Venue: FutureTech Auditorium",
    imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F651109879%2F1887495342033%2F1%2Foriginal.20231130-172715?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C6912%2C3456&s=2b81a025a78bb3a10f4b78bfa5f58574",
  },
  {
    id: 2,
    title: "Tech Event 3",
    description:
      "Learn from thought leaders and explore groundbreaking tech solutions.",
    time: "Date: February 20, 2024 | Time: 1:00 PM",
    venue: "Venue: FutureTech Auditorium",
    imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F653862629%2F274725523691%2F1%2Foriginal.20231205-203448?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=10c4bf50b03418726ce148924541d1c6",
  },
  {
    id: 3,
    title: "Tech Event 3",
    description:
      "Learn from thought leaders and explore groundbreaking tech solutions.",
    time: "Date: February 20, 2024 | Time: 1:00 PM",
    venue: "Venue: FutureTech Auditorium",
    imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133675681%2F475883336163%2F1%2Foriginal.20210428-175245?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=10b8ea0aa371a15bc1b13f56b1717712",
  },
  {
    id: 4,
    title: "Tech Event 1",
    description:
      "Join us for an exciting tech event featuring the latest innovations.",
    time: "Date: December 15, 2023 | Time: 2:00 PM",
    venue: "Venue: Tech Hub Convention Center",
    //imageUrl: require("./../resources/cristiano-firmani-tmTidmpILWw-unsplash.jpg"),
    imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F638024699%2F742206267573%2F1%2Foriginal.20231108-201557?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=f0ed09e081e8679e53cebbcb22576c86"
  },
  {
    id: 5,
    title: "Tech Event 2",
    description: "Discover new technologies and network with industry experts.",
    time: "Date: January 5, 2024 | Time: 3:30 PM",
    venue: "Venue: Innovation Plaza",
    imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F120226859%2F72706220705%2F1%2Foriginal.20201207-040939?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C27%2C1012%2C506&s=4ee297b3db1b9893c5eaf5d657f75ec7",
  },
  {
    id: 6,
    title: "Tech Event 3",
    description:
      "Learn from thought leaders and explore groundbreaking tech solutions.",
    time: "Date: February 20, 2024 | Time: 1:00 PM",
    venue: "Venue: FutureTech Auditorium",
    imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F119071887%2F72706220705%2F1%2Foriginal.20201130-194555?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C42%2C1520%2C760&s=ec6a575d5587c2ece9ee6f5782cee815",
  }
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEvents = eventsData.filter((event) =>
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
   
       
      <div >
        {/* Main Content */}
        <div className="main-content">
          {/* Horizontal Navbar */}
          <div className="navbar-horizontal">
            <Navbar />
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

          {/* Search Bar */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* List of Events as Cards */}
          <div className="event-list">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event}/>
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

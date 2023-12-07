// EventDetails.js
import { FaCalendar, FaLocationArrow, FaClock} from "react-icons/fa";
import React from "react";
import "./EventDetails.css";
import Heart from "react-animated-heart";
import { useState } from "react";
import profileImage from './Home.jpeg';

function EventDetails() {
  const [isClick, setClick] = useState(false);

  return (
    <div>
      <header className="header-background">
        <img
          src={profileImage}
          alt="Event Image"
        />
      </header>
            <div className="ticket-box">
        <p className="ticket-price ">$0-$20</p>
        <button className="register-button">Register</button>
      </div>
      <div className="event-details">
        <div className="event-heading">
          <p>Thursday, December 29 2023</p>
          <h2 class="event-heading-color">Data and Tech Workshop for Small and Medium Business Leaders
      
          </h2>
          <p className="medium-text">Join us for an in-person Data and Tech Workshop where small and medium business leaders can enhance their skills and stay ahead of the game</p>
        </div>
        <div className="event-heading">
         <h5 class="event-heading-color">Date and time</h5>
        <p className="medium-text">
        <FaCalendar className="me-3 color-palette"/>
          Thursday, December 28 2023
          </p>
        </div>
        <div className="event-heading">
         <h5 class="event-heading-color">Location</h5>
         <p className="medium-text">
          <FaLocationArrow className="me-3 color-palette"/>
          Boston, MA 
          </p>
        </div>
        <div className="event-heading">
         <h5 class="event-heading-color">Refund Policy</h5>
         <p className="medium-text">Contact the organizer to request a refund.
          HackIt's fee is nonrefundable. </p>
        </div>
        <div className="event-heading">
         <h5 class="event-heading-color">About this event</h5>
         <p className="medium-text">
          <p className="medium-text">
          <FaClock className="color-palette me-2"/>
          5 hours 30 minutes
          </p>
         As a revenue funded, self-sustaining, and employee-owned small business, we deeply understand what tech and data challenges SMB might be facing, and 
         the great potential in business growth with the power of data and tech. We want to share what we have learned in the trenches of running our own business 
         and from our record of successful partnerships with our clients. We also want to offer immediate help to your urgent problems and build a community for SMB 
         leaders to support and learn from each other.
         </p>
        </div>
        <div className="event-heading">
         <h5 class="event-heading-color">Who is this for?</h5>
         <p className="medium-text">
         Small and medium business leaders such as owners, founders, and managers   
         </p>
        </div>
        <div className="event-heading">
         <h5 class="event-heading-color">About the organizer</h5>
         <p className="medium-text">
         Komodo Technologies is an innovative, end-to-end data R&D firm that leverages data science, software engineering, rapid prototyping, and future-focused people strategy to help companies discover and unleash the power of their data.    
         </p>
        </div>
        <div className="tags event-heading event-heading-color">
          <strong>Tags:</strong><br/>
          <span className="mt-2">Technical event</span>
          <span>Data Science</span>
        </div>
      </div>

      <footer>
        &copy; 2023 Data and Tech Workshop
      </footer>
    </div>
  );
}

export default EventDetails;

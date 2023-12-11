import { FaCalendar, FaLocationArrow, FaClock} from "react-icons/fa";
import { useState } from "react";
import React from "react";
import "./EventDetails.css";
import { Link , useParams} from "react-router-dom";
import StarRating from "./StarRating";
import * as client from "./client.js";
import { useEffect } from "react";
import { format } from "date-fns";

function EventDetails() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { userid, eventId } = useParams(); 
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [registrationConfirmed, setRegistrationConfirmed] = useState(false);
  const [deregisterConfirmed, setDeregisterConfirmed] = useState(true);
  const openModal = async () => {
    // Fetch user data only when the modal is opened
    try {
      const userData = await client.findUserById(userid);
      setUsers(userData);
      setModalOpen(true);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setShowConfirmation(false);
  };

  const handleRegisterClick = () => {
      closeModal();
      setRegistrationConfirmed(true);
  };

  const handleDeregisterClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationNo = () => {
    setShowConfirmation(false);
    setDeregisterConfirmed(false); 
  };

  const handleConfirmationYes = () => {
    setShowConfirmation(false);
    setDeregisterConfirmed(true); 
    setRegistrationConfirmed(false);
  };
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        console.log("Invalid date");
      }
      return format(date, "do MMMM yyyy");
    } catch (error) {
      console.error('Error parsing date:', error);
      return 'Invalid date';
    }
  };

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventData = await client.findEventById(eventId);
        setEvents(eventData); // 
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };
 
    fetchEventDetails();
    console.log("DeregisterConfirmed state:", deregisterConfirmed);
    console.log("Regist",registrationConfirmed);
  }, [eventId,deregisterConfirmed,registrationConfirmed]);

  console.log("USERSSSSS",users);

  return (
    <div>
      <header className="header-background">
      </header>
      <div className="event-details">
      {events && (
       <div>
      <div className="float-end">
          <button className="register-button me-2" onClick={handleDeregisterClick}>Deregister</button>
        <button className="register-button" onClick={openModal} disabled={registrationConfirmed || !deregisterConfirmed} >Register</button>
        </div>
        <div className="event-heading">
          <StarRating/>
          <h2 class="event-heading-color">{events.eventName}
          </h2>
          <p className="medium-text">{events.summary}</p>
        </div>
        <div className="event-heading">
         <h5 class="event-heading-color">Date and time</h5>
        <p className="medium-text">
        <FaCalendar className="me-3 color-palette"/>
        {formatDate(events.date)}
          </p>
        </div>
        <div className="event-heading">
         <h5 class="event-heading-color">Location</h5>
         <p className="medium-text">
          <FaLocationArrow className="me-3 color-palette"/>
          {events.venue}
          </p>
        </div>
        <div className="event-heading">
         <h5 class="event-heading-color">About this event</h5>
         <p className="medium-text">
          <p className="medium-text">
          <FaClock className="color-palette me-2"/>
         {events.timeStart}
          </p>
         {events.description}
         </p>
        </div>
        </div>
      )}
      </div>

      <footer>
        &copy; 2023 Data and Tech Workshop
      </footer>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="registration-form" onClick={(e) => e.stopPropagation()}>
            <h2 className="event-heading-color">Registration Form</h2>
            <input
              className='form-control mb-2'
              type="text"
              placeholder="First Name*"
              name="firstName"
              value={users.firstName}
            />
        
            <input
              className='form-control mb-2'
              type="text"
              placeholder="Last Name*"
              name="lastName"
              value={users.lastName}
            />
        
            <input
              className='form-control mb-2'
              type="email"
              placeholder="Email*"
              name="email"
              value={users.email}
            />
        
            <input
              className="form-control"
              type="text"
              placeholder="Mobile number*"
              name="mobileNumber"
              value={users.phoneNumber}
            />
            <button className="btn btn-danger mt-2" onClick={handleRegisterClick}>
              Confirm
            </button>
            <button className="btn btn-danger mt-2" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

  {showConfirmation && (
        <div className="modal-overlay" onClick={() => setShowConfirmation(false)}>
          <div className="confirmation-message" onClick={(e) => e.stopPropagation()}>
            <h3 className="event-heading-color">We are sorry to see you go  :( </h3>
            <p>Are you sure you want to deregister?</p>
            <button className="btn btn-danger mt-2" onClick={handleConfirmationNo}>
              No, Cancel
            </button>
            <button className="btn btn-danger mt-2" onClick={handleConfirmationYes}>
              Yes, Deregister
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default EventDetails;

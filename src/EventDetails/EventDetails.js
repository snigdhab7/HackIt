import { FaCalendar, FaLocationArrow, FaClock, FaBookmark, FaHeart} from "react-icons/fa";
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
  const [isBookmarked, setBookmarked] = useState(false);
  const [userIsRegistered, setUserIsRegistered] = useState();
  const openModal = async () => {
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

  const handleRegisterClick = async () => {
    closeModal();
    await client.registerUserForEvent(userid, eventId);
    const regstatus = await client.registrationStatus(userid, eventId);
    setUserIsRegistered(regstatus);
  };

  const handleDeregisterClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationNo = () => {
    setShowConfirmation(false);
  };

  const handleConfirmationYes = async () => {
    setShowConfirmation(false);
    try {
      await client.deRegisterUserForEvent(userid, eventId);
      const regstatus = await client.registrationStatus(userid, eventId);
      setUserIsRegistered(regstatus);
    } catch (error) {
      console.error("Error deregistering user for event:", error);
    }
  };

  const bookmarkEvent = async() =>{
    await client.bookmarkEvent(userid,eventId);
    const isBookmarked = await client.bookmarkedStatus(userid,eventId);
    setBookmarked(isBookmarked);
  }

  const deBookmarkEvent = async() =>{
    await client.deBookmarkEvent(userid,eventId);
    const isBookmarked = await client.bookmarkedStatus(userid,eventId);
    setBookmarked(isBookmarked);
  }



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
        setEvents(eventData);
        if(userid!=null){
          console.log("User data",userid);
        const isUserRegistered = await client.registrationStatus(userid, eventId);
        setUserIsRegistered(isUserRegistered);
        const isBookmarked = await client.bookmarkedStatus(userid,eventId);
        setBookmarked(isBookmarked);
        console.log("Initial bookmark",isBookmarked)
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [eventId, userid]);



  return (
    <div>
      <header className="header-background">
      </header>
      <div className="event-details">
      {events && (
       <div>
      <div className="buttons float-end">
      <FaHeart
  className={`me-3 fa-bookmark ${isBookmarked ? 'bookmarked' : ''}`}
  onClick={() => {
    if (userid) {
      if (!isBookmarked) {
        bookmarkEvent();
      } else {
        deBookmarkEvent();
      }
    }
  }}
  disabled={!userid} 
/>

      <button className="register-button me-2" onClick={handleDeregisterClick} disabled={!userIsRegistered|| !userid}>
  Deregister
</button>
<button className="register-button" onClick={openModal} disabled={userIsRegistered|| !userid}>
  Register
</button>
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
              value={users?.firstName || ''}
            />
        
            <input
              className='form-control mb-2'
              type="text"
              placeholder="Last Name*"
              name="lastName"
              value={users?.lastName || ''}
            />
        
            <input
              className='form-control mb-2'
              type="email"
              placeholder="Email*"
              name="email"
              value={users?.email || ''}
            />
        
            <input
              className="form-control"
              type="text"
              placeholder="Mobile number*"
              name="mobileNumber"
              value={users?.phoneNumber || ''}
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

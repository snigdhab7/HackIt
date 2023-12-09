import { FaCalendar, FaLocationArrow, FaClock} from "react-icons/fa";
import { useState } from "react";
import React from "react";
import "./EventDetails.css";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
function EventDetails() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setShowConfirmation(false);
  };



  const handleRegisterClick = () => {
      closeModal();
      return <Link to="/Dashboard" replace="true" />;
  };

  const handleDeregisterClick = () => {
    setShowConfirmation(true);
  };

  return (
    <div>
      <header className="header-background">
      </header>
      <div className="event-details">
      <div className="float-end">
          <button className="register-button me-2" onClick={handleDeregisterClick}>Deregister</button>
        <button className="register-button" onClick={openModal}>Register</button>
        </div>
        <div className="event-heading">
          <StarRating/>
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
            />
        
            <input
              className='form-control mb-2'
              type="text"
              placeholder="Last Name*"
              name="lastName"
            />
        
            <input
              className='form-control mb-2'
              type="email"
              placeholder="Email*"
              name="email"
            />
        
            <input
              className="form-control mb-2"
              type="email"
              placeholder="Confirm Email*"
              name="confirmEmail"
            />
        
            <input
              className="form-control"
              type="text"
              placeholder="Mobile number*"
              name="mobileNumber"
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
            <button className="btn btn-danger mt-2" onClick={() => setShowConfirmation(false)}>
              No, Cancel
            </button>
            <button className="btn btn-danger mt-2" onClick={() => setShowConfirmation(false)}>
              Yes, Deregister
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default EventDetails;

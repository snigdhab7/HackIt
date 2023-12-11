import React from "react";
import { useState } from "react";
import "./StarRating.css"
import * as client from "./client";
import { useEffect } from "react";

function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const fetchEvents = async () => {
      try {
        const events = await client.findAllEvents();
  
        const ratingsData = events.map((event) => ({
          overallRating: event.ratings?.overallRating || 0,
          numberOfRates: event.ratings?.numberOfRates || 1,
        }));
    
        const totalWeightedRating = ratingsData.reduce((total, { overallRating, numberOfRates }) => {
          return total + overallRating * numberOfRates;
        }, 0);
    
        const totalNumberOfRates = ratingsData.reduce((total, { numberOfRates }) => total + numberOfRates, 0);
    
        const averageRating = totalNumberOfRates !== 0 ? totalWeightedRating / totalNumberOfRates : 0;
        const roundedAverageRating = averageRating.toFixed(2);
        setAverageRating(roundedAverageRating);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
  
    useEffect(() => {
      fetchEvents();
    }, []);

    return (
      <div className="star-rating">
          <h5>Ratings: {averageRating}</h5>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };
  export default StarRating;
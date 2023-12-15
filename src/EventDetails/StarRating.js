import React, { useState, useEffect } from "react";
import * as client from "./client";
import "./StarRating.css";

function StarRating({ eventId , userid}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  const fetchEventRating = async () => {
    try {
      const event = await client.findEventById(eventId);

      const overallRating = event.ratings?.overallRating || 0;
      const numberOfRates = event.ratings?.numberOfRates || 1;

      const totalWeightedRating = overallRating * numberOfRates;
      const totalNumberOfRates = numberOfRates;

      const averageRating = totalNumberOfRates !== 0 ? totalWeightedRating / totalNumberOfRates : 0;
      const roundedAverageRating = averageRating.toFixed(2);
      setAverageRating(roundedAverageRating);
    } catch (error) {
      console.error("Error fetching event rating:", error);
    }
  };

  const saveUserRating = async (index) => {
    setRating(index);
    const ratingResponse = client.saveUserRating(userid, eventId, rating);

  }

  useEffect(() => {
    fetchEventRating();
  }, [eventId]);

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
            onClick={() => saveUserRating(index)} //setRating(index)
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;

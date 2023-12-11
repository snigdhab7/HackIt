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
      const events = await client.findAllEvents();
      const overallRatings = events.map((event) => event.ratings?.overallRating || 0);

      // Calculate the average rating
      const averageRating =
        overallRatings.reduce((total, rating) => total + rating, 0) / overallRatings.length;

      setAverageRating(averageRating);
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
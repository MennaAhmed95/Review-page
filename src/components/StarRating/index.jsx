import React, { useState } from "react";
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="stars">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <button
            className="radio"
            type="button"
            name="rating"
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
            key={i}
          >
            <i
              className={`fa fa-star ${
                ratingValue <= (rating || hover) ? "checked" : ""
              }`}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(rating)}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;

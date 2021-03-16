import React, { useState, useEffect } from "react";

const ReviewCard = ({ src, personNam, date, title, rating, details, id }) => {
  const [comments, setComments] = useState([]);
  useEffect(async () => {
    const response = await fetch("http://localhost:3009/comments");
    const data = await response.json();
    setComments(data);
  }, []);

  return (
    <div className="content__card">
      <img className="content__card__per" src={src} alt="Avatar" />
      <div className="content__card__container">
        <h3 className="content__card__container__personName">
          <b>{personNam}</b>
        </h3>
        <p className="content__card__container__date">{date}</p>
        <p className="content__card__container__titl">{title}</p>
        <div className="content__card__container__rate">
          <div className={rating > 3 ? "like" : "dislike"}>
            <i
              className={rating > 3 ? "fas fa-thumbs-up" : "fas fa-thumbs-down"}
            ></i>
          </div>
          <div className="star">
            {[...Array(parseInt(rating))].map((star, i) => (
              <i className="fa fa-star checked" key={i} />
            ))}
            {[...Array(5 - parseInt(rating))].map((star, i) => (
              <i className="fa fa-star" key={i} />
            ))}
            <span className="black">{rating}/5</span>
          </div>
        </div>
        <p className="content__card__container__paragraph">{details}</p>
        {comments &&
          comments.map((item) => {
            if (item.reviewId == id) {
              return (
                <>
                  <b className="yourComment">Your Comment : </b>
                  <div className="content__card__container__comment">
                    {item.body}
                  </div>
                </>
              );
            }
            return (
              <a href="#" className="content__btn diff">
                Add Comment
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default ReviewCard;

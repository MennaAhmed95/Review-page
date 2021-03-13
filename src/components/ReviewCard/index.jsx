import React from "react";

const ReviewCard = ({ rating }) => {
  return (
    <div className="content__card">
      <img
        className="content__card__per"
        src="/assets/images/615.jpg"
        alt="Avatar"
      />
      <div className="content__card__container">
        <h3 className="content__card__container__personName">
          <b>Jane Doe</b>
        </h3>
        <p className="content__card__container__date">20 Dec 2020</p>
        <p className="content__card__container__titl">Best App ever !</p>
        <div className="content__card__container__rate">
          <div className={rating > 2 ? "like" : "dislike"}>
            <i
              className={rating > 2 ? "fas fa-thumbs-up" : "fas fa-thumbs-down"}
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
        <p className="content__card__container__paragraph">
          Shahry is the best service I have ever encountered in my entrie life.
          its beyond words! Always good support. Very rigid security (make sure
          your device is paried), and they have the most proffesional, frindly
          support teams by a long shot! Super happy to be onboard with such a
          progressive brand.
        </p>
        <a href="#" className="content__btn diff">
          Add Comment
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;

{
  /* <i className="fa fa-star checked"></i>
<i className="fa fa-star checked"></i>
<i className="fa fa-star checked"></i>
<i className="fa fa-star"></i>
<i className="fa fa-star"></i> */
}

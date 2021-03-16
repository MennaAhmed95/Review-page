import React, { useState, useEffect } from "react";
import ReviewCard from "../ReviewCard";
import Modal from "./../Modal/index";
import axios from "axios";

const LandPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(async () => {
    const response = await fetch("http://localhost:3009/reviews");
    const data = await response.json();
    setReviews(data);
  }, []);

  return (
    <section className="landPage">
      <img
        className="landPage__landImg"
        src="/assets/images/Supermarket.jpg"
        alt="supermarket"
      />
      <div className="content">
        <h1 className="content__title">WHAT OUR USERS SAY ABOUT SHAHRY ?</h1>
        <a onClick={toggleModal} className="content__btn" id="myBtn">
          ADD A REVIEW
        </a>
        <Modal
          classModal={`modal ${isOpen ? "block" : ""}`}
          toggleModal={toggleModal}
        />
        {reviews &&
          reviews.map((item) => {
            return (
              <ReviewCard
                key={item}
                rating={item.rating}
                src={item.person.picture.medium}
                personNam={`${item.person.name.first} ${item.person.name.last}`}
                date="20 Dec 2020"
                title={item.title}
                details={item.details}
                id={item._id}
              />
            );
          })}
      </div>
    </section>
  );
};

export default LandPage;

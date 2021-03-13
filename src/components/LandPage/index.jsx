import React, { useState } from "react";
import ReviewCard from "../ReviewCard";
import Modal from "./../Modal/index";

const LandPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
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
        <ReviewCard rating="3" />
        <ReviewCard rating="1" />
      </div>
    </section>
  );
};

export default LandPage;

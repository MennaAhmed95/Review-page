import React, { useState } from "react";
import StarRating from "../StarRating";

const Modal = ({ classModal, toggleModal }) => {
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("done!!!!!!!!!");
    toggleModal();
  };
  return (
    <div id="myModal" className={classModal}>
      {/* <!-- Modal content --> */}
      <section className="sec">
        <div className="modal-content">
          <span>Add A Review</span>
          <span onClick={toggleModal} className="close">
            &times;
          </span>
        </div>
        <form className="rating-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label for="rating">RATING </label>
            <StarRating />
          </div>
          <div className="form-control">
            <label for="title"> REVIEW TITLE </label>
            <input
              className="inp input1"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label for="details">REVIEW DETAILS </label>
            <textarea
              className="inp input2"
              name="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
          <hr className="line" />
          <button className="submit" type="submit">
            ADD REVIEW
          </button>
        </form>
      </section>
    </div>
  );
};

export default Modal;

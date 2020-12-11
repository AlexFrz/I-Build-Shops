import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Contact.scss";

function Contact({ setShowModal }) {
  const history = useHistory();
  return (
    <div className="contact">
      <div className="contact__bg-triangle"></div>
      <button
        className="contact__quit"
        onClick={() => {
          history.go(0);
        }}
      >
        X
      </button>

      <div className="contact__textBox">
        <div className="contact__text">
          <h5>Click & Send</h5>
          <a href="mailto:frezoul.alex@gmail.com">
            frezoul.alex<span>@</span>gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

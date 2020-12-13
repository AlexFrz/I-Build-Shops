import React from "react";
import { Link } from "react-router-dom";

function ButtonsNav() {
  return (
    <div className="buttons__wrapper">
      <Link to="/works">
        <div className="button button1">
          <h2>
            <span>See my work</span>
          </h2>
        </div>
      </Link>
      <Link to="/about">
        <div className="button button2">
          <h2>
            <span>About me</span>
          </h2>
        </div>
      </Link>
      <Link to="/services">
        <div className="button button3">
          <h2>
            <span>What I'll do for you?</span>
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default ButtonsNav;

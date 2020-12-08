import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <Link to="/">
          <div className="logo">I BUILD SHOPS.</div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">discover</Link>
            </li>
            <li>
              <Link to="/works">works</Link>
            </li>
            <li>
              <Link href="/">solutions</Link>
            </li>
            <li>
              <a href="/">reach</a>
            </li>
            <li className="btn">
              <a href="/">HireMe</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

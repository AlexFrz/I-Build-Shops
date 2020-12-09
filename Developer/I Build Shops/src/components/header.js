import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Header({ buttonColor }) {
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
              <Link to="/about">who am I</Link>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <motion.li
              className="btn"
              whileHover={{
                scale: 1.1,
              }}
            >
              <motion.a
                href="/"
                style={{ backgroundColor: `${buttonColor}` }}
                whileHover={{
                  textShadow: "0px 0px 8px rgb(255, 255, 255)",
                  boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                }}
              >
                HireMe
              </motion.a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Modal from "./Modal";

import { BrowserView, MobileView } from "react-device-detect";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Header({ buttonColor }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <BrowserView>
        <header>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <div className="header-inner">
            <Link to="/">
              <div className="logo">I BUILD SHOPS.</div>
            </Link>
            <nav>
              <ul>
                <motion.li
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Link to="/services">Discover</Link>
                </motion.li>
                <motion.li
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Link to="/works">works</Link>
                </motion.li>
                <motion.li
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Link to="/about">who am I</Link>
                </motion.li>
                <motion.li
                  className="btn"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <motion.a
                    className="hireme"
                    style={{ backgroundColor: `${buttonColor}` }}
                    whileHover={{
                      textShadow: "0px 0px 8px rgb(255, 255, 255)",
                      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                    }}
                    onClick={() => setShowModal(!showModal)}
                  >
                    Contact
                  </motion.a>
                </motion.li>
              </ul>
            </nav>
          </div>
        </header>
      </BrowserView>

      <MobileView>
        <header>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <div className="header-inner">
            <Link to="/">
              <div className="logo">I BUILD SHOPS.</div>
            </Link>
            <nav>
              <ul>
                <motion.li
                  className="btn"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <motion.a
                    className="hireme"
                    style={{ backgroundColor: `${buttonColor}` }}
                    whileHover={{
                      textShadow: "0px 0px 8px rgb(255, 255, 255)",
                      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                    }}
                    onClick={() => setShowModal(!showModal)}
                  >
                    Contact
                  </motion.a>
                </motion.li>
              </ul>
            </nav>
          </div>
        </header>
      </MobileView>
    </>
  );
}

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.scss";
import Contact from "./Contact";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

function Modal({ showModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <Contact />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;

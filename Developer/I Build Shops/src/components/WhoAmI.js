import React from "react";
import { Link } from "react-router-dom";
import "./WhoAmI.scss";
import { motion } from "framer-motion";

function WhoAmI() {
  const imageDetails = {
    width: 600,
    height: 600,
  };

  return (
    <div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="about__imageWrapper">
        <Link to="/">
          <div src="../images/me.jpg" className="about__image" />
        </Link>
      </div>
      <div className="about__section">
        <div className="about__handle">Alex Frezoul</div>
        <div className="about__textContainer">
          <h1 className="about__title">Who's that?</h1>
          <div className="about__body">
            <p>
              <span class="about__firstletter">H</span>ey you, I am
              <span>Alex</span>.
            </p>
            <p>
              I heard you have <span>hopes and dreams</span>. You know what? Me
              too.
            </p>
            <p>
              When I was a child, my dad asked me almost everyday "what do you
              want to do, when you'll be grown up?" (for him, work was life, and
              life was work.)
            </p>
            <p>
              I always responded with a new answer. One day, I wanted to be
              astraunaut. Another day, I wanted to be a pirat, a king or an
              actor. Another day, I wanted to be a rockstar, or a painter.
            </p>
            <p>
              Actually, what I really wanted, was to
              <span> keep having dreams for ever.</span>
            </p>
            <p>Twenty one years after that, I am a web developer.</p>
            <p>
              You must ask yourself <span>why</span>?
            </p>
            <p>
              Because right now, <span>all the people's dreams are mine</span>.
              All they want to do in their lives, I can just{" "}
              <span>
                borrow their dreams, for an instant, and help them, to transform
                it into reality.
              </span>
            </p>
            <p>
              I have found the key, to take those imaginative fantasies, into
              the real world.
            </p>
            <p>
              Through those lines of code, I can <span>crystalize ideas</span>,
              I can <span>sell products</span>, I can make people{" "}
              <span>live out of their passions</span>.
            </p>

            <p>
              In my hand, I have the golden mine, the{" "}
              <span>superpower I always wanted.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoAmI;

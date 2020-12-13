import React, { Suspense, useEffect, useRef, useState } from "react";

import "./Services.scss";
import Header from "./header";
import { motion } from "framer-motion";
import { Lights, HTMLContent } from "./Three";
import state from "./state";
import { Canvas } from "react-three-fiber";
import { SellThisPen } from "./SellThisPen";
import Modal from "./Modal";

function Services() {
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => {
    state.top.current = e.target.scrollTop;
  };
  const [showModal, setShowModal] = useState(false);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <Canvas colorManagement camera={{ position: [150, 0, 100], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            modelPath="/brand/scene.gltf"
            positionY={175}
            positionX={-55}
            bgColor={"#f9d423"}
            scale={[15, 15, 15]}
          >
            <motion.section
              className="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div class="header__text-wrapper">
                <h1 class="punchline">
                  I want big <span class="hitters">ideas</span>
                  <br />
                  to be heard, <br />
                  and good <span class="hitters">products</span> <br />
                  to be sold.
                </h1>
              </div>
            </motion.section>
          </HTMLContent>

          <HTMLContent
            domContent={domContent}
            modelPath="/shopping/scene.gltf"
            positionY={-250}
            positionX={100}
            meshY={500}
            bgColor={"#E71D36"}
          >
            <section class="powers">
              <div className="ul">
                <motion.div
                  whileHover={{
                    x: 10,
                  }}
                  className="li"
                >
                  UI/UX Design
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 10,
                  }}
                  className="li"
                >
                  Web Development
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 10,
                  }}
                  className="li"
                >
                  Brand Identity
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 10,
                  }}
                  className="li"
                >
                  Design Sprints
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 10,
                  }}
                  className="li"
                >
                  Digital Marketing
                </motion.div>
              </div>
            </section>
          </HTMLContent>

          <HTMLContent
            domContent={domContent}
            modelPath="/shopping/scene.gltf"
            positionY={-600}
            positionX={100}
            meshY={500}
            bgColor={"#2EC4B6"}
          >
            <h1 className="title strike">I don't just build shops.</h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/ferrari2/scene.gltf"
            positionY={-900}
            positionX={-55}
            bgColor={"#f9d423"}
            scale={[0.5, 0.5, 0.5]}
          >
            <h1 className="title">
              I design <span className="exp">experiences.</span>
            </h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/camera/scene.gltf"
            positionY={-1200}
            positionX={-55}
            bgColor={"#2ec4b6"}
            scale={[0.5, 0.5, 0.5]}
          >
            <section class="revolution">
              <div class="thenumericrevolution">
                <h2 class="first">
                  The{" "}
                  <span style={{ color: "#befbff" }}>Numeric Revolution</span>{" "}
                  knocks.
                </h2>
              </div>
            </section>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/dollar/scene.gltf"
            positionY={-1550}
            positionX={-55}
            bgColor={"#218380"}
            scale={[30, 30, 30]}
          >
            <div className="buttons">
              <h1 className="title">
                Let's 10X your business,{" "}
                <span className="together">together.</span>
              </h1>

              <div
                className="button button3"
                onClick={() => setShowModal(!showModal)}
              >
                <h2 className="contact-me">
                  <span>Book a free consultation</span>
                </h2>
              </div>
            </div>
          </HTMLContent>
        </Suspense>
      </Canvas>

      <div ref={scrollArea} className="scrollArea" onScroll={onScroll}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
        <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div>
    </>
  );
}

export default Services;

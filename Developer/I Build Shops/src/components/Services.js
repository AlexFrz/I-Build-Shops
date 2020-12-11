import React, { Suspense, useEffect, useRef } from "react";

import "./Services.scss";
import Header from "./header";
import { motion } from "framer-motion";
import { Lights, Model, HTMLContent } from "./Three";
import state from "./state";
import { Canvas, useFrame } from "react-three-fiber";

function Services() {
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => {
    state.top.current = e.target.scrollTop;
  };

  return (
    <>
      <Header />

      <Canvas colorManagement camera={{ position: [150, 0, 100], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            modelPath="/brand/scene.gltf"
            positionY={250}
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
            positionY={-150}
            positionX={100}
            meshY={500}
            bgColor={"#E71D36"}
          >
            <section class="powers">
              <div className="ul">
                <div className="li">UI/UX Design</div>
                <div className="li">Web Development</div>
                <div className="li">Brand Identity</div>
                <div className="li">Design Sprints</div>
                <div className="li">Digital Marketing</div>
              </div>
            </section>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/camera/scene.gltf"
            positionY={-450}
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
                <h2 class="first">Two possible choices:</h2>
                <h2 class="first">
                  <span className="hitters">10X</span>, or{" "}
                  <span className="smoke">die</span>.
                </h2>
              </div>
            </section>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/dollar/scene.gltf"
            positionY={-800}
            positionX={-55}
            bgColor={"#218380"}
            scale={[30, 30, 30]}
          >
            <div className="block">
              <h1 className="title">
                Let's 10X <br /> your business,{" "}
                <div className="together">together.</div>
              </h1>
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

// <section class="business">
// <div className="business__texts">
//   <div class="first">
//     <div class="business__text1">
//       <h2>
//         Your website should <br />
//         turn visitors into <br />
//         <span>engaged</span> <span class="span2">customers</span>.
//       </h2>
//     </div>
//   </div>
//   <div class="second">
//     <div class="business__text2">
//       <h2>
//         It’s like having a top <br />
//         sales rep working
//       </h2>
//     </div>
//     <h2>
//       <span>
//         24 hours a day,
//         <br />7 days a week.
//       </span>
//     </h2>
//   </div>
// </div>

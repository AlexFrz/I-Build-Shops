import React, { Suspense, useEffect, useRef } from "react";
import "./SellThisPen.scss";

import { Canvas } from "react-three-fiber";

// Page State
import state from "./state";

// Intersection observer

import Header from "./header";

import { Lights, HTMLContent } from "./Three";

export default function SellThisPen() {
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => {
    state.top.current = e.target.scrollTop;
  };

  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      <Header buttonColor="transparent" />
      <Canvas colorManagement camera={{ position: [150, 0, 100], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            modelPath="/pen/scene.gltf"
            positionY={250}
            positionX={-55}
            bgColor={"#E71D36"}
            scale={[5, 5, 5]}
          >
            <h1 className="title">Sell me this pen.</h1>
          </HTMLContent>

          <HTMLContent
            domContent={domContent}
            modelPath="/shopping/scene.gltf"
            positionY={-150}
            positionX={100}
            meshY={500}
            bgColor={"#2EC4B6"}
          >
            <h1 className="title strike">I don't just build shops.</h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/ferrari2/scene.gltf"
            positionY={-450}
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
            modelPath="/ferrari/scene.gltf"
            positionY={-900}
            positionX={-55}
            bgColor={"#218380"}
            scale={[0, 0, 0]}
          >
            <h1 className="title">
              Let's walk, <div className="together">together.</div>
            </h1>
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

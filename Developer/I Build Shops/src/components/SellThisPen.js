import React, { Suspense, useEffect, useRef } from "react";
import "./SellThisPen.scss";

import { Section } from "./section";
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useGLTFLoader } from "drei";
import { spotLight } from "three";
import { motion, useViewportScroll, useTransform } from "framer-motion";

// Page State
import state from "./state";

// Intersection observer
import { useInView } from "react-intersection-observer";
import Header from "./header";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  transition: {
    type: "spring",
    delay: 0.5,
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Model = ({ modelPath }) => {
  const gltf = useGLTFLoader(modelPath, true);

  return <primitive object={gltf.scene} dispose={null} />;
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <directionalLight position={[-20, 20, 0]} intensity={1.5} />
      <spotLight intensity={1} position={[1000, 20, 0]} />
    </>
  );
};

const HTMLContent = ({
  bgColor,
  domContent,
  children,
  modelPath,
  positionY,
  positionX,
  meshY,
  scale,
}) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));
  const [refItem, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    inView && (document.body.style.background = bgColor);
  }, [inView]);
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh
          ref={ref}
          position={[meshY ? meshY : 0, positionX, 0]}
          scale={scale}
        >
          <Model modelPath={modelPath} />
        </mesh>
        <Html portal={domContent} fullscreen>
          <motion.div
            className="container"
            ref={refItem}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        </Html>
      </group>
    </Section>
  );
};

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
            <h1 className="title">I design experiences.</h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/armchairYellow.gltf"
            positionY={-800}
            positionX={-55}
            bgColor={"#218380"}
            scale={[0, 0, 0]}
          >
            <div className="block">
              <h1 className="title">
                Let's walk, <div className="together">together.</div>
              </h1>

              <motion.div
                className="contactme"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255, 255, 255)",
                  boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                }}
              >
                <h1>Contact Me</h1>
              </motion.div>
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

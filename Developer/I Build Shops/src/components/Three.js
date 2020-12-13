import React, { Suspense, useEffect, useRef } from "react";
import { Html, useGLTFLoader } from "drei";
import { spotLight } from "three";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Section } from "./section";
import { useFrame } from "react-three-fiber";
import { useInView } from "react-intersection-observer";

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

export const Model = ({ modelPath }) => {
  const gltf = useGLTFLoader(modelPath, true);

  return <primitive object={gltf.scene} dispose={null} />;
};

export const Lights = () => {
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

export const HTMLContent = ({
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

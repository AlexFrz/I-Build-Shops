import React, { useState } from "react";
import "./Works.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { projects } from "../projects.json";
import Header from "./header";
import { motion } from "framer-motion";

function Works() {
  const [works, setWorks] = useState(projects);

  const renderWorks = works.map((work) => (
    <SwiperSlide>
      <div className="works__swiper-slide">
        <div
          className="works__slide-img"
          style={{
            background:
              "url(" +
              require("../images/projects/" + work.image) +
              ") top center / cover no-repeat",
          }}
        >
          <div class="works__slide-text">
            <h4>
              <span>{work.title}</span>
            </h4>
          </div>
        </div>
        <div className="works__slide-number">
          <p>
            <span>{work.id}</span>
          </p>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Header buttonColor="transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="works"
      >
        <div className="container">
          <Swiper
            spaceBetween={150}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {renderWorks}
          </Swiper>
        </div>
      </motion.div>
    </>
  );
}

export default Works;

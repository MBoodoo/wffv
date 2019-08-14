import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll,  } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import useInterval from "../effects/useInterval";
import { homeImages, screenings } from "../data";
import { _khaki } from "../theme"

import HomeInfo from "./HomeInfo"

const variants = {
  enter: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default () => {
  const { scrollY, scrollYProgress } = useViewportScroll()
  
  useInterval(() => {
    paginate(1);
  }, 4000);

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, homeImages.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Container>
      <HomeInfo />
      <AnimatePresence initial={false} custom={direction}>
        <Image
          key={page}
          src={homeImages[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.75 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
         /* onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }} */
        />
      </AnimatePresence>

      

      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </Container>
  );
};

//////////////////////////////////////////////
const Container = styled(motion.section)`
  height: 100vh;
  width: 100%;

  background: #ff8360;
  position: relative;

  overflow: hidden !important;
`;

const Image = styled(motion.img)`
  width: 100%;
  position: absolute;
  //background-attachment: fixed !important;
`;
//////////////////////////////////////

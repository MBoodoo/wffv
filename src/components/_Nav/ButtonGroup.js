import React, { useEffect } from "react";

import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll
} from "framer-motion";
import { _yellow, _khaki } from "../../theme";
//import { useMousePos } from "../../effects/useMousePos";

//import { useStaticQuery, graphql } from "gatsby"

////////////////////////////

const variants = {};

///////////////////////////

export default ({ children }) => {
  const { scrollYProgress } = useViewportScroll();
  const background = useTransform(scrollYProgress, [0, 1], [_yellow, _khaki]);
  useEffect(() => {
    scrollYProgress.onChange(val => console.log(val))
  }, [scrollYProgress])

  return <ButtonGroup style={{ background }}>{children}</ButtonGroup>;
};

///////////////////////////

const ButtonGroup = styled(motion.div)`
  display: flex;
  justify-content: ${({ justify }) => justify || "space-between"};
  flex: 1;
  height: 3em;
  position: fixed;

  margin-top: 0;
  top: 0;

  width: 100vw;
  z-index: 99;

  border: 2px solid black;
`;

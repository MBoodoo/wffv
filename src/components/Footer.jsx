import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default () => {
  return <Container />;
};

const Container = styled(motion.section)`
  height: 10em;
  width: 100vw;

  background: #5a5a66;

  border: 2px solid black;
  scroll-snap-align: end;

  // max-height: 45em;
`;

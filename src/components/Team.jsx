import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { members } from "../data";
import { _blue, _khaki, _yellow} from "../theme"

export default () => {
  let team = members.map(member => {
    return (
      <MemberContainer>
        <Name>{member.name}</Name>
        <Title>{member.title}</Title>
        <Preview>{member.preview}</Preview>
        <Image image={member.img1} />
      </MemberContainer>
    );
  });

  return <GridContainer>{team}</GridContainer>;
};

const GridContainer = styled(motion.section)`
  height: 770px;
  max-height: 1000px;
  width: 100%;

  background: ${_blue};
  color: ${_khaki};

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.75em;

  overflow-x: auto;

  // max-height: 45em;
`;

const MemberContainer = styled(motion.div)`
  margin: 3em;
  padding: 1.8em;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  transform: translateX(-1em);

  position: relative;
  & > * {
  }
`;
const Name = styled(motion.h2)`
  place-self: start start;
  margin-top: none;
  font-family: "Alegreya Sans";
  font-size: 36px;
  letter-spacing: 2px;
  z-index: 99;
`;
const Title = styled(motion.h3)`
  transform: translate(-1.5em, -1.5em);
  font-family: "Merriweather";
  font-size: 16px;
  letter-spacing: 2px;
  width: 50%;
  z-index: 99;
  color: ${_yellow};
`;
const Preview = styled(motion.div)`
  padding: 1em;
  width: 75%;
  position: absolute;
  left: -7%;
  top: 30%;

  font-size: 18px;
  line-height: 30px;

  font-family: "Open Sans";
  z-index: 99;
`;
const Image = styled(motion.div)`
  position: absolute;
  right: -16%;
  top: -5%;
  width: 60%;
  height: 120%;
  margin-right: 1em;
  background: url("${({ image }) => image}");
  background-size: cover;

  border: 1px solid black
`;

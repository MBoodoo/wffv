import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import useMedia from "../effects/useMedia"

import { missionText, missionTitle } from "../data";
import { _khaki } from "../theme"
/// DATA WILL BE "SELECTED" VIA REDUX OR GRAPHQL!!!!!!!!!

export default () => {

  const width = useMedia(["(max-width: 1050px)"], ["97vw"], "auto")
  
  return (
    <Container>
      <Info>
        <Mission style={{ width }}>
          <MissionTitle> {missionTitle} </MissionTitle>
          <MissionText> {missionText} </MissionText>
        </Mission>
      </Info>

      <Main>
        <VideoContainer style={{ width }} >
          <iframe
            title="Walking for Freedom Venezuela"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/g381U6AuynA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </VideoContainer>
        {/*<Experience>A completely immersive VR experience</Experience>*/}
      </Main>
    </Container>
  );
};

const Container = styled(motion.section)`
  height: 100vh;
  width: 100%;
  position: relative;

  background: ${_khaki};

  display: flex;
  flex-wrap: wrap;
  & > * {
    min-width: 27em;
  }

  // max-height: 45em;

`;

const Info = styled(motion.div)`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  max-height: 40em;

  & > * {
    margin: 1em;
  }
`;

const Mission = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-self: center;
  margin-right: auto;

  padding-bottom: 0;
  position: relative;
`;

const MissionTitle = styled(motion.h2)`
  font-family: "Alegreya Sans";
  letter-spacing: 2px;
  font-size: 42px;
  margin-bottom: 1em;
  text-transform: uppercase;
`;

const MissionText = styled(motion.div)`
  font-family: "Merriweather";
  width: 100%;
  height: 100%;
  padding: 2em;
  padding-top: 1em;
  padding-left: 0;
  padding-bottom: 0;
  line-height: 33px;
  font-size: 18px;
  transform: translateY(-2em);

  text-align: center;

  flex: 1;

  overflow: scroll;
`;
////////////////////////////////////////
const Main = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    
  }
`;

const VideoContainer = styled(motion.div)`
  flex: 0.7;

  width: 100%;
  min-height: 20em;
  max-height: 35em;
`;

//////////////////////////////////////
const Experience = styled(motion.div)`
  flex: 0.15;
  width: 100%;

  display: flex;
  place-content: center center;
  align-items: center;
  font-size: 26px;
  font-family: "Open Sans";
`;

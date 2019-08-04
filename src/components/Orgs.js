import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MycromLogo from "../images/MycromLogo.png"
import PlanPaisLogo from "../images/PlanPaisLogo.png"
import Global_Shapers_Logo from "../images/Global_Shapers_Logo.png"

import { _khaki } from "../theme"

// Change vh height to something responsive
export default () => {
  return  <Container>
            <Org>
              <Image url={MycromLogo} style={{scale: 3}}/>
            </Org>
            <Org>
              <Image url={PlanPaisLogo} />
            </Org>
            <Org>
              <Image url={Global_Shapers_Logo} />
            </Org>
          </Container>
};

const Container = styled(motion.section)`
  height: 50vh;
  width: 100%;

  background: ${_khaki};

  overflow: hidden;

  scroll-snap-align: end;
  padding: 2em;
  display: flex;
  position: relative;
  & > * {
    
  }

  // max-height: 45em;
`;

const Org = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;

`
const Image = styled(motion.div)`
  background: url('${({url}) => url}') no-repeat;
  background-size: 60%;
  background-position: center;
  width: 90%;
  height: 90%;

`
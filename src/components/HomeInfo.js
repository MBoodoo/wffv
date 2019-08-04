import React from "react"

import styled from "styled-components"
import { motion, useMotionValue  } from "framer-motion"

import { _yellow, _blue, _carmine, _khaki } from "../theme"
import { screenings, mainTitle, mainTagline } from "../data";

export default () => {

    let allScreenings = screenings.map(({ date, location, url }) => {
        return (
          <Screening>
            <Date>{date}</Date>
            <Location>{location}</Location>
            <TicketBtn href={url}> Get your Ticket</TicketBtn>
          </Screening>
        );
      });

    return  <Container>
                <Title>
                    {mainTitle}
                    <Tagline>{mainTagline}</Tagline>
                </Title>
                <BtnGroup>
                   <Btn>Make a Donation</Btn>
                   <Btn>Schedule a Screening</Btn>
                </BtnGroup>
                <Screenings>
                    <h3>Upcoming Screenings:</h3>
                    {allScreenings}
                </Screenings>
            </Container>
}

const Container = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 80%;
    bottom: 0;
    z-index: 999;

    padding: .1em;
   
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    color: white;
    overflow: scroll;

    & > * {
        
    }


`
///////////////////////////////////////
const Title = styled(motion.div)`
    width: 80%;
    height: 2em;
    padding: .2em;
    text-align: center;
    position: relative;
    line-height: 70px;
    font-size: 84px;
    font-family: "Alegreya Sans";
    letter-spacing: 5px;
    margin-bottom: .5em;
    position: relative;
    
`

const Tagline = styled(motion.div)`
    height: 2em;
    width: 60%;
    padding: .3em;

    position: absolute;

    text-align: center;
    right: 0;

    font-size: 22px;
    line-height: 25px;
    font-family: "Open Sans";
    letter-spacing: 0;
    font-style: italic;
`
const Btn = styled(motion.div)`
   
    
    text-align: center;
    font-family: "Open Sans";
    font-size: 17px;
    padding: 1em;
    background: ${_yellow};
    line-height: 10px;
    letter-spacing: 1px;
    color: ${_blue};
    border-radius: 2em;
    &:hover {
        cursor: pointer;
    }

`
const BtnGroup = styled(motion.div)`
    display: flex;
     width: 35em;
     height: 2.5em;
     margin-bottom: 1em;
  
    justify-content: center;
    & > * {
        margin: 0 1em;
    }
`

const ScheduleBtn = styled(motion.div)`
    width: 8em;
    height: 3em;
    text-align: center;
    font-family: "Merriweather";
    line-height: 35px;
    font-size: 22px;
    padding: .25em;
`
/////////////////////////////////

const Screenings = styled(motion.div)`
  flex: .4;
  width: 88%;
  padding: 2em;
  place-self: center;
  position: relative;

  display: flex;
  justify-content: center;
  z-index: 99;

  & > * {
    padding: 1em;
  }

  & > h3 {
    position: absolute;
    left: 5%;
    top: -12%;
    transform: translateY(-10%);
    color: ${_khaki};
    font-family: "Alegreya Sans";
    font-size: 32px;
    letter-spacing: 1px;
  }
`;



const Screening = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 22px;
  position: relative;
  flex: 1;
  background: inherit;
  overflow: hidden;
  border-radius: 1em;
  margin: .5em .2em;
  //background: rgba(219, 213, 181, .6);
  border: 2px solid ${_khaki};
  
  & > * {
      margin: .5em 0;
  }
`;

const Date = styled(motion.div)`
  font-family: "Open Sans";
  background: ${_carmine};
  z-index: 99;
  padding: .7em;
  position: absolute;
  left: 0;
  top: -9%;
  border-radius: 0 0 1em 0;


`;
const Location = styled(motion.div)`
  font-family: "Open Sans";
  width: 100%;
  transform: translateY(35%);
  color: ${_khaki};
  font-size: 28px;
  line-height: 34px;
 
`;
const TicketBtn = styled(motion.a)`
  font-family: "Alegreya Sans";
  text-decoration: none;
  color: white;
  font-size: 22px;
  letter-spacing: 1px;
  margin: 1em;
  color: ${_khaki};
  border: 2px solid ${_yellow};
  width: 50%;
  place-self: center;
  

`;

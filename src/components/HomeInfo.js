import React, { useState } from "react"

import styled from "styled-components"
import { motion, useMotionValue  } from "framer-motion"
import ScreeningModal from "./ScreeningModal";

import { _yellow, _blue, _carmine, _khaki } from "../theme"
import { screenings, mainTitle, mainTagline } from "../data";

export default () => {
    const [isModalOpen, openModal] = useState(false)


    let allScreenings = screenings.map(({ date, location, url }) => {
        return (
          <Screening>
            <Wrapper>
              <Date>{date}</Date>
              <TicketBtn href={url}> Get Ticket</TicketBtn>
            </Wrapper>
            <Location>{location}</Location>
          </Screening>
        );
      });

    return  <Container>
                 <ScreeningModal isVisible={isModalOpen}/>
                
                <Title>
                    {mainTitle}
                    <Tagline>{mainTagline}</Tagline>
                </Title>
                <BtnGroup>
                   <Btn>Make a Donation</Btn>
                   <Btn onClick={() => console.log("Works")}>Schedule a Screening</Btn>
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
        margin: 10vh 0;
    }


`
///////////////////////////////////////
const Title = styled(motion.div)`
    width: 90%;
    height: 2em;
    padding: .2em;
    text-align: center;
    position: relative;

    line-height: 95%;
    font-size: calc(2em + 4.3vw);

    font-family: "Alegreya Sans";
    letter-spacing: 5px;
    margin-bottom: 2em;
    position: relative;
    margin: 0;
    
`

const Tagline = styled(motion.div)`
    height: 2em;
    width: 90%;
    padding: .3em;

    position: absolute;

    text-align: center;
    right: 0;

    font-size: calc(.2em + .9vw);
    line-height: 25px;
    font-family: "Open Sans";
    letter-spacing: 0;
    font-style: italic;
    
`
const Btn = styled(motion.div)`
    text-align: center;
    font-family: "Open Sans";
    font-size: 17px;
    padding: calc(.5em + 1vw);
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
    flex-wrap: wrap;
     width: 90%;
     height: 2.5em;
     margin-bottom: 3em;
     
  
    justify-content: center;
    & > * {
        margin: .6em 1em;
    }
  
`

const ScheduleBtn = styled(motion.div)`
    width: 30%;
    max-height: 3em;
    height:
    text-align: center;
    font-family: "Merriweather";
    line-height: 35px;
    font-size: 22px;
    padding: .25em;
`
/////////////////////////////////

const Screenings = styled(motion.div)`
  flex: .4;
  width: 83%;
  padding: 2em;
  place-self: center;
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 99;

  & > h3 {
    position: absolute;
    left: 5%;
    top: -5%;
    transform: translateY(-5%);
    color: ${_khaki};
    font-family: "Alegreya Sans";
    font-size: 32px;
    letter-spacing: 1px;
  }
`;



const Screening = styled(motion.div)`
  flex: 1;  
  min-width: 320px;
  max-width: 500px;
  text-align: center;
  display: flex;
  justify-content: center;
  line-height: 22px;
  position: relative;

  overflow: hidden;
  margin: .5em .2em;
  background: ${_blue};

  & > * {
    
  }


`;
////////////////////////////////////
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${_carmine};
  heighr: 100%;
  
  & > * {
   
  }

`

const Date = styled(motion.div)`
  font-family: "Open Sans";
  background: inherit;
  z-index: 99;
  padding: .5em;
  font-size: 22px;
  line-height: 25px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const TicketBtn = styled.a`
  display: inline-block;
  font-family: "Open Sans";
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
 
  color: ${_khaki};
  background: ${_carmine};
  padding: .4em;
  margin: 25%;
  width: 150%;

 

  letter-spacing: 1px;
  border-radius: 2em;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  

`;

/////////////////////////////////////
const Location = styled(motion.div)`
  font-family: "Alegreya Sans";
  text-align: right;

  z-index: 5;
  width: 100%;
  color: ${_khaki};
  font-size: 28px;
  line-height: 30px;
 
  place-self: start;
  margin-top: 0;
  padding: .75em;
  /*
  text-shadow: 1px 1px rgb(0,87,95),
  2px 2px rgb(0,87,95),
  3px 3px rgb(0,87,95),
  4px 4px rgb(0,87,95),
  5px 5px rgb(0,87,95),
  6px 6px rgb(0,87,95),
  7px 7px rgb(0,87,95),
  8px 8px rgb(0,87,95),
  9px 9px rgb(0,87,95),
  10px 10px rgb(0,87,95),
  11px 11px rgb(0,87,95),
  12px 12px rgb(0,87,95),
  13px 13px rgb(0,87,95),
  14px 14px rgb(0,87,95),
  15px 15px rgb(0,87,95),
  16px 16px rgb(0,87,95),
  17px 17px rgb(0,87,95),
  18px 18px rgb(0,87,95),
  19px 19px rgb(0,87,95),
  20px 20px rgb(0,87,95),
  21px 21px rgb(0,87,95),
  22px 22px rgb(0,87,95),
  23px 23px rgb(0,87,95),
  24px 24px rgb(0,87,95),
  25px 25px rgb(0,87,95),
  26px 26px rgb(0,87,95),
  27px 27px rgb(0,87,95),
  28px 28px rgb(0,87,95),
  29px 29px rgb(0,87,95),
  30px 30px rgb(0,87,95),
  31px 31px rgb(0,87,95),
  32px 32px rgb(0,87,95),
  33px 33px rgb(0,87,95),
  34px 34px rgb(0,87,95),
  35px 35px rgb(0,87,95),
  36px 36px rgb(0,87,95),
  37px 37px rgb(0,87,95),
  38px 38px rgb(0,87,95),
  39px 39px rgb(0,87,95),
  40px 40px rgb(0,87,95),
  41px 41px rgb(0,87,95),
  42px 42px rgb(0,87,95),
  43px 43px rgb(0,87,95),
  44px 44px rgb(0,87,95),
  45px 45px rgb(0,87,95),
  46px 46px rgb(0,87,95),
  47px 47px rgb(0,87,95),
  48px 48px rgb(0,87,95);
*/

`;
const ScreeningsBtn = styled.div`
  font-size: 22px;
  font-family: 'Open Sans';
  color: ${_khaki};

  z-index: 99;
  position: absolute;

  top: -5%;
  right: 0;

  &:hover {
    cursor: pointer;
  }

`

const LearnMore = styled.div`


`
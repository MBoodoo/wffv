import React from "react"

import styled from "styled-components"
import { motion, useMotionValue  } from "framer-motion"

import { _homeImageURL, _yellow, _carmine, _blue } from "../theme"

export default () => {
    return (
        <Container>
          <Title>Contact Us</Title>
          <Form method="POST" data-netlify="true">
      
            <label for="fname"> Name </label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            
            <label for="email">Email</label>
            <input type="text" id="lname" name="lastname" placeholder="Your email.." />
        
            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          
          <Wrapper>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>
          </Wrapper>
          <input type="submit" value="Submit" />
      
        </Form>
      </Container> 
    )
}

const Container = styled(motion.div)`
    border-radius: 5px;
    background: ${_carmine};
    padding: 20px
    display: flex;
    flex-direction: column;
    padding: 1em;
    width: 100%;

    color: ${_blue};

`
const Title = styled.h3`
  place-self: center;
  font-size: 42px;
  font-family: 'Alegreya Sans';
  text-transform: uppercase;
  color: ${_blue};
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid black;
  place-items: center center;

  input {
    max-height: 2.8em;
    background: transparent;
    border: none;

  }
  label {
    place-self: start;
    margin-top: 0;
  }

  textarea {
    width: 50%;
    place-self: center;
    background: transparent;
  }

  & > * {
    margin: 2em 1em;
    border: 2px solid black;
  }

`

const Wrapper = styled.div`
  display: flex;
  place-items: center;
  & > * {
    place-self: center;
    border: 1px solid black;
  }
`

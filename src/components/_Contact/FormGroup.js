import React from "react"

import styled from "styled-components"
import { motion, useMotionValue  } from "framer-motion"

import { _homeImageURL, _yellow } from "../../theme"

export default () => {
    return (
        <Container>
        <form method="POST" data-netlify="true">
      
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
          
          <label for="email">Email</label>
          <input type="text" id="lname" name="lastname" placeholder="Your email.." />
      
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          
          
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>
      
          <input type="submit" value="Submit" />
      
        </form>
      </Container> 
    )
}

const Container = styled(motion.div)`
    border-radius: 5px;
    background: white;
    padding: 20px

`
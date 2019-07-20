import React from "react"

import styled from "styled-components"
import { motion, useMotionValue  } from "framer-motion"

import { _homeImageURL, _golden } from "../../theme"

export default () => {
    return (
        <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
}

const FormContainer = styled(motion.div)`


`

const Form = styled(motion.div)`
    

`

const Label = styled(motion.label)`

`

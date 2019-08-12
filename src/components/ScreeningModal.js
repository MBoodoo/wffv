import React, {useState} from "react"

import styled from "styled-components"
import { motion, useMotionValue, AnimatePresence } from "framer-motion"

import { _carmine } from "../theme"

export default ({isVisible}) => {
   return    <AnimatePresence>
                {isVisible && (
                    <Modal
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Form method="POST" data-netlify="true">
      
                            <label for="fname"> Name </label>
                            <input type="text" name="firstname" placeholder="Your name.."/>

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

                        </Form>
                    </Modal>
                )}
             </AnimatePresence>
}

const Modal = styled(motion.div)`
    width: 25em;
    height: 20em;
    position: absolute;
    
    background: ${_carmine};
    display: flex;

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
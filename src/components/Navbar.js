// import { ButtonList } from "personal-lib"
import React from "react";
import styled from "styled-components"

import { motion } from "framer-motion"
import { Link } from "gatsby"

import { font1, font2, font3, _golden } from "../theme.js"
/////////////////////////////////////////


// THIS WILL BE SELECTED FROM GRAPHQL -->
const pages = ["abou", "contact", "donate", "gallery", "screenings"]

////////////////////////////////
// For some reason gatsby's link styles are overwriting everything 
// so these are inline styles to inject:

const linkStyles = { textDecoration: `none`, color: `${_golden}` }

// See this link --> https://www.framer.com/api/motion/animation/#variants

const variants = {

     init: { 
        opacity: 0,
        y: 20
    },
    mounted: { 
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 20,
            staggerChildren: .45
        } 
    }
}

/////////////////////////////////

export default ({ sticky }) => {
    // Looping over pages (eventually selected from GraphQL) 
    // and mapping their Links to Buttons

    let links = pages.map((item, idx) => ( 
        <Button variants={variants} key={idx}>
            <Link style={{...linkStyles}} to={`/${item}/`}>{item}</Link>
        </Button>
        ) 
    )

    return  <NavContainer initial="init" animate="mounted" variants={variants}>
                { links }
            </NavContainer>
}

const NavContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    padding: 1em;  
    height: 3em;
    flex: 1;
    margin: ${({ spacing }) => spacing || ".2em 2em .2em 1em"};
`

const Button = styled(motion.div)`
    flex: 1;
    font-size: 18px;

    text-decoration: none;
    font-family: ${font1};
 

    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${_golden};
    text-align: center;
`
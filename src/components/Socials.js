// import { ButtonList } from "personal-lib"
// Replace all "width" props with "flex"
// Socials "implements" the type "ButtonGroup"

import React from "react";
import styled from "styled-components"

import { motion } from "framer-motion"
import { Link } from "gatsby"

import { font1, font2, font3, _golden } from "../theme.js"
/////////////////////////////////////////


// THIS WILL BE SELECTED FROM GRAPHQL -->

const socials = [
    {
        type: "twitter",
        icon: "",
        link: "https://twitter.com"
    },
    {
        type: "instagram",
        icon: "",
        link: "#"
    },
    {
        type: "facebook",
        icon: "",
        link: "#"
    },
    {
        type: "gofundme",
        icon: "",
        link: "#"
    },
    {
        type: "youtube",
        icon: "",
        link: "#"
    },
]

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
            staggerChildren: .45,
            staggerDirection: -1
        } 
    }
}

/////////////////////////////////

export default () => {
    // Looping over pages (eventually selected from GraphQL) 
    // and mapping their Links to Buttons

    let links = socials.map(({ icon, link }, idx) => ( 
        <Button variants={variants} key={idx}>
            <a href={link}>{icon}</a>
        </Button>
        ) 
    )

    return  <Container initial="init" animate="mounted" variants={variants}>
                { links }
            </Container>
}

const Container = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    padding: 1em .6em;  
    flex: .3;
    margin: ${({ spacing }) => spacing || ".2em 2em .2em 1em"};
`

const Button = styled(motion.div)`
    flex: 1/5;
    font-size: 18px;

    text-decoration: none;
    font-family: ${font1};
 
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${_golden};

    border: 1px solid black;

    text-align: center;

    padding: .3em;
    line-height: 1em;

    background: ${_golden}
`
// import { ButtonList } from "personal-lib"
import React from "react";
import styled from "styled-components"

import { motion, useCycle } from "framer-motion"
import { Link } from "gatsby"
import { MenuToggle } from "./MenuToggle"

import useMedia from "../../effects/useMedia"

import { font1, font2, font3, _yellow, _lavender } from "../../theme"
/////////////////////////////////////////


// THIS WILL BE SELECTED FROM GRAPHQL -->
const pages = ["Watch Trailer", "Our Team", "Contact Us", "Testimonials"]

////////////////////////////////
// For some reason gatsby's link styles are overwriting everything 
// so these are inline styles to inject:

const linkStyles = { textDecoration: `none`, color: `black` }

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
    const [isOpen, toggleOpen] = useCycle(false, true);

    const navDisplay = useMedia(['(max-width: 1200px'], ['none'], "flex")
    const isCollapsed = useMedia(['(max-width: 1200px'], [true], false)
    

    let links = pages.map((item, idx) => ( 
        <Button variants={variants} key={idx}>
            <Link style={{...linkStyles}} to={`/#${item.split(' ').join('')}`}>{item}</Link>
        </Button>
        ) 
    )

    return  isCollapsed ? 
                <MenuToggle toggle={() => toggleOpen()} /> :
                <NavContainer initial="init" animate="mounted" variants={variants} style={{display: navDisplay}}>
                    { links }
                </NavContainer>
}

const NavContainer = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    padding: .5em;  
    width: 5em;
    height: 3em;
    flex: 1;
    margin: ${({ spacing }) => spacing || ".2em 2em .2em 1em"};

`

const Button = styled(motion.div)`
    flex: 1;
    font-size: 16px;

    text-decoration: none;
    font-family: "Merriweather";
 
    //text-transform: uppercase;
    letter-spacing: 2px;
    color: ${_yellow};
    text-align: center;
    line-height: 30px; 
`
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useLayoutEffect } from "react"
import styled from "styled-components"
import { motion, useViewportScroll, useMotionValue, useTransform} from "framer-motion"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import useLockBodyScroll from "../effects/useLockBodyScroll"
import useMedia from "../effects/useMedia"

import ButtonGroup from "./_Nav/ButtonGroup"
import Navbar from "./_Nav/Navbar"
import Socials from "./_Nav/Socials"
import logoLink from "../images/gatsby-icon.png"

import "./layout.css"
import { _darkOrange, _blue, _yellow, _lavender } from "../theme"






const Layout = ({ children }) => {
  // useLayoutEffect() and querySelector to "SELECT" ranges
  // then useEffect() and scrollY.onChange() to set scroll based on range.

  const { scrollY, scrollYProgress } = useViewportScroll()

  const logoResponsive = useMedia(['(max-width: 1200px'], [{position: "absolute", right: "36vw"}], {position: "relative"})
  const background = useTransform(scrollYProgress, [0, .4, .65, 1], [_lavender, _lavender, _yellow, _yellow])
  const ranges = []
  /*
window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
/////////////////////////////

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   // General scroll to element function

const ScrollDemo = () => {

   const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)

   return (
   <> 
      <div ref={myRef}>I wanna be seen</div> 
      <button onClick={executeScroll}> Click to scroll </button> 
   </>
)
}
  */
  useLayoutEffect(() => {
    let sections = document.getElementsByTagName("section")
    for (let section of sections) {
      ranges.push(section.getBoundingClientRect().top)
    }
  })

  useEffect(() => {
    scrollY.onChange(val => {
    
    })
  }, [scrollY])

  
  
  //scrollY.onChange(val => val >= 670 ? useLockBodyScroll() : val)

  // Get (scrollTop from rect top, scrollTop from rect bottom) of the children of layout
  // Create list of ranges from the scrollTop values
  // If current scroll is in a range, scroll to the "scrollTop + padding" w/ scrollTo


  return (
    <>
      <ButtonGroup>
        <Logo src={logoLink} initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{mass: 100, damping: 100, delay: .45}} style={{...logoResponsive}} />
        <Navbar />
        <Socials />
      </ButtonGroup>
      
        <FlexContainer style={{background}}>{ children }</FlexContainer>
    </>
  )
}

const Footer = styled(motion.footer)`

`

const FlexContainer = styled(motion.article)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: auto;
  position: absolute;

  flex-direction: column;
  margin-top: 0;

  border: 2px solid black;
  & > * {
    
    flex: none;
    overflow: scroll;
  }
`;
const Logo = styled(motion.img)`

  width: calc(22vw + 1em);

  flex: .35;
  height: 6em;


  background-size: cover;

  z-index: 25;



  margin: .9em;

  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  justify-self: center;

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout

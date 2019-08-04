/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import styled from "styled-components"
import { motion, useViewportScroll, useMotionValue, useTransform} from "framer-motion"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import useLockBodyScroll from "../effects/useLockBodyScroll"

import ButtonGroup from "./_Nav/ButtonGroup"
import Navbar from "./_Nav/Navbar"
import Socials from "./_Nav/Socials"
import logoLink from "../images/gatsby-icon.png"

import "./layout.css"
import { _darkOrange, _blue, _yellow, _lavender } from "../theme"

const Layout = ({ children }) => {

  const { scrollY, scrollYProgress } = useViewportScroll()
  const background = useTransform(scrollYProgress, [0, .4, .65, 1], [_lavender, _lavender, _yellow, _yellow])
  //scrollY.onChange(val => val >= 670 ? useLockBodyScroll() : val)
  useEffect(() => {
    
  })

  return (
    <>
      <ButtonGroup>
        <Logo src={logoLink} initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{mass: 100, damping: 100, delay: .45}} />
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
  height: 100vh;
  position: absolute;

  flex-direction: column;

  scroll-snap-type: y proximity;
  overflow-y: scroll;
  scroll-padding-top: 2em;
  margin-top: 1em;

  border: 2px solid black;
  & > * {
    scroll-snap-align: start;
    flex: none;
    overflow: scroll;
  }
`;
const Logo = styled(motion.img)`

 // width: 10em;

  flex: .35;
  height: 6em;


  background-size: cover;

  z-index: 25;

  position: relative;

  margin: .4em;

  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout

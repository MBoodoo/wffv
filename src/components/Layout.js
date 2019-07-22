/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { motion, useViewportScroll, useMotionValue, useTransform} from "framer-motion"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import ButtonGroup from "./_Nav/ButtonGroup"
import Navbar from "./_Nav/Navbar"
import Socials from "./_Nav/Socials"

import "./layout.css"
import { _darkOrange, _blue, _yellow } from "../theme"

const Layout = ({ children }) => {

  const { scrollY, scrollYProgress } = useViewportScroll()
  const background = useTransform(scrollYProgress, [0, .4, .65, 1], [_yellow, _yellow, _blue, _blue])

  return (
    <>
      <ButtonGroup>
        <Navbar />
        <Socials />

      </ButtonGroup>
      
        <Main style={{background}}>{ children }</Main>
        <Footer style={{background}}>
          © {new Date().getFullYear()} Venezuela Walk of Freedom
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
    </>
  )
}

const Footer = styled(motion.footer)`

`

const Main = styled(motion.main)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;


`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout

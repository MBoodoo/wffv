/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import ButtonGroup from "./_Nav/ButtonGroup"
import Navbar from "./_Nav/Navbar"
import Socials from "./_Nav/Socials"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ButtonGroup>
        <Navbar />
        <Socials />

      </ButtonGroup>
      
        <Main>{ children }</Main>
        <footer>
          © {new Date().getFullYear()} Venezuela Walk of Freedom
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </>
  )
}

const Main = styled(motion.main)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React, { useEffect, useState } from "react"

import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Home from "../components/Home"
import Orgs from "../components/Orgs"
import Trailer from "../components/Trailer"
import Team from "../components/Team"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

// Adding Parallax using framer-motion's useViewportScroll() hook

const IndexPage = () => {
 

  return (
    <Layout>
      <SEO title="Walking For Freedom" />
      <Home/>
      <Orgs />
      <Trailer />
      <Team />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage


///////////// SCROLL COMPONENT

import React, { useEffect, useState } from "react"

import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import FullPageImage from "../components/_Main/FullPageImage"
import FullPageVideo from "../components/_Main/FullPageVideo"
import Credits from "../components/_Main/Credits"
import Orgs from "../components/_Main/Orgs"

// Adding Parallax using framer-motion's useViewportScroll() hook

const IndexPage = () => {
 

  return (
    <Layout>
      <SEO title="Walking For Freedom" />
 
      <FullPageImage />
      <FullPageVideo />
      <Credits />
      <Orgs />

    </Layout>
  )
}

export default IndexPage


///////////// SCROLL COMPONENT

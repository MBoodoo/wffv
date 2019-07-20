import React, { useEffect, useState } from "react"
import { motion, useViewportScroll, useMotionValue } from "framer-motion"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import FullPageImage from "../components/_Main/FullPageImage"
import FullPageVideo from "../components/_Main/FullPageVideo"

// Adding Parallax using framer-motion's useViewportScroll() hook

const IndexPage = () => {
  
  return (
    <Layout>
      <SEO title="Home" />
 
      <FullPageImage />
      <FullPageVideo />

    </Layout>
  )
}

export default IndexPage


///////////// SCROLL COMPONENT

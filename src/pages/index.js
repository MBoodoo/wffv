import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import FullPageImage from "../components/FullPageImage"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <FullPageImage />
    
  </Layout>
)

export default IndexPage

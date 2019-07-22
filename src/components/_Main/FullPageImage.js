import React, { useEffect } from "react"

import styled from "styled-components"
import { motion, useMotionValue, useViewportScroll, useTransform, useCycle } from "framer-motion"

import { _homeImageURL, _yellow } from "../../theme"
//import { backgroundType } from "personal library"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/////////////////////////////////////
// See this link --> https://www.framer.com/api/motion/animation/#variants
/*
const variants = {
    init: { backgroundSize: "100 },
    mounted: { backgroundSize: "100% 10%", opacity: 1 },
    hover: { },

    transition: {
        
    }
}
*/
///////////////////////////////////

export default () => {

    // SELECTING IMAGE FROM GRAPHQL (BACKEND): 
    // See this link --> https://www.gatsbyjs.org/docs/use-static-query/
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    
    const { scrollY, scrollYProgress } = useViewportScroll()
    const y = useTransform(scrollY, val => val * -.6 )
    const scale = useTransform(scrollYProgress, [0, 1], [1, .32]) || 1

   // const angle = useTransform(scrollYProgress, [0, 1], [0, 45])
    useEffect(() => scrollY.onChange(val => console.log(val)), [scrollY])
    useEffect(() => {})

    const gridSizes = [
        {gridColumn: "1/3"}, 
        {gridRow: "1/3"}, 
        {gridRow: "2/4", gridColumn: "1/2", y: y + 600, x: + 5}, 
        {gridColumn: "2/3"}, 
        {gridColumn: "2/4"}
      ]
    const transitions = [
        {type: "spring", mass: .1}, 
        {type: "spring", mass: 2}, 
        {type: "spring", mass: 20}, 
        {type: "spring", mass: .9}, 
        {type: "spring", mass: .2}
    ]

    let imageSegments = [0, 1, 2, 3, 4].map(item => <BackgroundImg key={item} transition={{...transitions[item]}} animate={{ scale: [1.4, 1.05]}} style={{scale, y, ...gridSizes[item]}}/>)
    

    // See this link --> https://gatsby.dev/gatsby-image
    const lazyLoadImage = <Img fluid={ data.placeholderImage.childImageSharp.fluid } />

    const image = <BgContainer animate={{gridGap: [0, 0, "2em", "2em", "2em", 0]}} transition={{loop: Infinity}} >
                    {imageSegments}
                  </BgContainer>

    return image || lazyLoadImage
}

// STYLES

const BackgroundImg = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${_yellow};

  background-image: url(${_homeImageURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

const BgContainer = styled(motion.div)`
  position: realtive;
  //transform: translateY(-5em);

  z-index: 1;
  height: 100vh;
  width: 100vw;

  overflow: hidden

  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-template-rows: 3fr 3fr 3fr;
  grid-auto-flow: column;

`;

import React from "react"

import styled from "styled-components"
import { motion, useMotionValue  } from "framer-motion"

import { _homeImageURL, _golden } from "../theme"
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

    // See this link --> https://gatsby.dev/gatsby-image
    const lazyLoadImage = <Img fluid={ data.placeholderImage.childImageSharp.fluid } />

    const image = <BgContainer>
                    <BackgroundImg 
                        //initial="init"
                        animate={{ scale: [1.4, 1.05]}}
                       // transition={{delay: .5}} 
                        //variants={variants} 
                        style={{scale: 1}}
                    />
                </BgContainer>

    return image || lazyLoadImage
}

// STYLES

const BackgroundImg = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${_golden};

  background-image: url(${_homeImageURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

const BgContainer = styled(motion.div)`
  position: relative;
  transform: translateY(-5em);

  z-index: -99;
  height: 100vh;
  width: 100vw;

  overflow: hidden
`;

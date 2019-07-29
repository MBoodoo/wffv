// FullPageImgage "implements" custom masonry grid Carousel

import React, { useState, useEffect } from "react"

import { wrap } from "@popmotion/popcorn"
import styled from "styled-components"
import {  motion, 
          useMotionValue, 
          useViewportScroll, 
          useTransform,
          AnimatePresence, 
          useAnimation, 
          useCycle 
        } from "framer-motion"
import useInterval from "../../effects/useInterval"

import { _homeImageURL, _yellow } from "../../theme"
//import { backgroundType } from "personal library"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import image2 from "../../images/DSC06531.jpg"
import image3 from "../../images/DSC06537.jpg"
import image4 from "../../images/DSC07036.jpg"
import image5 from "../../images/DSC07086.jpg"
import image6 from "../../images/DSC07144.jpg"

/////////////////////////////////////
// See this link --> https://www.framer.com/api/motion/animation/#variants

const variants = {
  enter: {
    x: -100,
   opacity: 0
  },
  rest: {
    x: 0,
    zIndex: 1,
    opacity: 1,
    transition: {
      type: "inertia",
      default: {
        duration: 4
      }
    }
  },
  exit: {
    x: 200,
    zIndex: 0
  }
}

const images = [ _homeImageURL, image2, image3, image4, image5, image6]

///////////////////////////////////

export default () => {
    // SELECTING IMAGE FROM GRAPHQL (BACKEND): 
    // See this link --> https://www.gatsbyjs.org/docs/use-static-query/

    const grid = [
      {gridColumn: "1/3"}, 
      {gridRow: "1/3"}, 
      {gridRow: "2/4", gridColumn: "1/2", y: y + 900, x: 0}, 
      {gridColumn: "2/3"}, 
      {gridColumn: "2/4"}
    ]
    
    const { scrollY, scrollYProgress } = useViewportScroll()
    const y = useTransform(scrollY, val => val * -.6 )
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]) 

    useEffect(() => { 
      scrollY.onChange(val => console.log(val))
     } ,[scrollY])
  
    // (images.length * grid.length).map(5 items => custom backgroundImg_A custom grid_A, custom bgImg_B, gt )
////////////////////////////
    // MASONRY GRID LOGIC //
///////////////////////////
let imageSegments = [0, 1, 2, 3, 4].map(item => { 
  return  <ImgWrapper 
            key={item}
            style={{y, ...grid[item % grid.length], scale }}>
              <CarouselItem />
         </ImgWrapper> 
 })
    // See this link --> https://gatsby.dev/gatsby-image
    //const lazyLoadImage = <Img fluid={ data.placeholderImage.childImageSharp.fluid } />


    // Need to extrapolate for "useAnimation()" controls in order to get the timing right for "useCycle()"
    const image =   <BgContainer >
                      {imageSegments}
                    </BgContainer>
             

    return image //|| lazyLoadImage
}
////////////////////////////
    // CAROUSEL LOGIC //
///////////////////////////
const CarouselItem = () => {
  const [currentImage, next] = useCycle(...images)

  useInterval(() => {
    next()
   // console.log(currentItem)
  }, 4000)

  
  return <AnimatePresence initial={false}>
            <BackgroundImg 
              current={currentImage}
              //custom={direction}
              variants={variants}
              initial="enter"
              animate="rest"
              exit="exit"
            />
            </AnimatePresence>
}


// STYLES
const ImgWrapper = styled(motion.div)`
  //border: 3px solid black;
  position: relative;
  overflow: hidden;
  

`
// Should the "cycled" value always be first?
const BackgroundImg = styled(motion.div)`
  background-image: url('${({current}) => current}');
  
  width: 100%;
  height: 100%; 
  object-fit: cover;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
 
`;

const BgContainer = styled(motion.div)`
  position: relative;
  //transform: translateY(-5em);

  z-index: 1;
  height: 100vh;
  width: 100vw;

  //overflow: hidden;

  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-template-rows: 3fr 3fr 3fr;
  grid-auto-flow: column;

  box-shadow: 0px -8px 25px -2px rgba(0,0,0,0.61);

  margin-top: 3em;

  scroll-snap-align: end;
  

`;

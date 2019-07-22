// implements "Section" and "FullPageVideo"

import React, { useRef, useState, useEffect } from "react"

import styled from "styled-components"
import { motion, useMotionValue, useViewportScroll, useTransform } from "framer-motion"
import useMedia from "../../effects/useMedia"

import { _homeImageURL, _yellow, _blue, _darkOrange} from "../../theme"


import trailerURL from "../../images/VZLA_Trailer.mp4"

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

<iframe width="1280" height="480" src="https://www.youtube.com/embed/g381U6AuynA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
/////////////////////////////////// WILL ADD OGG File type

export default () => {

    const marginTop = useMedia([], [], 0)
    const { scrollY, scrollYProgress } = useViewportScroll()

    // Add scroll constraint for next sections too
    const y = useTransform(scrollY, val => val < 450 ? val * -1 : val - 900)
    const scale = useTransform(scrollYProgress, [0, .3, .45], [1, 1.25, 1.35]) || 1

    //const background = useTransform(scrollYProgress, [0, .4, .65, 1], [_darkOrange, _blue, _blue, _blue])
    //const position = useTransform(scrollYProgress, [0, .4, .65, 1], ["relative", "relative", "fixed", "relative"])


   
    const video = useRef()

    // MAYBE MOVE SIDEBAR TO LAYOUT 
    // SIDEBAR AND NAVBAR REPLACED BY NAVICON ON BRREAKPOINTS

    return (
        <VideoContainer style={{background: "transparent"}}>
            <Sidebar style={{ y }}>

            </Sidebar>

            <InfoArea style={{ y }}>

            </InfoArea>

            <motion.video style={{ y, scale, width: "60%" }} ref={video} autoPlay="true" >
                <source src={trailerURL} type="video/mp4" />
            </motion.video>

        </VideoContainer>
    )
}

// STYLES
const VideoContainer = styled(motion.div)`
    z-index: 20;
    width: 100vw;
    height: 20em;
    transform: translateY(20em);

    
    display: flex;
    justify-content: center;
   
    

  
    & > * {
        
    }

`
const InfoArea = styled(motion.div)`
    width: 15em;
    height: 15em;
    border: 2px solid ${_yellow};
    text-align: center;
    line-height: 3em;

    position: absolute;
    right: 0;
    z-index: 50;

`

const Sidebar = styled(motion.div)`
    width: 15em;
    height: 15em;
    border: 2px solid ${_yellow};
    text-align: center;
    line-height: 3em;

    position: absolute;
    left: 0;
    z-index: 50;

`

const PlayBtn = styled(motion.button)`

`

const PauseBtn = styled(motion.button)`

`

const ProgressWrapper = styled(motion.div)`

`

const Progress = styled(motion.progress)`

`
const ProgressBar = styled(motion.span)`

`
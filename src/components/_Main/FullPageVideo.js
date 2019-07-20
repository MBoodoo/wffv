// implements "Section" and "FullPageVideo"

import React from "react"

import styled from "styled-components"
import { motion, useMotionValue, useViewportScroll } from "framer-motion"

import { _homeImageURL, _golden, _darkPurp, _darkOrange} from "../../theme"

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
    return (
        <VideoContainer>
            <video controls>
                <source src={trailerURL} type="video/mp4" />
            </video>
        </VideoContainer>
    )
}

// STYLES
const VideoContainer = styled(motion.div)`

    width: 80vw;
    height: 20em;

    
    display: flex;

    & > * {
        
    }

`
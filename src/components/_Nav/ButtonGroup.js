// THIS NEEDS TO BE REFACTORED NIGGA

// ""
import React from "react"

import styled from "styled-components"
import { motion, useMotionValue, useTransform  } from "framer-motion"
import { _homeImageURL, _golden, } from "../../theme"
import { useMousePos } from "../../effects/useMousePos"

import { useStaticQuery, graphql } from "gatsby"

////////////////////////////

const variants = {
  
}

///////////////////////////

export default ({ children }) => {
    
    const mouse = useMousePos()
    const y = useMotionValue(true)
    y.set(mouse.y || y)
    
    const background = useTransform(y, [0, 250], [`linear-gradient(to bottom, rgba(56,29,42,1) 0%, rgba(56,29,42, .3) 100%)`, `linear-gradient(to bottom, rgba(56,29,42, 1) 0%, rgba(56,29,42,0) 100%)`])


    return <ButtonGroup style={{ background }}>{children}</ButtonGroup>
}

///////////////////////////

const ButtonGroup = styled(motion.div)`
    display: flex;
    justify-content: ${({ justify }) => justify || "space-between"};
    flex: 1;

    height: ${({ height }) => height || "4em"};
    background: linear-gradient(to bottom, rgba(56,29,42, 1) 0%, rgba(56,29,42,0) 100%);
    position: fixed;

    width: 100vw;
    z-index: 10;

`
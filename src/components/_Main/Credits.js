// "Credits" implements "Section" and "Grid" type
import React, { useEffect } from "react"

import styled from "styled-components"
import { motion, useMotionValue, useViewportScroll, useTransform  } from "framer-motion"

import MissionStatement from "./MissionStatement"
import { _homeImageURL, _golden, _darkOrange, _darkPurp } from "../../theme"
//import { backgroundType } from "personal library"

import { useStaticQuery, graphql } from "gatsby"

// Maybe replace offset lengths like 750 with dynamic width lengths

export default () => {
    const { scrollY, scrollYProgress } = useViewportScroll()

    
    const y = useTransform(scrollY, val => val < 615 ? (val - 750) * -1 : val - 500)
    const background = useTransform(scrollYProgress, [0, .4, .65, 1], [_darkOrange, _darkPurp, _darkPurp, _darkPurp])

    return <Container style={{y, background}} transition={{ type: 'spring', restDelta: 0.5 }}></Container>
}

const Container = styled(motion.div)`
    width: 100vw;
    height: 40em;
    padding: 2em;

    position: relative;

    display: grid;

    border: 3px solid ${_golden};
    z-index: 17;
    
`

const PersonCredit = styled(motion.div)`

`
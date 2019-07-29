// "Credits" implements "Section" and "Grid" type
import React, { useEffect } from "react"

import styled from "styled-components"
import { motion, useMotionValue, useViewportScroll, useTransform  } from "framer-motion"
import useLockBodyScroll from "../../effects/useLockBodyScroll"

// Eventually programtically import images by keyword

import MycromLogo from "../../images/MycromLogo.png"
import GSLogo from "../../images/Global_Shapers_Logo.png"
import PPLogo from "../../images/PlanPaisLogo.png"

import { _homeImageURL, _yellow, _darkOrange, _blue } from "../../theme"
//import { backgroundType } from "personal library"

import { useStaticQuery, graphql } from "gatsby"

// Maybe replace offset lengths like 750 with dynamic width lengths

export default () => {
    const { scrollY, scrollYProgress } = useViewportScroll()
    
    //const y = useTransform(scrollY, val => val < 615 ? (val - 750) * -1 : val - 500)
    //const background = useTransform(scrollYProgress, [0, .4, .65, 1], [_dar _blue, _blue, _blue])
    let orgLogos = [MycromLogo, GSLogo, PPLogo].map(item => <Org key={item} src={item}/>)

    return  <Container>
                {orgLogos}
            </Container>
}   
const Container = styled(motion.div)`
    width: 100vw;
    height: 25em;
    padding: 2em;

    position: relative;

    display: inline-flex;
    justify-content: space-between;

    border: 3px solid ${_yellow};
    background: ${_darkOrange};
    z-index: 17;

    & > * {
        border: 1px solid black;
    }
    
`
const Org = styled(motion.img)`
    flex: .4;
    height: 100%;
    background-size: 50% 50%;

    border: 1px sold black;

`



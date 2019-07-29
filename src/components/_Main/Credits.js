// "Credits" implements "Section" and "Grid" type
import React, { useEffect } from "react"

import styled from "styled-components"
import { motion, useMotionValue, useViewportScroll, useTransform  } from "framer-motion"
import useLockBodyScroll from "../../effects/useLockBodyScroll"

import MissionStatement from "./MissionStatement"
import { _homeImageURL, _yellow, _darkOrange, _blue } from "../../theme"
import Carlos from "../../images/CarlosMacher.jpg"

//import { backgroundType } from "personal library"

import { useStaticQuery, graphql } from "gatsby"

// THIS SHOULD BE SELECTED W/ GRAPHQL!!

const CarlosBio = `In the U.S. has produced and directed several films including the documentaries "Luigi's Story: The
A-Word"; and "Third Act", was the director of "45 Willow Drive", assistant director for the series "Sam
Dates", segment producer for "Healing Baltimore's Harbor: A Pipe Dream", and collaborated as
cinematographer in the series "The Crossroads" for Bertelsmann Foundation. In Peru worked as a
director/producer on “Cuarto Cero”, “El Jardín Perdido” and the pilot series “Visiones”. As an
audiovisual producer for the Inter-American Development Bank, he participated in over 30
audiovisual projects for MOOCs in Latin America and the Caribbean.`

//const 



export default () => {
    const { scrollY, scrollYProgress } = useViewportScroll()
    
    //const y = useTransform(scrollY, val => val < 615 ? (val - 750) * -1 : val - 500)
    //const background = useTransform(scrollYProgress, [0, .4, .65, 1], [_dar _blue, _blue, _blue])

    return  <Container style={{y: -scrollY}} transition={{ type: 'spring', restDelta: 0.5 }}>
                <Credit>
                    <CreditImage src={Carlos} />
                    <Title> Carlos Macher </Title>
                    <CreditInfo>{CarlosBio}</CreditInfo>
                </Credit>
            </Container>
}

const Container = styled(motion.div)`
    width: 100vw;
    height: 40em;
    padding: 2em;

    position: relative;

    display: flex;

    border: 3px solid ${_yellow};
    background: ${_darkOrange};
    z-index: 17;
    
`

const Credit = styled(motion.div)`
    display: flex;

    width: 85%;
    height: 100%;

    position: relative;
    border: 3px solid black;


`

const CreditImage = styled(motion.img)`
  
    border: 2px solid ${_yellow};
    flex: 1
    
`
const CreditInfo = styled(motion.div)`
    flex: 1; 
`

const Title = styled(motion.h2)`
    position: absolute;
`
// import { ButtonList } from "personal-lib"
import React from "react";
import styled from "styled-components"
import { Link } from "gatsby"

import { font1, font2, font3, _golden } from "../theme.js"


const pages = ["About", "Contact", "Donate", "Gallery", "Screenings", "Trailer"]

const linkStyles = {
   
    textDecoration: `none`,
    color: `${_golden}`

}

export default () => {
    let links = pages.map(item => <Button><Link style={{...linkStyles}} to={`/${item}/`}>{item}</Link></Button>)
    return <NavContainer>{links}</NavContainer>
}

const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1em;  
    width: 80%;
    height: 1.5em;
    margin-bottom: 7em;

`

const Button = styled.div`
    flex: 1;
    font-size: 18px;

    text-decoration: none;
    font-family: ${font1};
 

    text-transform: uppercase;
    letter-spacing: 1px;
`
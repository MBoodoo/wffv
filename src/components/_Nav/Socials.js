// import { ButtonList } from "personal-lib"
// Replace all "width" props with "flex"
// Socials "implements" the type "ButtonGroup"

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { _yellow } from "../../theme"
import { motion } from "framer-motion";

//import { font1, font2, font3, _yellow } from "../../theme.js"
/////////////////////////////////////////

// THIS WILL BE SELECTED FROM GRAPHQL -->

const socials = [
  {
    type: "twitter",
    icon: faTwitter,
    link: "https://twitter.com"
  },
  {
    type: "instagram",
    icon: faInstagram,
    link: "#"
  },
  {
    type: "facebook",
    icon: faFacebook,
    link: "#"
  },
  {
    type: "youtube",
    icon: faYoutube,
    link: "#"
  }
];

// See this link --> https://www.framer.com/api/motion/animation/#variants

const variants = {
  init: {
    opacity: 0,
    y: 20
  },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 20,
      staggerChildren: 0.45,
      staggerDirection: -1
    }
  }
};

/////////////////////////////////

export default () => {
  // Looping over pages (eventually selected from GraphQL)
  // and mapping their Links to Buttons

  let links = socials.map(({ icon, link }, idx) => (
    <Button variants={variants} key={idx}>
      <a href={link}><FontAwesomeIcon icon={icon} /></a>
    </Button>
  ));

  return (
    <Container initial="init" animate="mounted" variants={variants}>
      {links}
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 1em 0.6em;
  flex: 0.3;
  margin: ${({ spacing }) => spacing || ".2em 2em .2em 1em"};
  position: relative;
  justify-self: end;
  margin-left: auto;
`;

const Button = styled(motion.div)`
  flex: 1/5;
  font-size: 26px;

  text-decoration: none;
  font-family: "Merriweather";

  text-transform: uppercase;
  letter-spacing: 1px;
  color: yellow;

  text-align: center;

  padding: 0.3em;

  place-self: center center;

  a {
    color: ${_yellow};
  }

`;

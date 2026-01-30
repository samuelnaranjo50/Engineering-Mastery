import React, { useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];
const scrollerDefaultValue = {
  hideIt: false,
  currentPosition: 0,
  prevPosition: 0,
};

const Header = () => {
  const [hiddenHeader, sethiddenHeader]  = useState(null)

  const scroller = useRef({...scrollerDefaultValue})


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  const handleScroll = () => {


    scroller.current.currentPosition = window.scrollY // New approach

    const goingUp = scroller.current.currentPosition < scroller.current.prevPosition;
    const goingDown = scroller.current.currentPosition > scroller.current.prevPosition;
    
    // Check and compare variables for scroll *control*
    if (goingDown) {
      scroller.current.hideIt = true;
      scroller.current.prevPosition = scroller.current.currentPosition;
      sethiddenHeader(scroller.current.hideIt)
            
    }
    if (goingUp) {
      scroller.current.hideIt = false;
      scroller.current.prevPosition = scroller.current.currentPosition;
      sethiddenHeader(scroller.current.hideIt);
    }
    
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${hiddenHeader ? "-200px" : "0"})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav style={{
            display: "flex",
            gap: "20px",
          }}>
            {/* Add social media links based on the `socials` data */
              socials.map((itemObject) => {
                return (
                  <a href={itemObject.url} alt="Icon">
                    <FontAwesomeIcon icon={itemObject.icon} size="2x"/>
                  </a>
                )
              })
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */
              <>
                <a href="#projects-section" onClick={handleClick}>Projects</a>
                <a href="#contactme-section" onClick={handleClick}>Contact Me</a>
              </>

              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

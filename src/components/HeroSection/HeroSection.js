import React, { useState } from "react";
import { Button } from "../Button/ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
import Video from "../../videos/video.mp4";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Looking for Full-time Position 2023!</HeroH1>
        <HeroP>
          My name is Robert Stachurski and I am Computer Science Senior at
          Temple University. Experienced in C, Java, JavaScript, React, Python.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            smooth={true}
            duration={500}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

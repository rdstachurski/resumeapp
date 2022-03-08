import React from "react";
import { Button } from "../Button/ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Column1,
  Column2,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrp,
} from "./InfoElements";
const Info = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headLine,
  lightText,
  darkText,
  description,
  description2,
  description3,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
                <BtnWrap>
                  {/* <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-10}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button> */}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrp>
                <Img src={img} alt={alt} />
              </ImgWrp>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;

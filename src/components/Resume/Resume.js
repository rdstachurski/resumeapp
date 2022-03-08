import React from "react";
import Icon1 from "../../img/Svg4.svg";
import Icon2 from "../../img/Svg5.svg";
import Icon3 from "../../img/Svg6.svg";
import {
  ResumeContainer,
  ResumeH1,
  ResumeWrapper,
  ResumeCard,
  ResumeIcon,
  ResumeH2,
  ResumeP,
} from "./ResumeElements";
const Resume = () => {
  return (
    <ResumeContainer id="projects">
      <ResumeH1>Technical Projects</ResumeH1>
      <ResumeWrapper>
        <ResumeCard>
          <ResumeIcon src={Icon1} />
          <ResumeH2>Spell Checker(C)</ResumeH2>
          <ResumeP>
            Socket programming, Mutual exclusion and synchornization between
            threads, Multiple Data structures for efficent sorting queues.
          </ResumeP>
        </ResumeCard>
        <ResumeCard>
          <ResumeIcon src={Icon2} />
          <ResumeH2>BookList App(Kotlin)</ResumeH2>
          <ResumeP>
            Andriod Studio. REST backend API for book audio data. RecyclerView,
            LinearLayout, Custom Adapters. Implement resume playback on exit.
          </ResumeP>
        </ResumeCard>
        <ResumeCard>
          <ResumeIcon src={Icon3} />
          <ResumeH2>Resume Website</ResumeH2>
          <ResumeP>
            Self-learned Javascript, React/Redux, HTML and CSS. Implements
            UseEffect, UseState, Styled Components, Router and Scroll.
          </ResumeP>
        </ResumeCard>
      </ResumeWrapper>
    </ResumeContainer>
  );
};

export default Resume;

import React from "react";
import Pdf from "../../files/Robert_Stachurski-1.pdf";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarRoute,
  SideBarWrapper,
  SideBtnWrap,
  SideBarMenu,
  Resume,
} from "./SideBarElements";
const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle} smooth={true} duration={500}>
            About
          </SideBarLink>
          <SideBarLink
            to="projects"
            onClick={toggle}
            smooth={true}
            duration={500}
          >
            Projects
          </SideBarLink>
          <SideBarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
          >
            Contact
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute>
            <Resume href={Pdf}>Resume</Resume>
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;

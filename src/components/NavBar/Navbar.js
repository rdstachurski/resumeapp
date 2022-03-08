import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Pdf from "../../files/Robert_Stachurski-1.pdf";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  ResumePDF,
  ResumeLink,
} from "./NavBarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Home
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth={true} duration={500}>
                Technical Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={500}>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            {/* <NavBtnLink to="/about">Resume</NavBtnLink> */}
            <ResumeLink>
              <ResumePDF href={Pdf}>Resume</ResumePDF>
            </ResumeLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

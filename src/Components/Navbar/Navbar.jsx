import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <>
    {/* <Topbar /> */}
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            HOME
          </NavLink>
          {/* <NavLink to="/alumni" activeStyle>
            ALUMNI
          </NavLink> */}
          <NavLink to="/contact" activeStyle>
            CONTACT
          </NavLink>
          <NavLink to="/placement" activeStyle>
            INTERNSHIPS &amp; PLACEMENTS
          </NavLink>
          <NavLink to="/mou" activeStyle>
            IIP &amp; MOUS
          </NavLink>
          <NavLink to="/login" activeStyle>
            LOGIN
          </NavLink>
          {/* <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink> */}
          {/* <NavLink to="/gallery" activeStyle>
            GALLERY
          </NavLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign">Register</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

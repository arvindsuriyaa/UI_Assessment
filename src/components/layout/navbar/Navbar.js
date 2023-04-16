import React from "react";
import {
  ButtonStyles,
  NavButtonWrapper,
  NavLinks,
  NavWrapper,
} from "./navbar.styles";

function Navbar() {
  const navLinks = ["Trade", "Earn", "Win", "NFT"];

  return (
    <NavWrapper id="navbar">
      <NavLinks>
        <div>PancakeSwap</div>
        <NavButtonWrapper>
          {navLinks.map((links) => (
            <ButtonStyles>{links}</ButtonStyles>
          ))}
        </NavButtonWrapper>
      </NavLinks>
    </NavWrapper>
  );
}

export default Navbar;

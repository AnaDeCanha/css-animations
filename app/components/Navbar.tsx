"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import GitHub from "@mui/icons-material/GitHub";
import { colors } from "../../styles/globals";

const Navbar = () => {
  return (
    <Nav>
      <LogoWrapper>
        <Link href="/">
          <Image
            src="/mini-logo.png"
            alt="Ana De Canha Logo"
            width={40}
            height={40}
          />
        </Link>
      </LogoWrapper>
      <NavLinks>
        <li>
          <Link
            href="https://github.com/AnaDeCanha?tab=repositories"
            target="_blank"
          >
            <span>Check other projects</span>
            <GitHub />
          </Link>
        </li>
      </NavLinks>
    </Nav>
  );
};

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: ${colors.text};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;

  a {
    color: ${colors.text};
    display: flex;
    align-items: center;

    span {
      margin-right: 10px;
    }
  }
`;

export default Navbar;

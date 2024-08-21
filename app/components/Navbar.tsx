"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
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
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
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
    text-decoration: none;

    &:hover {
      color: ${colors.accent};
    }
  }
`;

export default Navbar;

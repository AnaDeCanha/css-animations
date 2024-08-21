"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { colors } from "../../styles/globals";

const Footer = () => {
  return (
    <FooterSection>
      <SocialLinks>
        <Link
          href="https://twitter.com/anadecanha"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </Link>
        <Link
          href="https://www.instagram.com/anadecanha/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://anadecanha.com/"
          aria-label="Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LanguageIcon />
        </Link>
        <Link
          href="https://www.youtube.com/@AnaDeCanha"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon />
        </Link>
        <Link
          href="https://github.com/AnaDeCanha"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </Link>
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Ana De Canha. All rights reserved.
      </Copyright>
    </FooterSection>
  );
};

// Styled Components
const FooterSection = styled.footer`
  background-color: ${colors.primary};
  color: ${colors.text};
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;

  a {
    color: ${colors.text};
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: ${colors.accent};
    }
  }
`;

const Copyright = styled.p`
  margin-top: 10px;
  font-size: 0.875rem;
`;

export default Footer;

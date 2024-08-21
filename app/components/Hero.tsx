"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleScroll = () => {
    router.push("/#cards-section");
  };

  return (
    <HeroSection>
      <Headline>What Makes a Website Truly Memorable?</Headline>
      <Subheadline>
        Is it the design? The content? Or is it something more subtle—those
        tiny, almost invisible details that guide every click and scroll? Let's
        dive into the micro-interactions and animations that don’t just decorate
        a page—they shape the entire user experience.
      </Subheadline>
      <CallToAction onClick={handleScroll}>Discover the Secrets</CallToAction>
    </HeroSection>
  );
};

// Styled Components
const HeroSection = styled.section`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a1f36;
  color: #f6f9fc;
  text-align: center;
  padding: 20px;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Subheadline = styled.p`
  font-size: 1.25rem;
  margin-bottom: 40px;
  max-width: 800px;
`;

const CallToAction = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  color: #1a1f36;
  background-color: #f6f9fc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e5ec;
  }
`;

export default Hero;

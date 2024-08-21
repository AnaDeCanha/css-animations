"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Content = () => {
  const effects = [
    { title: "Hover Effects", link: "/hover-effects" },
    { title: "Fade-In and Fade-Out", link: "/fade-in-fade-out" },
    { title: "Slide-In and Slide-Out", link: "/slide-in-slide-out" },
    { title: "Parallax Scrolling", link: "/parallax-scrolling" },
    { title: "Button Press Animation", link: "/button-press-animation" },
    {
      title: "Loading Spinners and Progress Bars",
      link: "/loading-spinners-progress-bars",
    },
    {
      title: "Scroll-Triggered Animations",
      link: "/scroll-triggered-animations",
    },
    {
      title: "Micro-Interactions on Form Fields",
      link: "/micro-interactions-form-fields",
    },
    { title: "Tooltip Animations", link: "/tooltip-animations" },
    { title: "Modal Pop-Ups", link: "/modal-pop-ups" },
    { title: "Text Animation", link: "/text-animation" },
    { title: "Zoom-In and Zoom-Out", link: "/zoom-in-zoom-out" },
    { title: "Accordion Animations", link: "/accordion-animations" },
    { title: "Shake Animation", link: "/shake-animation" },
    { title: "Skeleton Screens", link: "/skeleton-screens" },
  ];

  return (
    <ContentSection id="cards-section">
      <h2>Explore Our Effects</h2>
      <CardContainer>
        {effects.map((effect, index) => (
          <Card key={index}>
            <CardLink href={effect.link}>
              <h3>{effect.title}</h3>
              <p>Learn more about {effect.title} and see it in action.</p>
            </CardLink>
          </Card>
        ))}
      </CardContainer>
    </ContentSection>
  );
};

// Styled Components
const ContentSection = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardLink = styled.a`
  text-decoration: none;
  color: #333;
  display: block;

  h3 {
    margin-top: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 10px 0 0;
    font-size: 1rem;
    color: #666;
  }

  &:hover {
    color: #635bff;
  }
`;

export default Content;

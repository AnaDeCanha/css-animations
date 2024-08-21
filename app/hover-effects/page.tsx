"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const HoverEffects = () => {
  const router = useRouter();

  return (
    <PageContainer>
      <h1>Hover Effects</h1>
      <p>
        Hover effects are crucial for providing interactive feedback to users.
        They are often used on buttons, links, and images to indicate that an
        element is clickable or interactive.
      </p>
      <DemoSection>
        <DemoBox>Hover over me!</DemoBox>
      </DemoSection>
      <BackButton onClick={() => router.push("/#cards-section")}>
        Back to All Effects
      </BackButton>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const DemoSection = styled.div`
  margin-top: 40px;
`;

const DemoBox = styled.div`
  width: 200px;
  height: 100px;
  background-color: #635bff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #24b47e;
    transform: translateY(-5px);
  }
`;

const BackButton = styled.button`
  margin-top: 40px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export default HoverEffects;

"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

export default Home;

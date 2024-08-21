"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import styled from "styled-components";
import { GlobalStyles } from "../styles/globals";

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

export default Home;

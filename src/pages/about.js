import React from "react";

import Hero from "../components/AboutPage/Hero";

import Layout from "../components/Layout";
import ScrollArrow from "../components/shared/ScrollArrow";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <Hero />
      <Hero />
      <ScrollArrow />
    </Layout>
  )
}

export default AboutPage

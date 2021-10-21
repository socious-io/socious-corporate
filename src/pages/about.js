import React from "react";

import Hero from "../components/AboutPage/Hero";

import Layout from "../components/Layout";
import ScrollArrow from "../components/shared/ScrollArrow";
import IssueSection from "../components/AboutPage/IssueSection";
import AboutSection from "../components/AboutPage/AboutSection";
import VisionSection from "../components/AboutPage/VisionSection";
import ValuesSection from "../components/AboutPage/ValuesSection";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <Hero />
      <ScrollArrow />
      <IssueSection />
      <AboutSection />
      <VisionSection />
      <ValuesSection />
    </Layout>
  )
}

export default AboutPage

import React from "react";

import Hero from "../components/AboutPage/Hero";

import Layout from "../components/Layout";
import ScrollArrow from "../components/shared/ScrollArrow";
import IssueSection from "../components/AboutPage/IssueSection";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <Hero />
      <ScrollArrow />
      <IssueSection />
    </Layout>
  )
}

export default AboutPage

import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/seo"
import ScrollArrow from "../components/shared/ScrollArrow";

import HeroSection from "../components/AboutPage/HeroSection";
import IssueSection from "../components/AboutPage/IssueSection";
import AboutSection from "../components/AboutPage/AboutSection";
import VisionSection from "../components/AboutPage/VisionSection";
import ValuesSection from "../components/AboutPage/ValuesSection";
import TeamSection from "../components/AboutPage/TeamSection";
import CompanySection from "../components/AboutPage/CompanySection";
import ContactSection from "../components/AboutPage/ContactSection";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <Seo
        title='About'
        description='Learn more about Socious and what we do, who we are, and what we stand for'
      />
      <HeroSection />
      <ScrollArrow />
      <IssueSection />
      <AboutSection />
      <VisionSection />
      <ValuesSection />
      <TeamSection />
      <CompanySection />
      <ContactSection />
    </Layout>
  )
}

export default AboutPage

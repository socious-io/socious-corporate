import React from "react";
import { useLocation } from '@reach/router';

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

const AboutPage = (props) => {
  const location = useLocation();
  const jaPage = location.pathname.includes('/ja')

  const seoDescription = jaPage ?
                         'ソーシャスは社会変革のためのコミュニティアプリです。' :
                         'Learn more about Socious and what we do, who we are, and what we stand for'

  const seoTitle = jaPage ?
                   'ソーシャスについて' :
                   'About'
  return (
    <Layout pageTitle="About">
      <Seo
        title={seoTitle}
        description={seoDescription}
      />
      <HeroSection {...props} />
      <ScrollArrow {...props} />
      <IssueSection {...props} />
      <AboutSection {...props} />
      <VisionSection {...props} />
      <ValuesSection {...props} />
      <TeamSection {...props} />
      <CompanySection {...props} />
      <ContactSection {...props} />
    </Layout>
  )
}

export default AboutPage

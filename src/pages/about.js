import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import ScrollArrow from '../components/shared/ScrollArrow';

import HeroSection from '../components/AboutPage/HeroSection';
import IssueSection from '../components/AboutPage/IssueSection';
import AboutSection from '../components/AboutPage/AboutSection';
import VisionSection from '../components/AboutPage/VisionSection';
import ValuesSection from '../components/AboutPage/ValuesSection';
import TeamSection from '../components/AboutPage/TeamSection';
import CompanySection from '../components/AboutPage/CompanySection';
import ContactSection from '../components/AboutPage/ContactSection';

const AboutPage = (props) => {
  return (
    <Layout {...props} header="transparent" pageTitle="About">
      <Seo key="about" />
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
  );
};

export default AboutPage;

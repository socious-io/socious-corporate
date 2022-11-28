import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import ScrollArrow from '../components/shared/ScrollArrow';

import HeroSection from '../components/AboutPage/HeroSection';
import IssueSection from '../components/AboutPage/IssueSection';
import TeamSection from '../components/AboutPage/TeamSection';
import CompanySection from '../components/AboutPage/CompanySection';

const AboutPage = (props) => {
  return (
    <Layout {...props} header="default" pageTitle="About">
      <Seo key="about"
      title="Join Impact Projects and Make a Difference"
      description="Socious connects change-makers with impact projects & ethical organizations. Join our impact community and help us make a difference!"
      />
      <HeroSection {...props} />
      <ScrollArrow {...props} />
      <IssueSection {...props} />
      {/* <VisionSection {...props} /> */}
      {/* <ValuesSection {...props} /> */}
      <TeamSection {...props} />
      <CompanySection {...props} />
      {/* <ContactSection {...props} /> */}
    </Layout>
  );
};

export default AboutPage;

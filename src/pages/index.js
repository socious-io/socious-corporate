import * as React from 'react';
import loadable from '@loadable/component';

import '../styles/main.scss';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import Intro from '../components/Homepage/Intro/Intro';
import JobsSection from '../components/Homepage/JobsSection/JobsSection';
import Cta from "../components/Homepage/CTA";
import ClientsSection from '../components/Homepage/ClientsSection/ClientsSection';
const SkillSection = loadable(() => import('../components/Homepage/SkillsSection/SkillsSection'));
const FeaturesSection = loadable(() => import('../components/Homepage/Features/FeaturesSection'));
const FeaturedInSection = loadable(() => import('../components/Homepage/FeaturedIn/FeaturedInSection'));

import LatestJobs from '../components/Homepage/LatestJobs/LatestJobs';

const IndexPage = (props) => {
  return (
    <Layout {...props} header="transparent">
      <Seo {...props} />
      <Intro {...props} />
      <JobsSection {...props} />
      <FeaturesSection {...props} />
      <ClientsSection {...props} />
      <Cta {...props} />
      <LatestJobs {...props} />
      <FeaturedInSection {...props} />
      <SkillSection {...props} />
    </Layout>
  );
};

export default IndexPage;

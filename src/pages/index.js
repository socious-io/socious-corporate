import * as React from 'react';
import '../styles/main.scss';

import Layout from '../components/Layout';
import Seo from '../components/seo';

import Intro from '../components/Homepage/Intro/Intro';
import AppLinks from '../components/Homepage/AppLinks';
import JobsSection from '../components/Homepage/JobsSection/JobsSection';
import FeaturesSection from '../components/Homepage/Features/FeaturesSection';
import SkillSection from '../components/Homepage/SkillsSection/SkillsSection';
import LatestJobs from '../components/Homepage/LatestJobs/LatestJobs';

const IndexPage = (props) => {
  return (
    <Layout {...props} header="transparent" >
      <Seo {...props} />
      <Intro {...props} />
      {/* <AppLinks {...props} /> */}
      <JobsSection {...props} />
      <FeaturesSection {...props} />
      <LatestJobs {...props} />
      <SkillSection {...props} />
    </Layout>
  );
};

export default IndexPage;

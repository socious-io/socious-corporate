import React from 'react';

import Layout from '../../components/Layout';
import Seo from '../../components/seo';

import Banner from '../../components/CareersPage/Banner';
import JobsSection from '../../components/CareersPage/JobsSection';

const CareersPage = (props) => {
  return (
    <Layout {...props} header="">
      <Seo key="careers"
      title="Careers | Social Impact Jobs"
      description="Looking for a social impact job? Want to make a difference in the world? Join the Socious team and help us bring together change-makers!"
      />
      <Banner {...props} />
      <JobsSection {...props} />
    </Layout>
  );
};

export default CareersPage;

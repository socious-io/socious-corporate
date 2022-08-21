import React from 'react';

import Layout from '../../components/Layout';
import Seo from '../../components/seo';

import Banner from '../../components/CareersPage/Banner';
import JobsSection from '../../components/CareersPage/JobsSection';

const CareersPage = (props) => {
  return (
    <Layout {...props} header="">
      <Seo key="careers" />
      <Banner {...props} />
      <JobsSection {...props} />
    </Layout>
  );
};

export default CareersPage;

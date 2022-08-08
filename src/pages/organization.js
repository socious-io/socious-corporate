import * as React from 'react';

import Seo from '../components/seo';

import Intro from '../components/OrganizationPage/Intro/Intro';
import Layout from '../components/Layout';
import ReasonsSection from '../components/OrganizationPage/ReasonSection/ReasonSection';



const OrganizationPage = (props) => {
  return (
    <Layout {...props} header="transparent" >
      <Seo key="organization" />
      <Intro {...props} />
      <ReasonsSection {...props}/>

    </Layout>
  );
};

export default OrganizationPage;

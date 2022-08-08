import * as React from 'react';

import Seo from '../components/seo';

import Intro from '../components/OrganizationPage/Intro/Intro';
import Layout from '../components/Layout';
import ReasonsSection from '../components/OrganizationPage/ReasonSection/ReasonSection';
import TalentSection from '../components/OrganizationPage/TalentsSection/TalentsSection';
import TalentCta from '../components/OrganizationPage/TalentCta';



const OrganizationPage = (props) => {
  return (
    <Layout {...props} header="transparent" >
      <Seo key="organization" />
      <Intro {...props} />
      <ReasonsSection {...props}/>
      <TalentSection  {...props}/>
      <TalentCta {...props}/>

    </Layout>
  );
};

export default OrganizationPage;

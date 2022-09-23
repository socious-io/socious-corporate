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
      <Seo key="organization"
      title="Matching Impact Organizations with Talents"
      description="Find the right talents to grow your impact organization. Socious provides an innovative solution that uses machine-learning for hasselfree social impact hiring."
      />
      <Intro {...props} />
      <ReasonsSection {...props}/>
      <TalentSection  {...props}/>
      <TalentCta {...props}/>

    </Layout>
  );
};

export default OrganizationPage;

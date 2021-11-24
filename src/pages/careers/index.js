import React from "react";
import { useLocation } from '@reach/router';

import Layout from "../../components/Layout";
import Seo from "../../components/seo"

import Banner from "../../components/CareersPage/Banner";
import JobsSection from "../../components/CareersPage/JobsSection";

const CareersPage = (props) => {
  const location = useLocation();
  const jaPage = location.pathname.includes('/ja')

  const seoDescription = jaPage ?
                         'ソーシャスのチームに参加して、世界を変えてみませんか' :
                         'Join the Socious team and make a difference in the world'

  const seoTitle = jaPage ?
                   '採用情報' :
                   'Careers'

  return (
    <Layout>
      <Seo
        title={seoTitle}
        description={seoDescription}
      />
      <Banner {...props} />
      <JobsSection {...props} />
    </Layout>
  )
}

export default CareersPage

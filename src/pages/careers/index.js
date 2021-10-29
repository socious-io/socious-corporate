import React from "react";

import Layout from "../../components/Layout";
import Seo from "../../components/seo"

import Banner from "../../components/CareersPage/Banner";
import JobsSection from "../../components/CareersPage/JobsSection";

const CareersPage = () => {
  return (
    <Layout>
      <Seo
        title='Careers'
        description='Join the Socious team and make a difference in the world'
      />
      <Banner />
      <JobsSection />
    </Layout>
  )
}

export default CareersPage

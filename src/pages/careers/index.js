import React from "react";

import Layout from "../../components/Layout";

import Banner from "../../components/CareersPage/Banner";
import JobsSection from "../../components/CareersPage/JobsSection";

const CareersPage = () => {
  return (
    <Layout pageTitle="Careers">
      <Banner />
      <JobsSection />
    </Layout>
  )
}

export default CareersPage

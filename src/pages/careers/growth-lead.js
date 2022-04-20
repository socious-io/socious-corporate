import React from "react";

import Layout from '../../components/Layout'
import Seo from "../../components/seo"
import growthLead from "../../../data/CareersPage/growthLead";

import PositionHeader from "../../components/JobPage/PositionHeader";
import DescriptionRow from "../../components/JobPage/DescriptionRow";

const GrowthLead = () => {
  const { title, location, department } = growthLead

  const jobInformation = growthLead.body.map(data =>
    <DescriptionRow
      key={data.id}
      header={data.header}
      content={data.content}
    />
  )

  return (
    <Layout>
      <Seo
        title={title}
        description='Join the Socious team and make a difference in the world'
      />
      <div className="job-container">
        <PositionHeader
          title={title}
          location={location}
          department={department}
        />
        <div className="position-description">
          {jobInformation}
        </div>
      </div>
    </Layout>
  )
}

export default GrowthLead

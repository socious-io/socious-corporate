import React from "react";

import Layout from '../../components/Layout'
import Seo from "../../components/seo"
import seniorDataScientist from "../../../data/CareersPage/seniorDataScientist";

import PositionHeader from "../../components/JobPage/PositionHeader";
import DescriptionRow from "../../components/JobPage/DescriptionRow";

const SeniorDataScientist = () => {
  const { title, location, department } = seniorDataScientist

  const jobInformation = seniorDataScientist.body.map(data =>
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

export default SeniorDataScientist

import React from "react";

import Layout from '../../components/Layout'
import Seo from "../../components/seo"
import cto from "../../../data/CareersPage/cto";

import PositionHeader from "../../components/JobPage/PositionHeader";
import DescriptionRow from "../../components/JobPage/DescriptionRow";

const Cto = () => {
  const { title, location, department } = cto

  const jobInformation = cto.body.map(data =>
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

export default Cto

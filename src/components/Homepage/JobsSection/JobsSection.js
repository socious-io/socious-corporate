import React from "react";

import SimpleLocalize from "../../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import Job from "./Job";
import jobsSectionLeft from "../../../../data/Homepage/jobSectionLeft"
import jobsSectionRight from "../../../../data/Homepage/jobSectionRight"

const JobsSection = (props) => {
  const jobItemsLeft = jobsSectionLeft.map(job => 
      <Job
        icon={job.icon}
        key={job.id}
        title={job.title}
        subtitle={job.subtitle}
      />
  )

  const jobItemsRight = jobsSectionRight.map(job => 
      <Job
        icon={job.icon}
        key={job.id}
        title={job.title}
        subtitle={job.subtitle}
      />
  )
  
  return (
    <SimpleLocalize {...props}>
      <div className="section-jobs">
        <div className="section-jobs__block">
          <div className="section-jobs__list">
            <div className="section-jobs__sup-header">
              <FormattedMessage
                id="benefits-caption"
              />
            </div>
            <div className="section-jobs__header">
              <FormattedMessage
                id="benefits-header-left"
              />
              {jobItemsLeft}
            </div>
          </div>
          <div className="section-jobs__img-container">
            <div className="section-jobs__img"></div>
            <div className="section-jobs__img-paleblue-square"></div>
          </div>
        </div>
        <div className="section-jobs__block">
          <div className="section-jobs__img-entrepreneurs-container">
            <div className="section-jobs__img-entrepreneurs"></div>
            <div className="section-jobs__img-entrepreneurs-paleblue-square"></div>
            <div className="section-jobs__img-entrepreneurs-purple-square"></div>
          </div>
          <div className="section-jobs__list">
            <div className="section-jobs__sup-header">
              <FormattedMessage
                id="benefits-caption"
              />
            </div>
            <div className="section-jobs__header">
              <FormattedMessage
                id="benefits-header-right"
              />
              {jobItemsRight}
            </div>
          </div>
          <div className="section-jobs__img-entrepreneurs-container--mobile">
            <div className="section-jobs__img-entrepreneurs--mobile"></div>
            <div className="section-jobs__img-entrepreneurs-paleblue-square"></div>
            <div className="section-jobs__img-entrepreneurs-purple-square"></div>
          </div>
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default JobsSection

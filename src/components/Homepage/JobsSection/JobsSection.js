import React from "react";

import Job from "./Job";
import jobsSectionLeft from "../../../../data/jobSectionLeft"
import jobsSectionRight from "../../../../data/jobSectionRight"

const JobsSection = () => {
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
    <div className="section-jobs">
      <div className="section-jobs__block">
        <div className="section-jobs__list">
          <div className="section-jobs__sup-header">BENEFITS</div>
          <div className="section-jobs__header">
            People passionate about social change can:
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
          <div className="section-jobs__sup-header">BENEFITS</div>
          <div className="section-jobs__header">
            Social entrepreneurs can:
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
  )
}

export default JobsSection

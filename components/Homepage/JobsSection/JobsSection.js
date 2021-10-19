import React from "react";

import Job from "./Job";
import jobsSectionLeft from "../../../data/jobSectionLeft"

const JobsSection = () => {
  const jobItemsLeft = jobsSectionLeft.map(job => 
      <Job
        icon={job.icon}
        key={job.id}
        title={job.title}
        subtitle={job.subtitle}
      />
    )
  
  return (
    <div class="section-jobs">
      <div class="section-jobs__block">
        <div class="section-jobs__list">
          <div class="section-jobs__sup-header">BENEFITS</div>
          <div class="section-jobs__header">
            People passionate about social change can:
            {jobItemsLeft}
          </div>
        </div>
        <div class="section-jobs__img-container">
          <div class="section-jobs__img"></div>
          <div class="section-jobs__img-paleblue-square"></div>
        </div>
      </div>
    </div>
  )
}

export default JobsSection

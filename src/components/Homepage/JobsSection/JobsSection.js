import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import SimpleLocalize from "../../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import Job from "./Job";
import jobsSectionLeft from "../../../../data/Homepage/jobSectionLeft"
import jobsSectionLeftJa from "../../../../data/Homepage/jobSectionLeftJa"
import jobsSectionRight from "../../../../data/Homepage/jobSectionRight"
import jobsSectionRightJa from "../../../../data/Homepage/jobSectionRightJa"

const JobsSection = (props) => {
  const { language } = props.pageContext

  const leftLanguageSelector = language === 'ja' ? jobsSectionLeftJa : jobsSectionLeft
  const rightLanguageSelector = language === 'ja' ? jobsSectionRightJa : jobsSectionRight

  const jobItemsLeft = leftLanguageSelector.map(job => 
      <Job
        icon={job.icon}
        key={job.id}
        title={job.title}
        subtitle={job.subtitle}
      />
  )

  const jobItemsRight = rightLanguageSelector.map(job => 
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
            {/* <div className="section-jobs__img"></div> */}
            <StaticImage
              src="../../../images/socious-job-seeker.png"
              alt="socious app illustration"
              className="section-jobs__img"
              placeholder="blurred"
              loading="lazy"
              objectFit="contain"
            />
            <div className="section-jobs__img-paleblue-square"></div>
          </div>
        </div>
        <div className="section-jobs__block">
          <div className="section-jobs__img-entrepreneurs-container">
            {/* <div className="section-jobs__img-entrepreneurs"></div> */}
            <StaticImage
              src="../../../images/socious-entrepreneurs.png"
              alt="socious app illustration"
              className="section-jobs__img-entrepreneurs"
              placeholder="blurred"
              loading="lazy"
              objectFit="contain"
            />
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
            <StaticImage
                src="../../../images/socious-entrepreneurs.png"
                alt="socious app illustration"
                className="section-jobs__img-entrepreneurs--mobile"
                placeholder="blurred"
                loading="lazy"
                objectFit="contain"
            />
            <div className="section-jobs__img-entrepreneurs-paleblue-square"></div>
            <div className="section-jobs__img-entrepreneurs-purple-square"></div>
          </div>
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default JobsSection

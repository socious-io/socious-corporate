import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';

import { LinkSimple } from 'phosphor-react'
import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const JobsSection = (props) => {
  const location = useLocation();
  const jaPage = location.pathname.includes('/ja')

  const linkLanguageSelector = (pageUrl) => {
    return jaPage ? `/ja${pageUrl}` : pageUrl
  }

  return (
    <SimpleLocalize {...props}>
      <div className="jobs-section">
        <div className="jobs-header">
          <h2>
            <FormattedMessage
              id="careers-header-black-one"
            />
          <span style={{color: "#2669A0"}}>
            <FormattedMessage
              id="careers-header-blue"
            />
          </span>
            <FormattedMessage
              id="careers-header-black-two"
            />
          </h2>
          <p>
            <FormattedMessage
              id="careers-page-description"
            />
          </p>
        </div>

        <div className="jobs-list">
          <div className="jobs-list__header">
            <h2><i className="ph-map-pin"></i>{jaPage ? '東京' : 'Tokyo'}</h2>
          </div>
          <div className="jobs-list__item">
            <div className="job-title">
              <p><Link to={linkLanguageSelector("/careers/lead-developer")}><LinkSimple size={18} /> Lead Developer</Link></p>
            </div>
            <div className="job-department">
              <p>Engineering</p>
            </div>
            <div className="job-date">
              <p>06/10/2021</p>
            </div>
          </div>
          <div className="jobs-list__item">
            <div className="job-title">
              <p><Link to={linkLanguageSelector("/careers/senior-data-scientist")}><LinkSimple size={18} /> Senior Data Scientist</Link></p>
            </div>
            <div className="job-department">
              <p>Data Science / Machine Learning</p>
            </div>
            <div className="job-date">
              <p>15/10/2021</p>
            </div>
          </div>
          <div className="jobs-list__item">
            <div className="job-title">
              <p><Link to={linkLanguageSelector("/careers/lead-designer")}><LinkSimple size={18} /> Lead UI/UX Designer</Link></p>
            </div>
            <div className="job-department">
              <p>Design</p>
            </div>
            <div className="job-date">
              <p>05/12/2021</p>
            </div>
          </div>
          <div className="jobs-list__item">
            <div className="job-title">
              <p><Link to={linkLanguageSelector("/careers/talent-acquisition-lead")}><LinkSimple size={18} /> Talent Acquisition Lead</Link></p>
            </div>
            <div className="job-department">
              <p>Talent</p>
            </div>
            <div className="job-date">
              <p>17/12/2021</p>
            </div>
          </div>
          <div className="jobs-list__item">
            <div className="job-title">
              <p><Link to={linkLanguageSelector("/careers/cto")}><LinkSimple size={18} /> Chief Technology Officer (CTO)</Link></p>
            </div>
            <div className="job-department">
              <p>Engineering</p>
            </div>
            <div className="job-date">
              <p>30/12/2021</p>
            </div>
          </div>
          <div className="jobs-list__item">
            <div className="job-title">
              <p><Link to={linkLanguageSelector("/careers/executive-assistant")}><LinkSimple size={18} /> Executive Assistant</Link></p>
            </div>
            <div className="job-department">
              <p>Operations</p>
            </div>
            <div className="job-date">
              <p>07/01/2022</p>
            </div>
          </div>
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default JobsSection

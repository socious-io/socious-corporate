import React from 'react'

import { LinkSimple } from 'phosphor-react'
import { Link } from 'gatsby'

const JobsSection = () => {
  return (
    <div className="jobs-section">
      <div className="jobs-header">
        <h2>Join the Socious team and <span style={{color: "#2669A0"}}>make a difference</span> in the world</h2>
        <p>
          At Socious we're committed to bringing together change-makers and encouraging people to make a difference in the world. We're always on the lookout for exciting and ambitious talent to join our team and help us make the world a better place one act at a time.
        </p>
      </div>

      <div className="jobs-list">
        <div className="jobs-list__header">
          <h2><i className="ph-map-pin"></i> Tokyo</h2>
        </div>
        <div className="jobs-list__item">
          <div className="job-title">
            <p><Link to="/careers/senior-developer"><LinkSimple size={18} /> Senior Developer</Link></p>
          </div>
          <div className="job-department">  
            <p>Engineering</p>
          </div>
          <div className="job-date">
            <p>10/06/2021</p>
          </div>
        </div>
        <div className="jobs-list__item">
          <div className="job-title">
            <p><Link to="/careers/senior-data-scientist"><LinkSimple size={18} /> Senior Data Scientist</Link></p>
          </div>
          <div className="job-department">
            <p>Data Science / Machine Learning</p>
          </div>
          <div className="job-date">
            <p>10/15/2021</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default JobsSection

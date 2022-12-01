import React from 'react'
import { navigate } from 'gatsby'
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
          </h2>
          <p>
            <FormattedMessage
              id="careers-page-description"
            />
          </p>
          <br></br>
          <br></br>
          <button
            onClick={()=>{navigate("/app/organization/socious/projects")}}
            className='job-action__get '>
            <FormattedMessage
              id="see-open-roles"
            />
          </button>
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default JobsSection

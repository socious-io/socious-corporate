import React, {useState} from 'react'
import { useLocation } from '@reach/router';
import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";
import { Link } from 'gatsby'


const CompanySection = (props) => {
  const location = useLocation();

  const jaPage = location.pathname.includes('/ja')
  const linkLanguageSelector = (pageUrl) => {
    return jaPage ? `/ja${pageUrl}` : pageUrl
  }

  return (
    <SimpleLocalize {...props}>
      
        <div className="job-action">
          <div className="job-action__container">        
          <h2 className='job-action__header'>
           Join us!
          </h2>
          <p className='job-action__subtitle'>
          We are always on the look out for passionate and talented people
          </p>
          <button 
          className='job-action__get'>
            <Link to={linkLanguageSelector("/careers")} className="get-link">View Openings</Link>
          </button>

          </div>
        </div>
    </SimpleLocalize>
  )
}

export default CompanySection

import React from 'react'
import { useLocation } from '@reach/router';

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const IssueSection = (props) => {
  const location = useLocation();

  const jaPage = location.pathname.includes('/ja')

  return (
    <SimpleLocalize {...props}>
      <div className="xxs:!pt-[195px] mdp:!pt-[25px] issue-section" id="social-issues">

        {/* <div className="issue-banner__image"></div> */}
        <div className="!flex xxs:!flex-col xxs:!p-4 mdp:!flex-row mdp:!px-8 lg:!px-20 2xl:!px-96 !items-baseline issue-banner__content">
          <div className='issue-banner__content-one'>
            <FormattedMessage
              id="issue-section-body-one"
            />
            <br /><br />
            {jaPage ? <span>一方で、<b>94％の若者が自分のスキルを社会貢献に活かしたいと考えていますが、実際に行動に移せる人はわずか10％にすぎません。</b></span> : <span>The paradox is that <b>94% of young people declare wanting to use their skills for good, but only 10% are able to do so</b>.</span>}
            <br /><br />
            <FormattedMessage
              id="issue-section-body-three"
            />
          </div>
          <div className='issue-banner__content-two'>
            <FormattedMessage
              id="issue-section-body-four"
            />
            <br /><br />
            <FormattedMessage
              id="issue-section-body-five"
            />
          </div>
        </div>

        {/* {issues} */}
      </div>
    </SimpleLocalize>
  )
}

export default IssueSection

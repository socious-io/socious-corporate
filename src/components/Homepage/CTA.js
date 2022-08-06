import React from 'react'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

const Cta = (props) => {

  return (
    <SimpleLocalize {...props}>
        <div className="job-action">
          <h2 className='job-action__header'>
            <FormattedMessage
              id="call-to-action-job-header"
            />
          </h2>
          <button className='job-action__get'>
          <FormattedMessage
              id="get-socious"
            />
          </button>

          <p className='job-action__subtitle'>
            <FormattedMessage
              id="call-to-action-job-subtitle"
            />
          </p>

          <a className='job-action__link' href='https://www.notion.so/socious/Socious-Whitepaper-58fbe2c106f547898df42e409a00c73e#231ee8eab5384092a91d5fb4e114044e'>
          <FormattedMessage
              id="learn-more"
            />
          </a>
        </div>
    </SimpleLocalize>
  )
}

export default Cta

import React from 'react'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const AppLinks = (props) => {
  return (
    <SimpleLocalize {...props}>
      <div className="section-app-links">
        <div className="section-app-links__wrapper">
          <div className="section-app-links__container">
            <div className="section-app-links__header">
              <FormattedMessage
                id="app-links-header"
              />
            </div>
            <div className="section-app-links__subheader">
              <FormattedMessage
                id="app-links-subheader"
              />
            </div>
          </div>
          <div className="section-app-links__app-links-block">
            <div className="section-app-links__app-links">
              <a href="https://apps.apple.com/jp/app/socious/id1581904474" target="_blank" rel="noreferrer">
                <button className="section-app-links__app-links-button">
                  <AppleIcon sx={{ fontSize: 48 }} />
                </button>
              </a>
            </div>
            <div className="section-app-links__app-links">
              <a href="https://play.google.com/store/apps/details?id=com.dissocialnetwork" target="_blank" rel="noreferrer">
                <button className="section-app-links__app-links-button">
                  <AndroidIcon sx={{ fontSize: 48 }} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SimpleLocalize>
  )
}

export default AppLinks

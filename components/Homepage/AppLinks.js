import React from 'react'

import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const AppLinks = () => {
  return (
    <div className="section-app-links">
      <div className="section-app-links__wrapper">
        <div className="section-app-links__header">
          Experience the social impact ecosystem
        </div>
        <div className="section-app-links__subheader">
          Connect with like-minded people, find the right social enterprise, and contribute to solving social issues
        </div>
        <div className="section-app-links__app-links-block">
          <div className="section-app-links__app-links">
            <button className="section-app-links__app-links-button">
              <AppleIcon sx={{ fontSize: 48 }} />
            </button>
          </div>
          <div className="section-app-links__app-links">
            <button className="section-app-links__app-links-button">
              <AndroidIcon sx={{ fontSize: 48 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppLinks

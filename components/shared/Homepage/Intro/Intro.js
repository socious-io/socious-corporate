import * as React from 'react'
import EarlyAccessForm from './EarlyAccessForm'

const Intro = () => {
  return (
    <div className="app__container">
      <div className="section-intro">
        <div className="section-intro__block">
          <div className="section-intro__app-image"></div>
          <div className="section-intro__app-image-blue-square"></div>
          <div className="section-intro__app-image-paleblue-square"></div>
        </div>
        <EarlyAccessForm />
      </div>
    </div>
  )
}

export default Intro

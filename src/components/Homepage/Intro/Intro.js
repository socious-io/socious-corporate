import * as React from 'react'

import MobileImageBlock from './MobileImageBlock'
import EarlyAccessForm from './EarlyAccessForm'

const Intro = (props) => {
  return (
    <div className="section-intro">
      <MobileImageBlock />
      <EarlyAccessForm {...props} />
    </div>
  )
}

export default Intro

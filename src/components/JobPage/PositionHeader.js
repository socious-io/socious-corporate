import React from 'react'

const PositionHeader = (props) => {
  return (

    <div className="position-header">
      <div className="position-header__title">
        <h1>{props.title}</h1>
      </div>
      <div className="position-header__content">
        <p>{props.location}</p>
        <p>{props.department}</p>
      </div>
    </div>
  )
}

export default PositionHeader

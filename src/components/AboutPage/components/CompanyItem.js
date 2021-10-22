import React from 'react'

const CompanyItem = (props) => {
  return (
    <div className="content-row">
      <div className="content-title">
        <p>{props.title}</p>
      </div>
      <div className="content-info">
        <p>{props.info}</p>
      </div>
    </div>
  )
}

export default CompanyItem

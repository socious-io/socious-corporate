import React from 'react'

const ValueItem = (props) => {
  return (
    <div className="values-item">
      <h3>{props.header}</h3>
      <p>{props.content}</p>
    </div>
  )
}

export default ValueItem

import React from "react";

const ContactItem = (props) => {
  return (
    <div className="contact-column">
      <h4>{props.header}</h4>
      <p>{props.content}</p>
    </div>
  )
}

export default ContactItem

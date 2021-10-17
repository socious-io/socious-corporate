import * as React from 'react'
import { Mailchimp } from 'react-mailchimp-form'

const EarlyAccessForm = () => {
  return (
      <Mailchimp 
      action="https://socious.us6.list-manage.com/subscribe/post?u=131eb0c7f6b2c3a36daf52940&amp;id=521f139131"
      className="validate"
      target="_blank"
      method="post"
      id="mc-embedded-subscribe-form"
      fields={[
        {
          name: "FNAME",
          type: "text",
          id: "mce-FNAME",
        },
        {
          name: "EMAIL",
          type: "email",
          id: "mce-EMAIL",
        },
      ]}
    />
  )
}

export default EarlyAccessForm

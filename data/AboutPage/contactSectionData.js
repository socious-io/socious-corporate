import React from "react"

import { Envelope } from "phosphor-react";

const contactItems = [
  {
    id: 1,
    header: 'General Inquiries',
    content: 'info@socious.io'
  },
  {
    id: 3,
    header: 'For more information',
    content: <a href="https://us6.list-manage.com/contact-form?u=131eb0c7f6b2c3a36daf52940&form_id=8ac2ed4e02b1104cad3be462bb898bb4"><Envelope size={18} /> Drop us a message</a>
  }
]

export default contactItems

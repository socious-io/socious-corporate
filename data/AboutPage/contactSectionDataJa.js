import React from "react"

import { Envelope } from "phosphor-react";

const contactItemsJa = [
  {
    id: 1,
    header: '一般的なお問い合わせ',
    content: 'info@socious.io'
  },
  {
    id: 2,
    header: '本社',
    content: '〒103-0027 東京都中央区日本橋3丁目2番14号1階'
  },
  {
    id: 3,
    header: 'お問い合わせ',
    content: <a href="https://us6.list-manage.com/contact-form?u=131eb0c7f6b2c3a36daf52940&form_id=8ac2ed4e02b1104cad3be462bb898bb4"><Envelope size={18} />  メールを送る</a>
  }
]

export default contactItemsJa

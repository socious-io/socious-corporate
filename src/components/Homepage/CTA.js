import React, { useState } from 'react'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";
import BasicModal from '../shared/QR-Modal';

const Cta = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SimpleLocalize {...props}>
      <div className="!py-[5px] job-action xxs:!mt-10">
        <div className="!p-[35px] !w-full job-action__container">
          <h2 className='job-action__header mb-5'>
            <FormattedMessage
              id="call-to-action-job-header"
            />
          </h2>
          <button
            onClick={handleOpen}
            className='job-action__get !mb-4'>
            <FormattedMessage
              id="get-socious"
            />
          </button>

          <p className='job-action__subtitle'>
            <FormattedMessage
              id="call-to-action-job-subtitle"
            />
          </p>

          <a className='job-action__link' 
          target="_blank"
          href='https://www.notion.so/socious/Socious-Whitepaper-58fbe2c106f547898df42e409a00c73e#231ee8eab5384092a91d5fb4e114044e'>
            <FormattedMessage
              id="learn-more"
            />
          </a>
        </div>
      </div>
      <BasicModal open={open} handleClose={handleClose} />
    </SimpleLocalize>
  )
}

export default Cta

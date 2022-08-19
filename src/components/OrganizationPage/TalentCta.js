import React, {useState} from 'react'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";
import BasicModal from '../shared/QR-Modal';


const TalentCta = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SimpleLocalize {...props}>
      <div className='hire'>
        <div className="hire-action">
          <div className="hire-action__container">        
          <h2 className='hire-action__header'>
            <FormattedMessage
              id="call-to-action-job-header"
            />
          </h2>
          <button 
          onClick={handleOpen}
          className='hire-action__get'>
          <FormattedMessage
              id="get-socious"
            />
          </button>

          <p className='hire-action__subtitle'>
            <FormattedMessage
              id="call-to-action-job-subtitle"
            />
          </p>

          <a className='hire-action__link'
          target="_blank"
          href='https://www.notion.so/socious/Socious-Whitepaper-58fbe2c106f547898df42e409a00c73e#231ee8eab5384092a91d5fb4e114044e'>
          <FormattedMessage
              id="learn-more"
            />
          </a>
          </div>
        </div>
        </div>
        <BasicModal open={open} handleClose={handleClose}/>
    </SimpleLocalize>
  )
}

export default TalentCta

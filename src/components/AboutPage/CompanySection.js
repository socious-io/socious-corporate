import React, {useState} from 'react'

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";
import BasicModal from '../shared/QR-Modal';

const CompanySection = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SimpleLocalize {...props}>
      
        <div className="job-action">
          <div className="job-action__container">        
          <h2 className='job-action__header'>
           Join us!
          </h2>
          <p className='job-action__subtitle'>
          We are always on the look out for passionate and talented people
          </p>
          <button 
          // onClick={handleOpen}
          className='job-action__get'>
         View Openings
          </button>

          </div>
        </div>
        <BasicModal open={open} handleClose={handleClose}/>
    </SimpleLocalize>
  )
}

export default CompanySection

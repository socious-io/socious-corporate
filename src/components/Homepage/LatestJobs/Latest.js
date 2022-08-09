import React, {useState} from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BasicModal from '../../shared/QR-Modal';

const Latest = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const image = getImage(props.imageOpt)

  return (
    <div className="latest-item" >
      <div className="latest-image">
        <GatsbyImage image={image} alt={props.imageAlt} />
      </div>
      <div className="latest-info">
        <div className="latest-header"> 
            {props.role}
        </div>
        <div className="latest-content">
          <p>
            {props.company}
          </p>
        </div>
        <div className="latest-content">
        
            {props.location}
          
        </div>
      </div>
          <button onClick={handleOpen} className="latest-link">View &rarr;</button>          
       
      <BasicModal open={open} handleClose={handleClose}/>
    </div>
  )
}

export default Latest

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CloseIcon from '@mui/icons-material/Close';




export default function BasicModal({open, handleClose}) {
  const { qrImage } = useStaticQuery(
    graphql`
      query {
        qrImage: file(relativePath: {eq: "qr-code.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 100,
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(qrImage)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"

      >
        <Box className="job-action__modal">
          <Button onClick={handleClose} className="job-action__modal-close"><CloseIcon/></Button>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='job-action__modal-header'>
          Scan the code below with your phone to download the Socious app
          </Typography>
          <Box className='job-action__modal-image-holder'>
          <GatsbyImage image={pluginImage} alt="qr-code"  className='job-action__modal-image'/>

          </Box>
          
         
        </Box>
      </Modal>
    </div>
  );
}

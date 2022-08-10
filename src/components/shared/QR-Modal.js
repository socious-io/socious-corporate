import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
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
       
          <Box className='job-action__modal-image-holder'>
          <GatsbyImage image={pluginImage} alt="qr-code"  className='job-action__modal-image'/>

          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='job-action__modal-header'>
          Scan this code with your phone to download the Socious app, or directly click the links below <br/>

          
          </Typography>
          <div className="job-action-links__app-links-block">
              <div className="job-action-links__app-links">
                <a
                  href="https://apps.apple.com/jp/app/socious/id1581904474"
                  target="_blank"
                  rel="noreferrer"
                >
                    <StaticImage
                      src="../../../images/apple.png"
                      alt="Download on Appstore"
                      loading="eager"
                      objectFit="cover"
                      width={180}
                    />
                </a>
              </div>
              <div className="job-action-links__app-links playstore">
                <a
                  href="https://play.google.com/store/apps/details?id=com.dissocialnetwork"
                  target="_blank"
                  rel="noreferrer"
                >
                    <StaticImage
                      src="../../images/google-logo.png" 
                      alt="Get it on Google Play"
                      loading="eager"
                      objectFit="cover"
                      width={150}
                    />
                </a>
              </div>
            </div>
          
         
        </Box>
      </Modal>
    </div>
  );
}

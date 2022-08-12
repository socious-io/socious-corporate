import React, { useState } from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BasicModal from '../../shared/QR-Modal';
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
  padding: 2rem;
  background: #ffffff;
  border-radius: 20px;
  border-top: rgba(10, 10, 10, 0.8);
  box-shadow: 0px 0px 2px rgba(45, 45, 45, 0.2), 0px 1px 3px rgba(45, 45, 45, 0.16), 0px 2px 4px rgba(45, 45, 45, 0.12);

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const JobInfo = styled.div`
  display: flex;
  width: 100%;

  .company-image {
    max-width: 100px;
    width: 100px;
    height: 100px;
  }

  .company-details {
    padding: 12px 12px 12px 24px;
    width: 100%;
  }

  .company-details .job-role {
    font-weight: bold;
  }

  .job-opening-info {
    display: none;
  }

  @media (min-width: 600px) {
    .job-opening-info {
      display: flex;
    }

    .company-image {
      max-width: 130px;
      width: 130px;
      height: 130px;
    }
  }
`

const JobOpeningInfo = styled.div`
  margin-top: 8px;

  @media (min-width: 600px) {
    display: none;
  }
`

const Latest = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const image = getImage(props.imageOpt)

  return (
    <JobContainer>
      <JobInfo>
        <div className="company-image">
          <GatsbyImage image={image} alt={props.imageAlt} />
        </div>
        <div className="company-details">
          <div className="job-role">
            {props.role}
          </div>
          <div className="">
            <p>
              {props.company}
            </p>
          </div>
          <div className='job-opening-info' style={{ marginTop: 8 }}>
            {props.location}
          </div>
        </div>
      </JobInfo>

      <JobOpeningInfo>
        {props.location}
      </JobOpeningInfo>
      <button onClick={handleOpen} className="latest-link">View &rarr;</button>

      <BasicModal open={open} handleClose={handleClose} />
    </JobContainer>
  )
}

export default Latest

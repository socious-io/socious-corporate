import React, {useState} from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import SimpleLocalize from "../../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import Latest from "./Latest";
import latestJobs from "../../../../data/Homepage/latestJobs";
import BasicModal from "../../shared/QR-Modal";


const LatestJobs = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = useStaticQuery(graphql`
    query LatestJobs {
      partnerships: file(relativePath: {eq: "latest-jobs/cdp.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      habitat: file(relativePath: {eq: "latest-jobs/habibat.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      developer: file(relativePath: {eq: "latest-jobs/roi.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      designer: file(relativePath: {eq: "latest-jobs/zearn.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      nutritionist: file(relativePath: {eq: "latest-jobs/wfp.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      producer: file(relativePath: {eq: "latest-jobs/prosperity.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
    }
  `)

  const { partnerships, habitat, developer, designer,nutritionist, producer } = data
  const latestImages = [partnerships, habitat, developer, designer,nutritionist, producer]

  const { language } = props.pageContext
  const latestJobComponentLanguageSelector = language === 'ja' ? latestJobs : latestJobs


  const latestComponents = latestJobComponentLanguageSelector.map(item => 
    <Latest
      key={item.id}
      imageOpt={latestImages[item.id - 1]}
      imageAlt={item.imageAlt}
      role={item.role}
      company={item.company}
      location={item.location}
    />
  )
  
  return (
    <SimpleLocalize {...props}>
      <section className="latest-section-main">
        <div className="latest-title" id="what-we-do">
          <h2>
            <FormattedMessage
              id="latest-jobs"
            />
          </h2>
        </div>

        <div className="latest-section">
          {latestComponents}
        </div>
        <button onClick={handleOpen} className="latest-more">View more jobs</button>   

      </section>
      <BasicModal open={open} handleClose={handleClose}/>
    </SimpleLocalize>
  )
}

export default LatestJobs

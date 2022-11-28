import React, {useState} from 'react';
import BasicModal from '../../shared/QR-Modal';
import { graphql, useStaticQuery } from 'gatsby';
import { BgImage } from 'gbimage-bridge';
import SimpleLocalize from '../../shared/SimpleLocalize';
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';
import { trackButtonClick } from '../../segmentUtils';
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image";


const Intro = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { introBackgroundImage, allWpSupportedBy } = useStaticQuery(
    graphql`
      query {
        introBackgroundImage: file(relativePath: {eq: "homepage-banner-mobile.webp"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 100,
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
        allWpSupportedBy {
          nodes {
            featuredImage {
              node {
                sourceUrl
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 100
                      placeholder: BLURRED
                      blurredOptions: {width: 100}
                    )
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  // wpcontent {
        //   supportedByList (first: 20) {
        //     nodes {
        //       featuredImage {
        //         node {
        //           sourceUrl
        //           imageFile {
        //             childImageSharp {
        //               gatsbyImageData(
        //                 width: 200
        //                 height: 200
        //                 quality: 100
        //                 placeholder: BLURRED
        //                 blurredOptions: {width: 100}
        //               )
        //             }
        //           }
        //         }
        //       }
        //     }
        //   }
        // }

  const pluginImage = getImage(introBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    // `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))`,
    `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))`,
  ].reverse();

  const intl = useIntl();

  const jaPage = intl.locale === 'ja';
  const organizationLink = jaPage ? '/ja/organization' : '/organization';


  const supportedByList = (allWpSupportedBy?.nodes || []).map((member, index) => {
    const image = getImage(member.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
    return <GatsbyImage className="section-supported-by__item" key={index} id={index} image={image} alt={member.featuredImage.node.sourceUrl} />
  })


  return (
    <SimpleLocalize {...props}>
      <BgImage image={backgroundFluidImageStack} className="section-intro" alt='home banner'>
        <div className="intro-banner__text pt-40">
          <h1>
            <FormattedMessage
              id="intro-hero-title"
            />
          </h1>
          <h3>
            <FormattedMessage
              id="intro-hero-subtitle"
            /></h3>

          <div className="section-app-links__app-links-block">
            <div className="section-app-links__app-links">
                <button
                  className="section-app-links__app-links-button-work"
                  onClick={(event) => {handleOpen(); trackButtonClick(event);}}
                >
                  Find missions
                </button>
            </div>
            <div className="section-app-links__app-links">
              <a
                href={organizationLink}
                rel="noreferrer"
                onClick={trackButtonClick}
              >
                <button className="section-app-links__app-links-button">
                  Hire talent
                </button>
              </a>
            </div>
          </div>
          <div className="section-supported-by">
            <p>Supported by</p>
            <br></br>
            <div className="section-supported-by__list">
              {supportedByList}
            </div>
          </div>
        </div>
      </BgImage>
      <BasicModal open={open} handleClose={handleClose} />
    </SimpleLocalize>
  )
}

export default Intro

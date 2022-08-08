import React from "react";
import { graphql, useStaticQuery } from "gatsby";


import SimpleLocalize from "../../shared/SimpleLocalize";
import TalentItem from "./Talents";
import talentPools from "../../../../data/OrganizationPage/talents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from "react-intl";

const TalentSection = (props) => {
  const data = useStaticQuery(graphql`
    query TalentSection {
      copywrite: file(relativePath: {eq: "talents/copywrite.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      dataScience: file(relativePath: {eq: "talents/data-scientist.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      finance: file(relativePath: {eq: "talents/finance-analyst.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      graphic: file(relativePath: {eq: "talents/graphic-designer.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      marketer: file(relativePath: {eq: "talents/marketer.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      product: file(relativePath: {eq: "talents/product-manager.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      recruiter: file(relativePath: {eq: "talents/recruiter.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      designer: file(relativePath: {eq: "talents/ui-ux-designer.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      editor: file(relativePath: {eq: "talents/video-editor.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      web: file(relativePath: {eq: "talents/web-dev.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
    }
  `)

  const {
    copywrite,
    finance,
    graphic,
    marketer,
    dataScience,
    product, 
    recruiter,
    designer,
    editor,
    web

 } = data
 
  const talentImages = [copywrite,
    finance,
    graphic,
    marketer,
    dataScience,
    product, 
    recruiter,
    designer,
    editor,
    web]

    const settings={
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 3,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      variableWidth: false,
      cssEase: "linear"
    }

    const { language } = props.pageContext
    const talentComponentLanguageSelector = language === 'ja' ? talentPools : talentPools

  const talentsComponents = talentComponentLanguageSelector.map(item => 
    <TalentItem
      key={item.id}
      imageOpt={talentImages[item.id - 1]}
      imageAlt={item.imageAlt}
    />
  )
  
  return (
    <SimpleLocalize {...props}>
      <section className="talents-section">
        <div className="talents-header">
          <h3>Hire <span>1400+ </span>impact talents</h3>
        </div>
        <div className="talents-section-slider">
        <Slider {...settings} className="talents-slider">
          {talentsComponents}
          </Slider>
        </div>
      
      </section>
    </SimpleLocalize>
  )
}

export default TalentSection

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import SimpleLocalize from "../shared/SimpleLocalize";
import { FormattedMessage } from "react-intl";

import AboutItem from "./components/AboutItem";
import aboutItems from "../../../data/AboutPage/aboutSectionData";
import aboutItemsJa from "../../../data/AboutPage/aboutSectionDataJa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AboutSection = (props) => {
  const data = useStaticQuery(graphql`
    query AboutSection {
      diversity: file(relativePath: {eq: "Illustration_Diversity_Inclusion_Belonging.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      life: file(relativePath: {eq: "Illustration_Life-First.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      performance: file(relativePath: {eq: "Illustration_high_performance.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      autonomy: file(relativePath: {eq: "Illustration_autonomy.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      candor: file(relativePath: {eq: "illustration_candor.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
    }
  `)

  const { diversity, life, performance,autonomy, candor } = data
  const aboutImages = [diversity, life, performance,autonomy, candor]

  const { language } = props.pageContext
  const aboutComponentLanguageSelector = language === 'ja' ? aboutItemsJa : aboutItems

  const settings={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }


  const aboutComponents = aboutComponentLanguageSelector.map(item => 
    <AboutItem
      key={item.id}
      imageOpt={aboutImages[item.id - 1]}
      imageAlt={item.imageAlt}
      header={item.header}
      content={item.content}
    />
  )
  
  return (
    <SimpleLocalize {...props}>
      <section className="about-section-main">
        <div className="about-title" id="what-we-do">
          <h2>
            <FormattedMessage
              id="values-title"
            />
          </h2>
          <p>
            <FormattedMessage
              id="values-description"
            />
          </p>
        </div>

        <div className="about-section">
           {/* <Slider {...settings} className="skills-slider"> */}
          {aboutComponents}
          {/* </Slider> */}
        </div>
      </section>
    </SimpleLocalize>
  )
}

export default AboutSection

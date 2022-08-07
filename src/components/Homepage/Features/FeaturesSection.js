import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import SimpleLocalize from "../../shared/SimpleLocalize";

import Feature from "./Features";
import features from "../../../../data/Homepage/features";
import featuresJa from "../../../../data/Homepage/featuresJa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cta from "../CTA";





const FeaturesSection = (props) => {
  const data = useStaticQuery(graphql`
    query FeatureSection {
      projects: file(relativePath: {eq: "gif/projects.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      hired: file(relativePath: {eq: "gif/hired.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      impact: file(relativePath: {eq: "gif/impact.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      payment: file(relativePath: {eq: "gif/payment.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
    }
  `)

  const {project, hired, impact, payment} = data
  const featureImages = [project, hired, impact, payment]

  console.log(data);
  const settings={
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    fade:true,
    speed: 2000,
    autoplaySpeed: 3000,
  }

  const { language } = props.pageContext

  const languageSelector = language === 'ja' ? featuresJa : features

  const featureItems = languageSelector.map(feature => 
   
      <Feature
        gifOpt={featureImages[feature.id-1]}
        slide={feature.slide}
        key={feature.id}
        title={feature.title}
        subtitle={feature.subtitle}
        link={feature.link}
        linkUrl={feature.linkUrl}
      />
    
  )

  
  return (
    <SimpleLocalize {...props}>
      
      <div className="section-features">
      <Slider {...settings} className="section-features__list-slider">
            {featureItems}
        </Slider>
      </div>
      <Cta {...props}/>
    
    </SimpleLocalize>
  )
}

export default FeaturesSection

import React, { useEffect, createRef, useCallback } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { useInView } from "react-intersection-observer";
import SimpleLocalize from "../../shared/SimpleLocalize";

import Feature from "./Features";
import features from "../../../../data/Homepage/features";
import featuresJa from "../../../../data/Homepage/featuresJa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cta from "../CTA";


const FeaturesSection = (props) => {
  const { ref: areaSlide, inView: areaSlideVisible, entry } = useInView();
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

  const { projects, hired, impact, payment } = data
  const featureImages = [projects, hired, impact, payment]

  const settings = {
    dots: false,
    vertical: true,
    fade: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = createRef();
  const scroll = useCallback(
    y => {
      if (y > 50 && areaSlideVisible) {
        return sliderRef?.current?.slickNext(); /// ? <- using description below 
      } else {
        return sliderRef?.current?.slickPrev();
      }
    },
    [sliderRef]
  );
  useEffect(() => {
    window.addEventListener("wheel", e => {
      scroll(e.deltaY);
    });
  }, [scroll]);

  const { language } = props.pageContext

  const languageSelector = language === 'ja' ? featuresJa : features

  const featureItems = languageSelector.map(feature =>

    <Feature
      gifOpt={featureImages[feature.id - 1]}
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

      <main class="max-h-screen overflow-y-scroll overflow-x-hidden snap snap-y snap-mandatory">
        {featureItems}
      </main>



      <Cta {...props} />

    </SimpleLocalize>
  )
}

export default FeaturesSection

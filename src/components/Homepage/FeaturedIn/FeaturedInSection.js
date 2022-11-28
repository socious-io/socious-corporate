import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";


import SimpleLocalize from "../../shared/SimpleLocalize";
import FeaturedInItem from "./FeaturedInItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FeaturedInSection = (props) => {

  const data = useStaticQuery(graphql`
    query FeaturedInSection {
      allWpAsSeenIn {
        nodes {
          featuredImage {
            node {
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    height: 150
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
  `)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // centerMode: true,
    slidesToShow: (data?.allWpAsSeenIn?.nodes || []).length > 6 ? 6 : ((data?.allWpAsSeenIn?.nodes || []).length > 1 ? (data?.allWpAsSeenIn?.nodes || []).length-1 : 1 ),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerMode: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
          centerMode: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          arrows: false,
        }
      }
    ]
  }

  const skillImages = (data?.allWpAsSeenIn?.nodes || []).map(item =>item.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
  const skillsItems = (data?.allWpAsSeenIn?.nodes || []).map((item, index) =>
    {
      return {
        imageAlt: item.featuredImage.node.sourceUrl, 
        id:index+1
      }
    }
  )

  console.log("skillsItems")
  console.log(skillsItems)

  const skillsComponents = skillsItems.map(item =>
    <FeaturedInItem
      key={item.id}
      imageOpt={skillImages[item.id - 1]}
      imageAlt={item.imageAlt}
    />
  )

  return (
    <SimpleLocalize {...props}>
      {(data?.allWpAsSeenIn?.nodes || []).length > 0 ?
      <section className="skills-section">
        <div className="featured-in-header">
          As seen in
        </div>
        <div className="skills-section-slider">
          <Slider {...settings} className="skills-slider">
            {skillsComponents}
          </Slider>
        </div>
      </section>
    : <></>}
    </SimpleLocalize>
  )
}

export default FeaturedInSection

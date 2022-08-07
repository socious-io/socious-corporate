import React from "react";
import { graphql, useStaticQuery } from "gatsby";


import SimpleLocalize from "../../shared/SimpleLocalize";
import SkillItem from "./Skills";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import skillsItems from "../../../../data/Homepage/skills";

const SkillSection = (props) => {
  const data = useStaticQuery(graphql`
    query SkillSection {
      climate: file(relativePath: {eq: "climate.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      sustainability: file(relativePath: {eq: "sustainability.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      gender: file(relativePath: {eq: "gender-equality.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      refugees: file(relativePath: {eq: "refugees.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      waste: file(relativePath: {eq: "zero-waste.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      blackLives: file(relativePath: {eq: "black-lives.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      childProtection: file(relativePath: {eq: "child-protection.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      animalRights: file(relativePath: {eq: "animal-rights.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      bioDiversity: file(relativePath: {eq: "biodiversity.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      community: file(relativePath: {eq: "community-dev.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
    }
  `)

  const { climate,
sustainability,
gender,
refugees,
waste,
blackLives,
childProtection,
animalRights,
bioDiversity,
community
 } = data
 
  const skillImages = [climate,
    sustainability,
    gender,
    refugees,
    waste,
    blackLives,
    childProtection,
    animalRights,
    bioDiversity,
    community]

    const settings={
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    }

  const skillsComponents = skillsItems.map(item => 
    <SkillItem
      key={item.id}
      imageOpt={skillImages[item.id - 1]}
      imageAlt={item.imageAlt}
    />
  )
  
  return (
    <SimpleLocalize {...props}>
      <section className="skills-section">
        <div className="skills-header">
          Use your skills for
        </div>
        <div className="skills-section-slider">
        {/* <Slider {...settings} className="skills-slider"> */}
          {skillsComponents}
          {/* </Slider> */}
        </div>
      </section>
    </SimpleLocalize>
  )
}

export default SkillSection

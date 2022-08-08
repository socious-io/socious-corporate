import React, {useState} from "react";
import { graphql, useStaticQuery } from "gatsby";


import SimpleLocalize from "../../shared/SimpleLocalize";
import SkillItem from "./Skills";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import skillsItems from "../../../../data/Homepage/skills";
import { FormattedMessage } from "react-intl";
import BasicModal from "../../shared/QR-Modal";

const SkillSection = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = useStaticQuery(graphql`
    query SkillSection {
      climate: file(relativePath: {eq: "skills/climate.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            height:700
            webpOptions: {quality: 100}
            placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      sustainability: file(relativePath: {eq: "skills/sustainability.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            height:700
            webpOptions: {quality: 100}
            placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      gender: file(relativePath: {eq: "skills/gender-equality.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            height:700
            webpOptions: {quality: 100}
            placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      refugees: file(relativePath: {eq: "skills/refugees.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            height:700
            webpOptions: {quality: 100}
            placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      waste: file(relativePath: {eq: "skills/zero-waste.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            height:700
            webpOptions: {quality: 100}
            placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      blackLives: file(relativePath: {eq: "skills/black-lives.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            height:700
            webpOptions: {quality: 100}
            placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      childProtection: file(relativePath: {eq: "skills/child-protection.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            height:700
            webpOptions: {quality: 100}
            placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      animalRights: file(relativePath: {eq: "skills/animal-rights.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            height:700
            webpOptions: {quality: 100}
            placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      bioDiversity: file(relativePath: {eq: "skills/biodiversity.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            height:700
            webpOptions: {quality: 100}
            placeholder: BLURRED, blurredOptions: {width: 100})
        }
      }
      community: file(relativePath: {eq: "skills/community-dev.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            height:700
            webpOptions: {quality: 100}
            placeholder: BLURRED, blurredOptions: {width: 100})
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
      slidesToShow: 6,
      slidesToScroll: 3,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      variableWidth: false,
      cssEase: "linear"
    }

    const { language } = props.pageContext
    const skillComponentLanguageSelector = language === 'ja' ? skillsItems : skillsItems

  const skillsComponents = skillComponentLanguageSelector.map(item => 
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
        <Slider {...settings} className="skills-slider">
          {skillsComponents}
          </Slider>
        </div>
        <div className="skills-section-career">
          <FormattedMessage
          id="careers-header-black-one"/>

          <br/><br/>
          <button
          onClick={handleOpen} >
            <FormattedMessage
          id="get-socious"
          /></button>
        </div>
      </section>
      <BasicModal open={open} handleClose={handleClose}/>
    </SimpleLocalize>
  )
}

export default SkillSection

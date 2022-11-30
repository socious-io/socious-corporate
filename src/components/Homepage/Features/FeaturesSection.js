import React from "react";
import { useInView } from "react-intersection-observer";

import Feature from "./Features";
import features from "../../../../data/Homepage/features";
import featuresJa from "../../../../data/Homepage/featuresJa";
import gif0 from "../../../images/gif-mp4/0.mp4"
import gif1 from "../../../images/gif-mp4/1.mp4"
import gif2 from "../../../images/gif-mp4/2.mp4"
import gif3 from "../../../images/gif-mp4/3.mp4"
// import gif0 from "../../../images/gif-webp/0.webp"
// import gif1 from "../../../images/gif-webp/1.webp"
// import gif2 from "../../../images/gif-webp/2.webp"
// import gif3 from "../../../images/gif-webp/3.webp"
// import gif0 from "../../../images/gif-new/0.gif"
// import gif1 from "../../../images/gif-new/1.gif"
// import gif2 from "../../../images/gif-new/2.gif"
// import gif3 from "../../../images/gif-new/3.gif"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  
`

const SlideContainer = styled.div`
  display: flex;
  height: 300vh;
  width: 100%;
  max-width: 900px;
  object-fit: contain;
  z-index: 2;
  

  @media (max-width: 600px) {
    flex-direction: column;
    height: 500vh;
  }
`

const SlideImg = styled.div`
  display: flex;
  width: 50%;
  height: calc(100vh);
  z-index: 2;
  position: sticky;
  top: 0;
  opacity: 0;
  transform: translate(0px, 10%);
  transition: opacity 1s ease 0.3s, transform 1s ease;
  opacity: 1;
  transform: translate(0px, 0px);
  margin: 0 64px 128px 0;

  @media only screen and (max-width: 600px) {
    margin: 0;
    width: 100%;
    height: 50vh;
    z-index: 5;
  }
`

const SlideText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 20px;
    div:first-child {
      padding-top: 20px !important;
    }

    div:last-child {
      padding-bottom: 0 !important;
    }
  }
`

const SlideTextContent = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    padding-top: 10vh;
    height: 100vh;
  }
`

const SlideTextContentMobile = styled(motion.div)`
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    height: 50vh;
    background: red;
  }
`

const ImageContainer = styled(motion.div)`
  position: absolute;
  top: calc(50% - 224.5px);
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;

  @media only screen and (max-width: 600px) {
    padding: 30px 20px 0 20px;
    top: 0;
    height: 100vh;
  }
`

const contentVariants = {
  visible: {
    opacity: 1,
    scale: 1
  },
  hidden: {
    opacity: 0,
    scale: .1
  }
}

const SlideImgChild = styled.div`
  padding-top: 0;
  background: white;
  position: relative;
  width: 100%;
`

const FeaturesSection = (props) => {
  const gifs = [gif0, gif1, gif2, gif3];
  const { language } = props.pageContext

  const { ref: ref1, inView: inView1 } = useInView({ threshold: .5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: .5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: .5 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: .5 });

  const refsArray = [ref1, ref2, ref3, ref4]
  const inViewArray = [inView1, inView2, inView3, inView4]

  const featuresListInitial = language === 'ja' ? featuresJa : features

  const featuresList = featuresListInitial.map((feature, index) => {
    return {
      ...feature,
      ref: refsArray[index],
      inView: inViewArray[index],
    }
  })

  return (

    <Container>
      <SlideContainer>
        <SlideImg>
          <SlideImgChild>
            <ImageContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .4 }}
            >
              
              {gifs?.map((path,index) => {
                return (
                  <video loop autoPlay muted playsinline
                    style={{ 
                      margin: 'auto',
                      display: inViewArray.indexOf(true) == index || 0? '':'none'
                    }}
                    height={500}
                    width={500}
                  >
                  <source src={path} type="video/mp4" />
                  </video>
                )
              })}
              
            </ImageContainer>
          </SlideImgChild>
        </SlideImg>
        <SlideText>
          {featuresList?.map((feature, index) => {
            return (
              <SlideTextContent
                ref={feature.ref}
                initial={contentVariants.hidden}
                whileInView={contentVariants.visible}
                transition={{ duration: .4 }}
                viewport={{ once: false, amount: .6 }}
                style={{
                  paddingTop: index === 0 ? 'calc(40vh)' : 0,
                  paddingBottom: index === featuresList?.length - 1 ? 'calc(50vh)' : 0
                }}
              >
                <Feature feature={feature} />
              </SlideTextContent>
            )
          })}
        </SlideText>
      </SlideContainer>
    </Container>
  )
}

export default FeaturesSection

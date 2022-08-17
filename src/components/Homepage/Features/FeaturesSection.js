import React, { useEffect, createRef, useCallback } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { useInView } from "react-intersection-observer";
import SimpleLocalize from "../../shared/SimpleLocalize";

import Feature from "./Features";
import features from "../../../../data/Homepage/features";
import featuresJa from "../../../../data/Homepage/featuresJa";
import gif0 from "../../../images/gif-new/0.gif"
import gif1 from "../../../images/gif-new/1.gif"
import gif2 from "../../../images/gif-new/2.gif"
import gif3 from "../../../images/gif-new/3.gif"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cta from "../CTA";
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { InView } from "react-intersection-observer";

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
  height: 400vh;
  width: 100%;
  max-width: 900px;
  z-index: 2;


  @media only screen and (max-width: 600px) {
    flex-direction: column;
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
  margin: 64px 64px 128px 0;
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
  }
`

const SlideTextContent = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const SlideTextContentMobile = styled(motion.div)`
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  top: calc(50% - 224.5px);
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
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

const FeaturesSection = (props) => {
  const gifs = [gif0, gif1, gif2, gif3]
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
          <div className="relative w-full" style={{ paddingTop: '100%' }}>
            <ImageContainer>
              <img
                style={{ margin: 'auto' }}
                src={gifs[inViewArray.indexOf(true)]}
                height={500}
              />
              {featuresList?.map((feature, index) => {
                return (
                  <SlideText>
                    <SlideTextContentMobile
                      ref={feature.ref}
                      initial={contentVariants.hidden}
                      whileInView={contentVariants.visible}
                      transition={{ duration: .4 }}
                      viewport={{ once: false, amount: .6 }}
                      style={{
                        paddingTop: index === 0 ? 'calc(40%)' : 0,
                        paddingBottom: index === featuresList?.length - 1 ? 'calc(60%)' : 0
                      }}
                    >
                      <Feature feature={feature} />
                    </SlideTextContentMobile>
                  </SlideText>
                )
              })}
            </ImageContainer>
          </div>
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
                  paddingTop: index === 0 ? 'calc(40%)' : 0,
                  paddingBottom: index === featuresList?.length - 1 ? 'calc(60%)' : 0
                }}
              >
                <Feature feature={feature} />
              </SlideTextContent>
            )
          })}
        </SlideText>
      </SlideContainer>
      <Cta {...props} />
    </Container>
  )
}

export default FeaturesSection

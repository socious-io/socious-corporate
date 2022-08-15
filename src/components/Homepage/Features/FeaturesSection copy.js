// import React, { useEffect, createRef, useCallback } from "react";
// import { StaticImage } from "gatsby-plugin-image";
// import { graphql, useStaticQuery } from "gatsby";
// import { useInView } from "react-intersection-observer";
// import SimpleLocalize from "../../shared/SimpleLocalize";

// import Feature from "./Features";
// import features from "../../../../data/Homepage/features";
// import featuresJa from "../../../../data/Homepage/featuresJa";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Cta from "../CTA";


// const FeaturesSection = (props) => {
//   const { ref: areaSlide, inView: areaSlideVisible, entry } = useInView();
//   const data = useStaticQuery(graphql`
//     query FeatureSection {
//       projects: file(relativePath: {eq: "gif/projects.png"}) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
//         }
//       }
//       hired: file(relativePath: {eq: "gif/hired.png"}) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
//         }
//       }
//       impact: file(relativePath: {eq: "gif/impact.png"}) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
//         }
//       }
//       payment: file(relativePath: {eq: "gif/payment.png"}) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
//         }
//       }
//     }
//   `)

//   const { projects, hired, impact, payment } = data
//   const featureImages = [projects, hired, impact, payment]

//   const settings = {
//     dots: false,
//     vertical: true,
//     fade: false,
//     speed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const sliderRef = createRef();
//   const scroll = useCallback(
//     y => {
//       if (y > 50 && areaSlideVisible) {
//         return sliderRef?.current?.slickNext(); /// ? <- using description below 
//       } else {
//         return sliderRef?.current?.slickPrev();
//       }
//     },
//     [sliderRef]
//   );
//   useEffect(() => {
//     window.addEventListener("wheel", e => {
//       scroll(e.deltaY);
//     });
//   }, [scroll]);

//   const { language } = props.pageContext

//   const languageSelector = language === 'ja' ? featuresJa : features

//   const featureItems = languageSelector.map(feature =>

//     <Feature
//       gifOpt={featureImages[feature.id - 1]}
//       slide={feature.slide}
//       key={feature.id}
//       title={feature.title}
//       subtitle={feature.subtitle}
//       link={feature.link}
//       linkUrl={feature.linkUrl}
//     />

//   )


//   return (
//     <SimpleLocalize {...props}>

//       <div ref={areaSlide} className="section-features">
//         <Slider ref={sliderRef} {...settings} className="section-features__list-slider">
//           {featureItems}
//         </Slider>
//       </div>
//       <Cta {...props} />

//     </SimpleLocalize>
//   )
// }

// export default FeaturesSection
// import React, { useEffect } from "react";
// import { StaticImage } from "gatsby-plugin-image";
// import { graphql, useStaticQuery } from "gatsby";
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
// import SimpleLocalize from "../../shared/SimpleLocalize";

// import Feature from "./Features";
// import features from "../../../../data/Homepage/features";
// import featuresJa from "../../../../data/Homepage/featuresJa";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Cta from "../CTA";


// const FeaturesSection = (props) => {

//   const data = useStaticQuery(graphql`
//     query FeatureSection {
//       projects: file(relativePath: {eq: "gif/projects.png"}) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
//         }
//       }
//       hired: file(relativePath: {eq: "gif/hired.png"}) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
//         }
//       }
//       impact: file(relativePath: {eq: "gif/impact.png"}) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
//         }
//       }
//       payment: file(relativePath: {eq: "gif/payment.png"}) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, blurredOptions: {width: 100})
//         }
//       }
//     }
//   `)

//   const { projects, hired, impact, payment } = data
//   const featureImages = [projects, hired, impact, payment]

//   console.log(data);
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     autoplay: true,
//     vertical: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//   }
//   // Batch animations
//   const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
//   const FadeUp = batch(Fade(), Move(), Sticky());

//   // Make custom animation
//   const Spin = (cycle) =>
//   ({
//     in: {
//       style: {
//         transform: (p) => `rotate(${p * 360 * cycle}deg)`,
//       },
//     },
//     out: {
//       style: {
//         transform: (p) => `rotate(${p * 360 * cycle}deg)`,
//       },
//     },
//   });

//   return (
//     <ScrollContainer>
//       <ScrollPage>
//         <Animator animation={batch(Sticky(), Fade(), Spin(3))}>
//           <h1 style={{ fontSize: 50 }}>Hello!!!</h1>
//         </Animator>
//       </ScrollPage>
//       <ScrollPage>
//         <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
//           <span style={{ fontSize: 30 }}>
//             Let me show you scroll animation 😀
//           </span>
//         </Animator>
//       </ScrollPage>
//       <ScrollPage>
//         <Animator animation={ZoomInScrollOut}>
//           <span style={{ fontSize: 40 }}>I'm FadeUpScrollOut ✨</span>
//         </Animator>
//       </ScrollPage>
//       <ScrollPage>
//         <Animator animation={FadeUp}>
//           <span style={{ fontSize: 40 }}>I'm FadeUp ⛅️</span>
//         </Animator>
//       </ScrollPage>
//       <ScrollPage>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100%",
//           }}
//         >
//           <span style={{ fontSize: 40 }}>
//             <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
//             <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
//             - I'm Dante Chun -
//             <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
//             <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
//           </span>
//         </div>
//       </ScrollPage>
//       <ScrollPage>
//         <Animator animation={batch(Fade(), Sticky())}>
//           <span style={{ fontSize: 40 }}>Done</span>
//           <br />
//           <span style={{ fontSize: 30 }}>
//             There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
//           </span>
//         </Animator>
//       </ScrollPage>
//     </ScrollContainer>
//   )
// }

// export default FeaturesSection

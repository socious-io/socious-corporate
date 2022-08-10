import React, {useEffect} from "react";

import 'video-react/dist/video-react.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const featureVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Feature = (props) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const image = getImage(props.gifOpt)

  return (
   
    <div className="section-features__list-item">
      
     <motion.div 
      ref={ref}
      variants={featureVariant}
      initial="hidden"
      animate={control}
     
     className="section-features__list-image-container">
     <GatsbyImage image={image} alt={props.gifAlt} className="section-features__list-image"/>
      </motion.div>

      <motion.div 
    
      className="section-features__list-content">
      <div className="section-features__list-slide">
        {props.slide}
      </div>
        <div className="section-features__list-item-title">
          {props.title}
        </div>
        <div className="section-features__list-item-subtitle">
          {props.subtitle}
        </div>
        <div className="section-features__list-item-link">
          <a href={props.linkUrl}>{props.link}&rarr;</a>          
        </div>
        </motion.div>
    </div>
  
   
  )
}

export default Feature

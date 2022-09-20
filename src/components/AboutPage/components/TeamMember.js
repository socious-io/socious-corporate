import React, { useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsMedium } from "react-icons/bs";
// import { GrLinkedinOption } from "react-icons/gr";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { FiTwitter } from "react-icons/fi";

const TeamMember = (props) => {
  const modalId = `myModal${props.id}`
  const modalRef = `#myModal${props.id}`

  useEffect(() => {
    const overlay = document.querySelectorAll("div.modal-overlay");
    const modals = document.querySelectorAll('.modal');
    const spans = document.getElementsByClassName("close");

    for (let i = 0; i < overlay.length; i++) {
      overlay[i].onclick = function (e) {
        e.preventDefault();
        let modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
      }
    }

    for (let i = 0; i < spans.length; i++) {
      spans[i].onclick = function () {
        for (let index in modals) {
          if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
      }
    }


  })

  const image = getImage(props.imageOpt.childImageSharp.gatsbyImageData)

  return (
    <div>
      <div className="team-member">
        <GatsbyImage image={image} alt={props.imageAlt} className="team-member-image" />
        <div className="member-content">
          <div className="member-name">
            <h3>{props.name}</h3>
          </div>
          <div className="member-title">
            <p>{props.title}</p>
          </div>
          <hr className="member-divider" />
          <div className="member-description">
            {props.bio3}
          </div>

          <div className="member-icon">
          <a href={props.linkedIn}
          target="_blank"
          >
            {/* <LinkedInIcon fontSize="large" /> */}
            <svg className="team-member-linkedin" width="35" height="35" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C24.8306 0 32 7.16938 32 16C32 24.8306 24.8306 32 16 32C7.16938 32 0 24.8306 0 16C0 7.16938 7.16938 0 16 0ZM10.9977 24.9919V12.4969H6.84369V24.9919H10.9977ZM25.9739 24.9919V17.8266C25.9739 13.9885 23.9248 12.2031 21.1921 12.2031C18.9887 12.2031 18.0017 13.4149 17.4491 14.266V12.4969H13.2961C13.3512 13.6692 13.2961 24.9919 13.2961 24.9919H17.449V18.0138C17.449 17.6403 17.4759 17.2669 17.5859 17C17.8856 16.2541 18.5695 15.4813 19.7169 15.4813C21.219 15.4813 21.8208 16.6276 21.8208 18.3066V24.9919H25.9739ZM8.94875 6.47188C7.5275 6.47188 6.59894 7.40625 6.59894 8.63094C6.59894 9.82981 7.49925 10.7899 8.89375 10.7899H8.92056C10.369 10.7899 11.2706 9.82981 11.2706 8.63094C11.2437 7.40625 10.3691 6.47188 8.94875 6.47188Z"/>
</svg>

          </a>
          </div>


        </div>
      </div>

    </div>
  )
}

export default TeamMember

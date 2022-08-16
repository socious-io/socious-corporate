import React, { useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsMedium } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FiTwitter } from "react-icons/fi";

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

          <a href={props.linkedIn}>
            <LinkedInIcon />
          </a>


        </div>
      </div>

    </div>
  )
}

export default TeamMember

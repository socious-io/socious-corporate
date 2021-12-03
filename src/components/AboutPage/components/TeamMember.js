import React, { useEffect } from "react";

const TeamMember = (props) => {
  const modalId = `myModal${props.id}`
  const modalRef = `#myModal${props.id}`
  
  useEffect(() => {
    const overlay = document.querySelectorAll("div.modal-overlay");
    const modals = document.querySelectorAll('.modal');
    const spans = document.getElementsByClassName("close");

    for (let i = 0; i < overlay.length; i++) {
      overlay[i].onclick = function(e) {
        e.preventDefault();
        let modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
      }
    }

    for (let i = 0; i < spans.length; i++) {
      spans[i].onclick = function() {
        for (let index in modals) {
          if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
        }
      }
    }

    window.onclick = function(event) {
      if (event.target.classList.contains('modal')) {
        for (let index in modals) {
          if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
        }
      }
    }
  })

  return (
    <div>
      <div className="team-member">
        <img src={props.imageUrl} alt={props.imageAlt} />
        <div className="member-content">
          <div className="member-title">
            <p>{props.title}</p>
          </div>
          <div className="member-name">
            <h3>{props.name}</h3>
          </div>
        </div>
        <div className="modal-overlay" href={modalRef}></div>
      </div>

      <div id={modalId} className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">×</span>
            <h2>{props.name}</h2>
            <p>{props.title}</p>
          </div>
          <div className="modal-body">
            <p>
              {props.bio1}
              <br /><br />
              {props.bio2}
              {props.bio3 ? 
                <span>
                  <br /><br />
                  {props.bio3}
                </span> 
                : null
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember

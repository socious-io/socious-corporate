import React from "react";

import TeamMember from "./components/TeamMember";
import teamMembers from "../../../data/AboutPage/teamSectionData";

const TeamSection = () => {
  const team = teamMembers.map(member =>
      <TeamMember
        key={member.id}
        imageUrl={member.imageUrl}
        imageAlt={member.imageAlt}
        name={member.name}
        title={member.title}
        bio1={member.bio1}
        bio2={member.bio2}
        bio3={member.bio3}
      />
    )

  return (
    <div className="team-section" id="our-team">
      <div className="team-title">
        <h2>Meet The Team</h2>
      </div>
      <div className="team-container">
        {team}
      </div>
    </div>
  )
}

export default TeamSection

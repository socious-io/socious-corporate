import React from "react";

import TeamMember from "./components/TeamMember";
import teamMembers from "../../../data/AboutPage/teamSectionData";
import teamMembersJa from "../../../data/AboutPage/teamSectionDataJa";

const TeamSection = (props) => {
  const { language } = props.pageContext

  const meetTheTeamLanguage = language === 'ja' ? 'チーム' : 'Meet The Team'
  const teamMemberComponentLanguageSelector = language === 'ja' ? teamMembersJa : teamMembers

  const team = teamMemberComponentLanguageSelector.map(member =>
    <TeamMember
      key={member.id}
      id={member.id}
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
        <h2>{meetTheTeamLanguage}</h2>
      </div>
      <div className="team-container">
        {team}
      </div>
    </div>
  )
}

export default TeamSection

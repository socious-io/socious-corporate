import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import TeamMember from "./components/TeamMember";
import teamMembers from "../../../data/AboutPage/teamSectionData";
import teamMembersJa from "../../../data/AboutPage/teamSectionDataJa";

const TeamSection = (props) => {
  const data = useStaticQuery(graphql`
    query TeamImages {
      SeiraYun: file(
        sourceInstanceName: {eq: "images"}
        childImageSharp: {id: {eq: "5f51ced9-7c02-5857-a990-a4f5142c9ca3"}}
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 197,
            height: 224,
            quality: 70,
            placeholder: BLURRED,
            blurredOptions: {width: 100}
          )
        }
      }
      RhysMalyon: file(
        sourceInstanceName: {eq: "images"}
        childImageSharp: {id: {eq: "cdf8d6c3-8676-5500-b44f-393e7ccbf39c"}}
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 197,
            height: 224,
            quality: 70,
            placeholder: BLURRED,
            blurredOptions: {width: 100}
          )
        }
      }
      GalinaNeydenova: file(
        sourceInstanceName: {eq: "images"}
        childImageSharp: {id: {eq: "693cada6-2e44-5766-8fd0-f054d66a05e7"}}
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 197,
            height: 224,
            quality: 70,
            placeholder: BLURRED,
            blurredOptions: {width: 100}
          )
        }
      }
      AtsushiInoue: file(
        sourceInstanceName: {eq: "images"}
        childImageSharp: {id: {eq: "b099071c-2a60-534f-8b30-3bc5163c236f"}}
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 197,
            height: 224,
            quality: 70,
            placeholder: BLURRED, 
            blurredOptions: {width: 100}
          )
        }
      }
      LawrenceCate: file(
        sourceInstanceName: {eq: "images"},
        childImageSharp: {id: {eq: "5e27a7b7-0f4e-51b8-b204-2656aa4251f5"}}
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 197,
            height: 224,
            quality: 70,
            placeholder: BLURRED,
            blurredOptions: {width: 100}
          )
        }
      }
    }
  `)

  const { SeiraYun, AtsushiInoue, GalinaNeydenova, RhysMalyon, LawrenceCate } = data

  const teamImages = [SeiraYun, AtsushiInoue, GalinaNeydenova, RhysMalyon, LawrenceCate]

  const { language } = props.pageContext

  const meetTheTeamLanguage = language === 'ja' ? 'チーム' : 'Meet The Team'
  const teamMemberComponentLanguageSelector = language === 'ja' ? teamMembersJa : teamMembers

  const team = teamMemberComponentLanguageSelector.map(member =>
    <TeamMember
      key={member.id}
      id={member.id}
      imageOpt={teamImages[member.id - 1]}
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

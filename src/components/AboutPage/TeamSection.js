import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import TeamMember from "./components/TeamMember";
import teamMembers from "../../../data/AboutPage/teamSectionData";
import teamMembersJa from "../../../data/AboutPage/teamSectionDataJa";

const TeamSection = (props) => {
  const data = useStaticQuery(graphql`
    query TeamImages {
      SeiraYun: file(
        relativePath: {eq: "team/Seira Yun.jpeg"}
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
        relativePath: {eq: "team/Rhys Malyon.jpeg"}
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
        relativePath: {eq: "team/Galina Neydenova.jpeg"}
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
        relativePath: {eq: "team/Atsushi Inoue.jpeg"}
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
        relativePath: {eq: "team/Lawrence Cate.jpeg"}
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

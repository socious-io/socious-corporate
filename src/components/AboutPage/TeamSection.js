import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import TeamMember from "./components/TeamMember";

const TeamSection = (props) => {
  const data = useStaticQuery(graphql`
    query TeamImages {
      wpcontent {
        teamMembers(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
          nodes {
            featuredImage {
              node {
                sourceUrl
                imageFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 200
                      height: 200
                      quality: 100
                      placeholder: BLURRED
                      blurredOptions: {width: 100}
                    )
                  }
                }
              }
            }
            teamMemberData {
              bio1
              bio2
              bio3
              name
              title
              imagealt
              
            }
            teamMemberDataJa {
              bio1Ja
              bio2Ja
              bio3Ja
              nameJa
              titleJa
              imagealtJa
              
            }
          }
        }
      }
    }
  `)


  const { language } = props.pageContext

  const meetTheTeamLanguage = language === 'ja' ? 'チーム' : 'Meet The Team'
  const teamMemberData = language === 'ja' ? "teamMemberDataJa" : "teamMemberData"
  const languageExtension = language === 'ja' ? "Ja" : ""

  const team = (data.wpcontent?.teamMembers?.nodes || []).map((member, index) =>
      <TeamMember
        key={index}
        id={index}
        imageOpt={member.featuredImage.node.imageFile}
        imageUrl={member.featuredImage.node.sourceUrl}
        imageAlt={member[teamMemberData]["imagealt"+languageExtension] || ""}
        name={member[teamMemberData]["name"+languageExtension]}
        title={member[teamMemberData]["title"+languageExtension]}
        bio1={member[teamMemberData]["bio1"+languageExtension]}
        bio2={member[teamMemberData]["bio2"+languageExtension]}
        bio3={member[teamMemberData]["bio3"+languageExtension]}
        linkedIn={member[teamMemberData]["linkedIn"+languageExtension]}
      />
  );

  return (
    <div className="team-section" id="our-team">
      <div className="team-title">
        <h2>{meetTheTeamLanguage}</h2>
        <p>Socious is powered by a network of changemakers, passionate about contributing to social and environmental impact.</p>
      </div>
      <div className="team-container">
        {team}
      </div>
    </div>
  )
}

export default TeamSection

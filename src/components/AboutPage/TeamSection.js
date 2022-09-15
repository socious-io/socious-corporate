import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import TeamMember from "./components/TeamMember";

const TeamSection = (props) => {
  const data = useStaticQuery(graphql`
    query TeamImages {
      wpcontent {
        teamMembers (first: 20) {
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
              linkedin
              
            }
            teamMemberDataJa {
              bio1Ja
              bio2Ja
              bio3Ja
              nameJa
              titleJa
              imagealtJa
              linkedinJa
              
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
  // console.log(data.wpcontent?.teamMembers?.nodes)
  const team = (data.wpcontent?.teamMembers?.nodes || []).map((member, index) =>
    <TeamMember
      key={index}
      id={index}
      imageOpt={member.featuredImage.node.imageFile}
      imageUrl={member.featuredImage.node.sourceUrl}
      imageAlt={member[teamMemberData]["imagealt" + languageExtension] || ""}
      name={member[teamMemberData]["name" + languageExtension]}
      title={member[teamMemberData]["title" + languageExtension]}
      bio1={member[teamMemberData]["bio1" + languageExtension]}
      bio2={member[teamMemberData]["bio2" + languageExtension]}
      bio3={member[teamMemberData]["bio3" + languageExtension]}
      linkedIn={member[teamMemberData]["linkedin" + languageExtension]}
    />
  );

  return (
    <div className="team-section" id="our-team">
      <div className="team-title">
        <h2>{meetTheTeamLanguage}</h2>
        <p>Socious is powered by a network of changemakers, passionate<br/> about contributing to social and environmental impact.</p>
      </div>
      <div className="team-container">
        {team}
      </div>
    </div>
  )
}

export default TeamSection

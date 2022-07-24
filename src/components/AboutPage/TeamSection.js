import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import TeamMember from "./components/TeamMember";

const TeamSection = (props) => {
  const data = useStaticQuery(graphql`
    query TeamImages {
      WordpressData: wpcontent {
        teamMembers {
          nodes {
            featuredImage {
              node {
                sourceUrl
                imageFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 197
                      height: 224
                      quality: 70
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
            }
            teamMemberDataJa {
              bio1
              bio2
              bio3
              name
              title
            }
          }
        }
      }
    }
  `)

  const { WordpressData } = data

  const { language } = props.pageContext

  const meetTheTeamLanguage = language === 'ja' ? 'チーム' : 'Meet The Team'
  const teamMemberData = language === 'ja' ? "teamMemberDataJa" : "teamMemberData"

  const team = WordpressData.teamMembers.nodes.map((member, index) => {
      if(!member.featuredImage)
        return;

      return (<TeamMember
        key={index}
        id={index}
        imageOpt={member.featuredImage.node.imageFile}
        imageUrl={member.featuredImage.node.sourceUrl}
        imageAlt={member[teamMemberData].name}
        name={member[teamMemberData].name}
        title={member[teamMemberData].title}
        bio1={member[teamMemberData].bio1}
        bio2={member[teamMemberData].bio2}
        bio3={member[teamMemberData].bio3}
      />)
    }
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

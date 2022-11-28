import React from "react";
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from 'gatsby';


const ClientsSection = (props) => {
  const { allWpClientsAndPartners } = useStaticQuery(
    graphql`
    query ClientsSection{
      allWpClientsAndPartners {
        nodes {
          featuredImage {
            node {
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    blurredOptions: {width: 100}
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const clientsAndPartnersList = (allWpClientsAndPartners?.nodes || []).map((member, index) => {
    const image = getImage(member.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
    return <GatsbyImage className="clients_section__item" key={index} id={index} image={image} alt={member.featuredImage.node.sourceUrl} />
  })


  return (
    <div className="clients_section">
      <h1 className="clients_section__h1">Our Clients and Partners</h1>
      <div className="clients_section__list">
        {clientsAndPartnersList}
      </div>
    </div>
  )
}

export default ClientsSection

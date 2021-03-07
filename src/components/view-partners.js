import React from 'react';
import { useStaticQuery, graphql } from "gatsby" 
import PartnerItem from './partner-item';

const ViewPartners = () => {
  const data = useStaticQuery(graphql`
      query {
        allMdx (    
            filter: {
                frontmatter: {type: {eq:"partner"}}
            }) 
            {
            edges {
                node {
                    frontmatter {
                        title, slug, logo
                    }      
                }
          }
        }
      }
  `)
  return (
    <section id="divPartners">
      <ul>
        {data.allMdx.edges.map((partner) => (
          <PartnerItem current={partner.node} key={partner.node.frontmatter.slug} />
        ))}
      </ul>
    </section>
  )
}

export default ViewPartners
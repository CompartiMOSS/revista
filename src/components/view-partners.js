import React from 'react';
import { useStaticQuery, graphql } from "gatsby" 
import PartnerItem from './partner-item';
import { Grid } from "@mui/material"

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
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {data.allMdx.edges.map((partner) => (
            <Grid item key={partner.node.frontmatter.slug}>
              <PartnerItem current={partner.node} />
            </Grid>
        ))}
      </Grid>
  )
}

export default ViewPartners
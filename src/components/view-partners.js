import React from 'react';
import { useStaticQuery, graphql } from "gatsby" 
import PartnerItem from './partner-item';
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  partner: {
      position: 'relative',
      width: 250,
      height: 150,
      overflow: 'hidden',
      background: '#303030',
  }
})

const ViewPartners = () => {
  const classes = useStyles();
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
      <Grid container spacing={2}>
        {data.allMdx.edges.map((partner) => (
            <Grid item key={partner.node.frontmatter.slug}>
              <PartnerItem current={partner.node} />
            </Grid>
        ))}
      </Grid>
      {/* <ul>
        {data.allMdx.edges.map((partner) => (
          <PartnerItem current={partner.node} key={partner.node.frontmatter.slug} />
        ))}
      </ul> */}
    </section>
  )
}

export default ViewPartners
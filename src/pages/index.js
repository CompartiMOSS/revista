import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Grid } from "@material-ui/core"
import LayoutHome from '../components/layout-home';
import SEO from '../components/seo';
import ViewPartners from '../components/view-partners';
import NumberImage from '../components/number-image';
import ViewArticlesRandom from '../components/view-articles-random';
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  divHeader: {
    color: 'white',
    '& h1': {
      color: 'white'
    },
    '& p': {
      fontSize: '19px'
    }
  },
  divImage: {
    '& img': {
      width: '100%'
    }
  }
})

const HomePage = ({}) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`{
  current: allMdx(
    filter: {frontmatter: {magazine: {eq: 52}, type: {eq: "number"}}}
  ) {
    edges {
      node {
        frontmatter {
          title
          slug
          magazine
        }
      }
    }
  }
  articles: allMdx(
    filter: {frontmatter: {magazine: {eq: 52}, type: {ne: "number"}}}
  ) {
    edges {
      node {
        frontmatter {
          title
          slug
          author
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`)
  return (
    <LayoutHome>
      <Grid container>
        <Grid item xs={12} className={classes.divHeader}>
          <SEO title="Home" keywords={['Microsoft', 'Microsoft 365', 'Azure', 'Office 365']} />
          <h1>Bienvenidos al sitio de CompartiMOSS</h1>
          <p>La revista digital de habla hispana en la que se escribe sobre la tecnología Microsoft y todo lo relacionado con ésta</p>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={3} xl={4} className={classes.divImage} >
            <NumberImage frontmatter={data.current.edges[0].node.frontmatter} />
          </Grid>
          <Grid item xs={12} md={9} xl={8}>
            <ViewArticlesRandom articles={data.articles} />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center">
          <ViewPartners />
        </Grid>
      </Grid>
    </LayoutHome>
  )
}

export default HomePage
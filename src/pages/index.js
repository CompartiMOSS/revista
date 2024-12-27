import React from 'react';
import { styled } from '@mui/material/styles';
import { useStaticQuery, graphql } from "gatsby";
import LayoutHome from '../components/layout-home';
import SEO from '../components/seo';
import ViewPartners from '../components/view-partners';
import NumberImage from '../components/number-image';
import ViewArticlesRandom from '../components/view-articles-random';
import { Grid } from "@mui/material"

const PREFIX = 'HomePage';

const DivHeader = styled(Grid)({
  color: 'white',
  '& h1': {
    color: 'white'
  },
  '& p': {
    fontSize: '19px'
  }
});

const DivImage = styled(Grid)({
  '& img': {
    width: '100%'
  }
});

const HomePage = ({}) => {
  const data = useStaticQuery(graphql`{
  current: allMdx(
    filter: {frontmatter: {magazine: {eq: 62}, type: {eq: "number"}}}
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
    filter: {frontmatter: {magazine: {eq: 62}, type: {ne: "number"}}}
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
        <DivHeader item xs={12}>
          <SEO title="Home" keywords={['Microsoft', 'Microsoft 365', 'Azure', 'Office 365']} />
          <h1>Bienvenidos al sitio de CompartiMOSS</h1>
          <p>La revista digital de habla hispana en la que se escribe sobre la tecnología Microsoft y todo lo relacionado con ésta</p>
        </DivHeader>
        <Grid container>
          <DivImage item xs={12} md={3} xl={4}>
            <NumberImage frontmatter={data.current.edges[0].node.frontmatter} />
          </DivImage>
          <Grid item xs={12} md={9} xl={8}>
            <ViewArticlesRandom articles={data.articles} />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <ViewPartners />
        </Grid>
      </Grid>
    </LayoutHome>
  );
}

export default HomePage
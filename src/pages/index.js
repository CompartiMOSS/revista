import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import LayoutHome from '../components/layout-home';
import SEO from '../components/seo';
import ViewPartners from '../components/view-partners';
import NumberImage from '../components/number-image';
import ViewArticlesRandom from '../components/view-articles-random';
import styled from "styled-components";

const LandingBody = styled.section`
  color: #fff;

  h1 {
    color: #fff;
  }
`

const LandingContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;

  > * {
    flex: 1 1 auto;

  }
  
  .number-picture {
    .divPicture {
      flex: 1 1 380px;
      max-width: 420px;
      min-width: 400px;

      img {
        width: 100%;
      }
    }
  }
`

const HomePage = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      current: allMdx (    
          filter: {
            frontmatter: {magazine: {eq: 47}, type: {eq: "number"}}
          }) 
          {
          edges {
              node {
                  frontmatter {
                      title, slug, magazine
                  }      
              }
        }
      }
      articles: allMdx (    
        filter: {
          frontmatter: {magazine: {eq: 47}, type: {ne: "number"}}
        }) 
        {
        edges {
            node {
                frontmatter {
                    title, slug, author, featuredImage { childImageSharp { fluid(maxWidth: 400) { ...GatsbyImageSharpFluid } } }
                }      
            }
      }
    }
  }
  `)
  return (
    <LayoutHome>
      <LandingBody>
        <header>
          <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
          <h1>Bienvenidos al sitio de CompartiMOSS</h1>
          <p>La revista digital de habla hispana en la que se escribe sobre la tecnología Microsoft y todo lo relacionado con ésta</p>
        </header>
        <LandingContent>
          <div className="number-picture">
            <NumberImage frontmatter={data.current.edges[0].node.frontmatter} />
          </div>
          <div>
            <ViewArticlesRandom articles={data.articles} />
            <ViewPartners />
          </div>
        </LandingContent>
      </LandingBody>
    </LayoutHome>
  )
}

export default HomePage
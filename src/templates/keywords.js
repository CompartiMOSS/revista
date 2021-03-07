import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';
import styled from "styled-components";

const TagListStyled = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;
  margin: 5px auto;
  padding: 0 10px;
  box-sizing: border-box;
`;

const TagStyled = styled.article`
  flex: 1 1 auto;
  margin: 6px;
  padding: 10px;
  max-width: 250px;
  min-width: 150px;
  background-color: #f0f0f0;
  font-size: 15px;

  a {
    color:  #303030;
    text-decoration: none;
  }

  a:hover {
    color: #f90b39;
  }
`;

const LinkStyled = styled(Link)`
  font-size: 17px;
  color:  #f90b39;
  text-decoration: none;

  &:hover {
    color: #f90b39;
    font-weight: bold;
  }
`;

const Keywords = ({ pageContext, data }) => {
  const { keyword } = pageContext
  const { edges, totalCount } = data.allMdx
  const keywordHeader = `${totalCount} artículo${
    totalCount === 1 ? "" : "s"
  } etiquetado con "${keyword}"`

  return (
    <Layout>
      <div>
        <h1>{keywordHeader}</h1>
        <TagListStyled>
          {edges.map(({ node }) => {
            const { title, slug } = node.frontmatter
            return (
              <TagStyled key={slug}>
                <Link to={slug}>{title}</Link>
              </TagStyled>
            )
          })}
        </TagListStyled>
        <LinkStyled to="/keywords">Todas las palabras claves</LinkStyled>
      </div>
    </Layout>
  )
}

Keywords.propTypes = {
  pageContext: PropTypes.shape({
    keyword: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
}

export default Keywords

export const pageQuery = graphql`
  query($keyword: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { keywords: { in: [$keyword] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title,
            slug
          }
        }
      }
    }
  }
`
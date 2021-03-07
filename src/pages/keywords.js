import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
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

const KeywordsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
        <div>
            <Helmet title={title} />
            <div>
            <h1>Palabras claves de los artículos</h1>
            <TagListStyled>
              {group.map(keyword => (
                <TagStyled key={keyword.fieldValue}>
                    <Link to={`/keywords/${kebabCase(keyword.fieldValue)}/`}>
                    {keyword.fieldValue} ({keyword.totalCount})
                    </Link>
                </TagStyled>
                ))}
            </TagListStyled>
            </div>
        </div>
    </Layout>
)

KeywordsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default KeywordsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___keywords) {
        fieldValue
        totalCount
      }
    }
  }
`
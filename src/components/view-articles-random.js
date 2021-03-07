import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import styled from "styled-components";

const StyledArticles = styled.ul`
  margin: 0 12px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row wrap;

  li {
    flex: 1 1 320px;
    min-width: 300px;
    max-width: 350px;
    margin-bottom: 24px;
  }

  a {
    display: block;
    margin: 6px 12px;
    padding: 12px 12px;
    text-decoration: none;
    color: #f0f0f0;
    font-size: 1em;
    font-weight: 300;
    background-color: rgba(0,0,0, 0.6);
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 15px rgba(0,0,0, 0.45);
    height: 300px;
    overflow: hidden;
    box-sizing: border-box;

    &:hover {
      color: #fff;
      background-color: rgba(0,0,0, 0.5);
    }
    &:first-child {
      margin-top: 0;
    }

    .article-title {
      min-height: 78px;
      max-height: 150px;
      overflow: hidden;
      margin-bottom: 10px;
    }
  }

`;

const ViewArticlesRandom = ({...props}) => {
  const topArticles = _.sampleSize(props.articles.edges, 30)

  return (
    <section>
      <StyledArticles>
        {topArticles.map((article) => (
          <li key={article.node.frontmatter.slug}>
            <Link to={article.node.frontmatter.slug} title={article.node.frontmatter.title}>
              <div className="article-title">
                {article.node.frontmatter.title} por {article.node.frontmatter.author}
              </div>
              {_getThumbnail(article.node.frontmatter)}
            </Link>
          </li>
        ))}
      </StyledArticles>
    </section>
  )
}

function _getThumbnail(current) {
  if (current.featuredImage)
  {
    const style = {
      height: 200 + 'px',
      backgroundImage: 'url(' + current.featuredImage.childImageSharp.fluid.src + ')',
      backgroundSize: 'cover'
    };
    return (
      <div style={style}></div>
    )
  }
  else 
  {
    return <></>
  }
}

export default ViewArticlesRandom
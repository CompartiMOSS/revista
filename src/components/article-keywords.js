import React from "react";
import { Link } from 'gatsby';
import _ from 'lodash';
import styled from "styled-components";
import tagIcon from '../images/icons/Tag.png';

const TagsStyled = styled.div`
  color: #fff;

  ul {
    margin: 10px 0;
    padding: 0;
  }

`;

const TagStyled = styled.li`
  display: inline-block;
  margin: 10px 6px;
  padding: 5px;
  padding-left: 25px;
  background: #f8922c url(${tagIcon}) no-repeat 5px center;
  color: #fff;
  font-size: 18px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: #f0f0f0 !important;
  }
`;

const ArticleKeywords = ({ children }) => {
  if (children) {
    return (
      <TagsStyled>
          <ul>
              {children.map(t => (
              <TagStyled key={t}>
                  <Link to={`/keywords/${_.kebabCase(t)}/`}>
                      {t}
                  </Link>
              </TagStyled>
              ))}
          </ul>
      </TagsStyled>
    )
  }
  else {
    return <></>
  }
}

export default ArticleKeywords
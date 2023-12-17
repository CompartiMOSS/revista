import React from 'react';
import { Link } from 'gatsby';
import { Container } from "@mui/material"
import { styled } from '@mui/styles';

import SocialShare from './social-share';
import ArticleKeywords from './article-keywords';
import numberImage from '../images/layout/Back-Magazine-Number.png'


const ArticleHeaderStyled = styled('header')({
  marginTop: '24px'
});

const DivBack = styled('div')({
  display: 'inline-block',
  transition: 'top .5s ease-in-out',
  background: `url(${numberImage}) no-repeat 0`,
  top: 180,
  left: 0,
  position: 'absolute',
  zIndex: 2000,
  '& a': {
    display: 'block',
    padding: '6px 6px 6px 12px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: 20
  }
});

const DivInfo = styled('div')({
  '& a': {
    textDecoration: 'none',
    color: '#f8922c'
  }
});

const ArticleHeader = ({ frontmatter, ...props }) => {
  return (
    <ArticleHeaderStyled>
      <DivBack>
        <Link to={`/revistas/numero-${frontmatter.magazine}`}>
          {`Número ${frontmatter.magazine}`}
        </Link>
      </DivBack>
      <Container maxWidth="md">
        <h1>
          {frontmatter.title}
        </h1>
        <DivInfo>
          <span>Escrito por &nbsp;</span>
          <span>
            <Link to={`/autores/${frontmatter.authorId}`}>{frontmatter.author}</Link>
          </span>
        </DivInfo>
        <ArticleKeywords>{frontmatter.keywords}</ArticleKeywords>
        <SocialShare frontmatter={frontmatter} />
      </Container>
    </ArticleHeaderStyled>
  );
};

export default ArticleHeader;
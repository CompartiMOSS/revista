import React from 'react';
import { Link } from 'gatsby';
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

import SocialShare from './social-share';
import ArticleKeywords from './article-keywords';
import numberImage from '../images/layout/Back-Magazine-Number.png'

const useStyles = makeStyles({
  number: {
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
  }
})

const ArticleHeader = ({ frontmatter, ...props }) => {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.number}>
        <Link to={`/revistas/numero-${frontmatter.magazine}`}>
          {`Número ${frontmatter.magazine}`}
        </Link>
      </div>
      <Container maxWidth="md">
        <h1>
          {frontmatter.title}
        </h1>
        <div id="divArticleInfo">
          <span>Escrito por &nbsp;</span>
          <span id="divArticleAuthor">
            <Link to={`/autores/${frontmatter.authorId}`}>{frontmatter.author}</Link>
            </span>
        </div>
        <ArticleKeywords>{frontmatter.keywords}</ArticleKeywords>
        <SocialShare frontmatter={frontmatter} />
      </Container>
    </header>
  );
};

export default ArticleHeader;
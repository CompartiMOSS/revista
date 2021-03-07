import React from 'react';
import { Link } from 'gatsby';
import SocialShare from './social-share';
import ArticleKeywords from './article-keywords';

const ArticleHeader = ({ frontmatter, ...props }) => {
  return (
    <div id="SectionArticle">
      <header>
        <div id="divMagazineNumber">
          <Link to={`/revistas/numero-${frontmatter.magazine}`}>
            {`Número ${frontmatter.magazine}`}
          </Link>
        </div>
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
      </header>
    </div>  
  );
};

export default ArticleHeader;
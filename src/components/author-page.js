import React from 'react';
import AuthorHeader from './author-header';
import AuthorAside from './author-aside';
import ViewArticlesAuthor from './view-articles-author';

const AuthorPage = ({ frontmatter, articles, ...props }) => {
  return (
    <section id="SectionAuthor">
      <AuthorAside frontmatter={frontmatter} />      
      <AuthorHeader frontmatter={frontmatter} />
      <div id="divAuthorData">
        <p dangerouslySetInnerHTML={{ __html: frontmatter.content}} />
        <ViewArticlesAuthor articles={articles} title="Artículos" />
      </div>
    </section>
  );
};

export default AuthorPage;
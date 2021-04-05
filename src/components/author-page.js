import React from 'react';
import AuthorHeader from './author-header';
import AuthorAside from './author-aside';
import ViewArticlesAuthor from './view-articles-author';
import { Grid } from "@material-ui/core"

const AuthorPage = ({ frontmatter, articles, ...props }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={2} xl={3}>
        <AuthorAside frontmatter={frontmatter} />
      </Grid>
      <Grid item xs={12} md={10} xl={9}>
        <AuthorHeader frontmatter={frontmatter} />
           <div id="divAuthorData">
            <p dangerouslySetInnerHTML={{ __html: frontmatter.content}} />
            <ViewArticlesAuthor articles={articles} title="Artículos" />
          </div>
      </Grid>
    </Grid>
    // <section id="SectionAuthor">
    //   <AuthorAside frontmatter={frontmatter} />      
    //   <AuthorHeader frontmatter={frontmatter} />
    //   <div id="divAuthorData">
    //     <p dangerouslySetInnerHTML={{ __html: frontmatter.content}} />
    //     <ViewArticlesAuthor articles={articles} title="Artículos" />
    //   </div>
    // </section>
  );
};

export default AuthorPage;
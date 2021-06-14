import React from 'react';
import AuthorHeader from './author-header';
import AuthorAside from './author-aside';
import ViewArticlesAuthor from './view-articles-author';
import { Grid } from "@material-ui/core"

const AuthorPage = ({ frontmatter, articles, ...props }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={5} md={4} lg={4} xl={3} justify="center" alignItems="center">
        <AuthorAside frontmatter={frontmatter} />
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={8} xl={9}>
        <AuthorHeader frontmatter={frontmatter} />
           <div id="divAuthorData">
            <p dangerouslySetInnerHTML={{ __html: frontmatter.content}} />
            <ViewArticlesAuthor articles={articles} title="Artículos" />
          </div>
      </Grid>
    </Grid>
  );
};

export default AuthorPage;
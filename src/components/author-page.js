import React from 'react';
import AuthorHeader from './author-header';
import AuthorAside from './author-aside';
import ViewArticlesAuthor from './view-articles-author';
import { Grid } from "@mui/material"

const AuthorPage = ({ frontmatter, articles, ...props }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={5} md={4} lg={3} xl={2} justify="center" alignItems="center">
        <AuthorAside frontmatter={frontmatter} />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={9} xl={10}>
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
import React from 'react';
import AuthorPhoto from './author-photo';
import AuthorLink from './author-link';
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  author: {
    marginTop: 24,
    '& img': {
      objectFit: 'cover',
      width: 250,
      height: 250,
      boxShadow: '0 5px 10px #303030'
    }
  }
})

const AuthorAside = ({ frontmatter, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.author}>
      <div>
        <AuthorPhoto author={frontmatter.id} />
      </div>
      <section className={classes.links}>
        <AuthorLink link={frontmatter.twitter} title="Twitter" />
        <AuthorLink link={frontmatter.blog} title="Blog" />
      </section>
    </div>          
  );
};

export default AuthorAside;
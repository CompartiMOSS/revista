import React from 'react';
import AuthorPhoto from './author-photo';
import AuthorLink from './author-link';
import { makeStyles } from "@mui/material/styles"

const useStyles = makeStyles({
  author: {
    marginTop: 24,
    textAlign: 'center',
    '& img': {
      objectFit: 'cover',
      width: 220,
      height: 220,
      boxShadow: '0 5px 10px #303030'
    }
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
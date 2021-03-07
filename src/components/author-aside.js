import React from 'react';
import AuthorPhoto from './author-photo';
import AuthorLink from './author-link';

const AuthorAside = ({ frontmatter, ...props }) => {
  return (
    <div id="divAuthorAside">
      <div id="divProfilePhoto">
        <AuthorPhoto author={frontmatter.id} />
      </div>
      <section id="divSocialInfo">
        <AuthorLink link={frontmatter.twitter} title="Twitter" id="divTwitter" />
        <AuthorLink link={frontmatter.blog} title="Blog" id="divBlog" />
      </section>
    </div>          
  );
};

export default AuthorAside;
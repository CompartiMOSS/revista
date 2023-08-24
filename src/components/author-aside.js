import React from 'react';
import AuthorPhoto from './author-photo';
import AuthorLink from './author-link';
import { styled } from '@mui/styles';

const DivAuthor = styled('div')({
  marginTop: 24,
  textAlign: 'center',
  '& img': {
    objectFit: 'cover',
    width: 220,
    height: 220,
    boxShadow: '0 5px 10px #303030'
  }
});

const SectionLinks = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});


const AuthorAside = ({ frontmatter, ...props }) => {
  return (
    <DivAuthor>
      <div>
        <AuthorPhoto author={frontmatter.id} />
      </div>
      <SectionLinks>
        <AuthorLink link={frontmatter.twitter} title="Twitter" />
        <AuthorLink link={frontmatter.blog} title="Blog" />
      </SectionLinks>
    </DivAuthor>          
  );
};

export default AuthorAside;
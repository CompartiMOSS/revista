import React, { useState } from 'react';
import { styled } from '@mui/styles';
import twitter from '../images/icons/Twitter-Bird-48.png';
import blog from '../images/icons/Blog-48.png';

const DivOverlay = styled('div')({
  position: 'absolute',
  top: 70,
  width: 220,
  zIndex: 20,
  backgroundColor: '#f90b39',
  transition: 'all .5s ease-in-out',
  '& a': {
    position: 'relative',
    height: 70,
    paddingTop: 20,
    fontSize: '23px',
    display: 'block',
    paddingRight: 10,
    color: '#fff',
    textDecoration: 'none' 
  }
});

const DivLinks = styled('div')({
  position: 'relative',
  margin: '5px 0',
  height: 80,
  width: 220,
  background: '#303030 no-repeat 15px',
  color: '#fff',
  textAlign: 'right',
  verticalAlign: 'bottom',
  overflow: 'hidden',
});

const LinkSocial = styled('a')({
  display: 'block',
  paddingTop: 50,
  paddingRight: 10,
  height: 80,
  color: '#fff',
  textDecoration: 'none'
});

const AuthorLink = ({link, title, id}) => {
  const [isShown, setIsShown] = useState(false);
  const overlayStyle = isShown ? {top:10+'px'} : {top:70+'px'};
  const socialStyle = title === 'Twitter' ? {backgroundImage: `url(${twitter})`} : {backgroundImage: `url(${blog})`};

  return (    
      <DivLinks style={socialStyle} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        <LinkSocial href={link}>
          {title}
        </LinkSocial>
        <DivOverlay style={overlayStyle}>
          <a href={link}>
            {title}
          </a>
        </DivOverlay>
      </DivLinks>
  )
}

export default AuthorLink
import React from 'react'

const AuthorPhoto = ({author}) => {
  const imgStyle = {objectFit:'cover'};
  return (
    <>
      <img src={`../../images/autores/${author}.png`} alt={author} style={imgStyle} />
    </>
  )
}

export default AuthorPhoto
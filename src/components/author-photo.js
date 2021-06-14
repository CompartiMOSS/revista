import React from 'react'

const AuthorPhoto = ({author}) => {
  return (
    <>
      <img src={`../../images/autores/${author}.png`} alt={author} />
    </>
  )
}

export default AuthorPhoto
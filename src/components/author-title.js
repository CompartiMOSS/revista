import React from 'react'

const AuthorTitle = (current) => (
  <header>
    <h1>{current.author.title}</h1>
    <div id="divJobTitle">{current.author.jobTitle}</div>
  </header>
)

export default AuthorTitle
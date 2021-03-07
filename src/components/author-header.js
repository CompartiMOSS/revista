import React from 'react';

const AuthorHeader = ({ frontmatter, ...props }) => {
  return (
      <>
        <header>
          <h1>{frontmatter.title}</h1> <br />
          <div id="divJobTitle">
            {frontmatter.jobTitle}
          </div>         
        </header>          
      </>
  );
};

export default AuthorHeader;
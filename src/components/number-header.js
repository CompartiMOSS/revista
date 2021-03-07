import React from 'react';
import DownloadPDF from "./download-pdf";

const NumberHeader = ({ frontmatter, ...props }) => {
  return (
      <>
          <header>
            <h1>
              <img className="img-number-icon" src="/images/icons/OpenBook.png" alt="Ver número" title="Ver número" />
              {frontmatter.title}
            </h1>
            <div id="divLastNumberContent">
              <article id="divLastNumberImg">
                <img src={`../../images/portadas/CompartiMOSS_${frontmatter.magazine}.jpg`} alt={`Portada número ${frontmatter.magazine}`} />              
              </article>
              <article id="divEditorial">
                <header>
                  <h2>Editorial</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: frontmatter.content}} />
                <div>
                  <DownloadPDF number={frontmatter.magazine}/>
                </div>
              </article>
            </div>
          </header>          
      </>
  );
};

export default NumberHeader;
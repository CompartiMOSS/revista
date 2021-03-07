import React, { useState } from 'react';

const AuthorLink = ({link, title, id}) => {
    const [isShown, setIsShown] = useState(false);
    const overlayStyle = isShown ? {top:10+'px'} : {top:70+'px'};
    return (
        <article id={id} onMouseEnter={() => setIsShown(true)}
                                 onMouseLeave={() => setIsShown(false)}>
          <a className="linkSocial" href={link}>
            {title}
          </a>
          <div className="divSocialOverlay" style={overlayStyle}>
            <a className="linkSocialwitter" href={link}>
              <span id="spanTwitter">
                {title}
              </span>
            </a>
          </div>
        </article>
    )
}

export default AuthorLink
import React, { useState } from 'react';
import { Link } from "gatsby" 
import PartnerLogo from './partner-logo'

const PartnerItem = ({current}) => {
    const [isShown, setIsShown] = useState(false);
    const overlayStyle = isShown ? {top:10+'px'} : {top:140+'px'};
    return (
        <li onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} key={current.frontmatter.slug}>
            <div className="divCompartiMOSSPartner" key={current.frontmatter.slug}>
                <div className="divPicture">
                    <Link to={current.frontmatter.slug}>
                        <PartnerLogo partner={current.frontmatter} />
                    </Link>
                </div>
                <div className="divOverlay" style={overlayStyle}>
                    <Link className="linkOverlay" to={current.frontmatter.slug}>
                        <h2>{current.frontmatter.title}</h2>
                    </Link>
                </div>
            </div>
        </li>              
  )
}

export default PartnerItem
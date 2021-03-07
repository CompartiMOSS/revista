import React, { useState } from 'react';
import { Link } from "gatsby" 

const NumberItem = ({current}) => {
    const [isShown, setIsShown] = useState(false);
    const overlayStyle = isShown ? {top:290+'px'} : {top:300+'px'};
    return (
        <li onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <div className="divCompartiMOSSMagazineNumber">
                <div className="divPicture">
                    <Link to={current.frontmatter.slug} title={current.frontmatter.title}>
                    <img src={`../images/portadas/CompartiMOSS_${current.frontmatter.magazine}.jpg`} alt={`Portada número ${current.frontmatter.magazine}`} />
                    </Link>
                </div>            
                <div className="divOverlay" style={overlayStyle}>
                    <Link className="linkOverlay" to={current.frontmatter.slug} title={current.frontmatter.title}>
                    <h2>{current.frontmatter.title}</h2>
                    </Link>
                </div>        
            </div>
        </li>              
    )
}

export default NumberItem
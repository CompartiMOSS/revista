import React from 'react';
import { Link } from "gatsby" 

const NumberImage = ({frontmatter}) => {
    return (
        <div className="divPicture">
            <Link to={frontmatter.slug} title={frontmatter.title}>
                <img src={`../images/portadas/CompartiMOSS_${frontmatter.magazine}.jpg`} 
                    alt={`Portada número ${frontmatter.magazine}`} />
            </Link>
        </div>            
    )
}

export default NumberImage
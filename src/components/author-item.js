import React, { useState } from 'react';
import { Link } from "gatsby" 
import AuthorPhoto from './author-photo'


const AuthorItem = ({current}) => {
    const [isShown, setIsShown] = useState(false);
    const overlayStyle = isShown ? {top:190+'px'} : {top:200+'px'};
    return (
        <li onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <div className="divCompartiMOSSAuthor">
                <div className="divPicture">
                    <Link to={current.frontmatter.slug} title={current.frontmatter.title}>
                        <AuthorPhoto author={current.frontmatter.id} />
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

export default AuthorItem
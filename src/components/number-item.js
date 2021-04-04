import React, { useState } from 'react';
import { Link } from "gatsby" 
import styled from "styled-components";

const DivMagazine = styled.div`
    position: relative;
    display: inline-block;
    width: 266px;
    height: 350px;
    overflow: hidden;
    margin: 5px;

    a {
        display: block;
        height: 350px;        
    }
    img {
        width: 266px;
        max-width: 266px;
        height: 350px;
        max-height: 350px;        
    }
`

const NumberItem = ({current}) => {
    const [isShown, setIsShown] = useState(false);
    const overlayStyle = isShown ? {top:290+'px'} : {top:300+'px'};
    return (
        <li onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <DivMagazine>
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
            </DivMagazine>
        </li>              
    )
}

export default NumberItem
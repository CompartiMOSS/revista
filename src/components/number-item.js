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

const DivOverlay = styled.div`
    position: absolute;
    z-index: 20;
    top: 300px;
    left: 0;
    height: 350px;
    width: 266px;
    background-color: #f90b39;
    color: #fff;
    font-size: 11px;
    transition: all .5s ease-in-out;

    a {
        color: #fff;
        display: block;
        height: 340px;
        padding: 5px 10px;
        text-decoration: none;        
    }
    h2 {
        color: #fff;
        font-weight: 400;
        font-size: 15px;        
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
                <DivOverlay style={overlayStyle}>
                    <Link className="linkOverlay" to={current.frontmatter.slug} title={current.frontmatter.title}>
                        <h2>{current.frontmatter.title}</h2>
                    </Link>
                </DivOverlay>        
            </DivMagazine>
        </li>              
    )
}

export default NumberItem
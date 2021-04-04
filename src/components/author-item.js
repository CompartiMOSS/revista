import React, { useState } from 'react';
import { Link } from "gatsby" 
import AuthorPhoto from './author-photo'
import styled from "styled-components";

const AuthorStyled = styled.ul`
    position: relative;
    display: inline-block;
    width: 250px;
    height: 250px;
    overflow: hidden;
    
    div {
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;    
    }

    a {
        display: block;
        height: 250px;
        color: #fff;
        text-decoration: none;        
    }

    img {
        object-fit: cover;
        width: 250px;
        max-width: 250px;
        height: 250px;
        max-height: 250px;    
    }
`

const Overlay = styled.div`
    position: absolute;
    z-index: 20;
    top: 205px;
    left: 0;
    height: 250px;
    width: 250px;
    background-color: #f90b39;
    background-color: rgba(249,11,57,.85);
    color: #fff;
    font-size: 11px;
    transition: all .5s ease-in-out;    

    a {
        display: block;
        height: 240px;
        padding: 5px 10px;        
    }

    h2 {
        font-weight: 400;
        font-size: 16px;
        color: #fff;
    }
`

const AuthorItem = ({current}) => {
    const [isShown, setIsShown] = useState(false);
    const overlayStyle = isShown ? {top:190+'px'} : {top:200+'px'};

    return (
        <li onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <AuthorStyled>
                <div>
                    <Link to={current.frontmatter.slug} title={current.frontmatter.title}>
                        <AuthorPhoto author={current.frontmatter.id} />
                    </Link>
                </div>            
                <Overlay style={overlayStyle}>
                    <Link to={current.frontmatter.slug} title={current.frontmatter.title}>
                        <h2>{current.frontmatter.title}</h2>
                    </Link>
                </Overlay>        
            </AuthorStyled>
        </li>              
    )
}

export default AuthorItem
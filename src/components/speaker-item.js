import React, { useState } from 'react';
import styled from "styled-components";

const SpeakerStyled = styled.ul`
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
    top: 180px;
    left: 0;
    height: 350px;
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
        margin-left: 16px;
    }

    h3 {
        font-weight: 300;
        font-size: 14px;
        color: #fff;
        margin-left: 16px;
    }
`

const SpeakerItem = ({current, photo, session}) => {
    const [isShown, setIsShown] = useState(false);
    const overlayStyle = isShown ? {top:170+'px'} : {top:180+'px'};

    return (
        <li onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            <SpeakerStyled>
                <div>
                    <img src={photo} alt={current} />
                </div>            
                <Overlay style={overlayStyle}>
                    <h2>{current}</h2>
                    <h3>{session}</h3>
                </Overlay>        
            </SpeakerStyled>
        </li>              
    )
}

export default SpeakerItem
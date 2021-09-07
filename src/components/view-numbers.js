import React from 'react';
import NumberItem from './number-item';
import styled from "styled-components";

const NumbersStyled = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: top;
  margin: 0;
  margin-top: 16px;
  padding: 0;
  list-style: none;
  
  li {
    margin: 12px 8px;
    padding: 0;
    box-shadow: 0px 0px 15px rgba(0,0,0, 0.45);
    transition: all 0.3s ease-in-out;
    position: relative;
    display: inline-block;
    width: 276px;
    height: 360px;
    overflow: hidden;

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

    &:hover {
      box-shadow: 0px 0px 15px rgba(255,255,255, 0.45);
    }
  }
`;

const ViewNumbers = ({...props}) => {
  return (
    <NumbersStyled>
      {props.numbers.edges.map((number) => (
        <NumberItem current={number.node} key={number.node.frontmatter.slug} />
      ))}
    </NumbersStyled>
  )
}

export default ViewNumbers
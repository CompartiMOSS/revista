import React from 'react';
import NumberItem from './number-item';
import styled from "styled-components";

const NumbersStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: top;
  margin: 0;
  padding: 0;
  list-style: none;
  
  li {
    margin: 6px;
    padding: 0;
    box-shadow: 0px 0px 15px rgba(0,0,0, 0.45);
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 15px rgba(255,255,255, 0.45);
    }
  }
`;

const ViewNumbers = ({...props}) => {
  return (
    <section className="section-container">
      <header>
        <p>Para ver el contenido de la revista, haga click en el número a leer</p>
      </header>
      <NumbersStyled>
        {props.numbers.edges.map((number) => (
          <NumberItem current={number.node} key={number.node.frontmatter.slug} />
        ))}
      </NumbersStyled>
    </section>
  )
}

export default ViewNumbers
import React, { PureComponent } from 'react';
import AuthorItem from './author-item'
import styled from "styled-components";

const AuthorsStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
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

class ViewAuthors extends PureComponent {
  render() {
    return (
      <section className="section-container">
        <AuthorsStyled>
          {this.props.authors.edges.map((author) => (
            <AuthorItem current={author.node} key={author.node.frontmatter.slug} />
          ))}
        </AuthorsStyled>
      </section>
    );
  }
}
  
  export default ViewAuthors;
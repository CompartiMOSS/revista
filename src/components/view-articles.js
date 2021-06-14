import React, { PureComponent } from 'react';
import { Link } from 'gatsby'
import styled from "styled-components";

const ArticleNumberContent = styled.div`
  margin: 20px 0
` 
const HeaderIndex = styled.header`
  h2 {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 10px;
    font-size: 27px;
    color: #f90b39;    
  }
` 

const ArticleListStyled = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;
  margin: 5px auto;
  padding: 0 10px;
  box-sizing: border-box;
`;

const ArticleStyled = styled.article`
  flex: 1 1 auto;
  margin: 6px;
  padding: 10px;
  max-width: 250px;
  min-width: 150px;
  background-color: #f0f0f0;
  font-size: 15px;
  
  .linkAuthor, 
  .linkMagazine{
    color: #f90b39;
    font-style: italic;
  }

  a {
    color:  #303030;
    text-decoration: none;
  }

  a:hover {
    color: #f90b39;
  }
`;

class ViewArticles extends PureComponent {
    render() {
      return (
        <ArticleNumberContent>
          <div id="divIndex">
            <HeaderIndex>
              <h2>{this.props.title}</h2>
            </HeaderIndex>
            <ArticleListStyled>
              {this.props.articles.edges.map((article) => (
                <ArticleStyled key={article.node.frontmatter.slug}>        
                  <div className="divCompartiMOSSArticleListItem" key={article.node.frontmatter.slug}>
                    <Link to={article.node.frontmatter.slug} title={article.node.frontmatter.title}>
                      {article.node.frontmatter.title}
                    </Link>
                    &nbsp;
                    <Link className="linkAuthor" to={`/autores/${article.node.frontmatter.authorId}`} title={article.node.frontmatter.author}>
                      por {article.node.frontmatter.author}
                    </Link>
                  </div>
                </ArticleStyled>
              ))}
            </ArticleListStyled>
          </div>
        </ArticleNumberContent>
      );
    }
  }
  
  export default ViewArticles;
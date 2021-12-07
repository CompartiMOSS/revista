import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  ul: {
    margin: '0 0 0 24px',
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'row wrap',

    '& li': {
      flex: '1 1 320px',
      minWidth: 300,
      maxWidth: 350,
      marginBottom: 24,
      fontSize: '18px'
    },
    '& a': {
      display: 'block',
      margin: '6px 12px',
      padding: '12px 12px',
      textDecoration: 'none',
      color: '#f0f0f0',
      fontSize: '1em',
      fontWeight: 300,
      backgroundColor: 'rgba(0,0,0, 0.6)',
      transition: 'all 0.3s ease-in-out',
      boxShadow: '0px 0px 15px rgba(0,0,0, 0.45)',
      height: 300,
      overflow: 'hidden',
      boxSizing: 'border-box',
      '&:hover': {
        color: '#fff',
        backgroundColor: 'rgba(0,0,0, 0.5)'
      },
      '&:first-child': {
        marginTop: 0
      },
      '& .article-title': {
        minHeight: 78,
        maxHeight: 150,
        overflow: 'hidden',
        marginBottom: 10
      }      
    }
  }
})

const ViewArticlesRandom = ({...props}) => {
  const classes = useStyles();

  const topArticles = props.articles.edges; 

  return (
    <section>
      <ul className={classes.ul}>
        {topArticles.map((article) => (
          <li key={article.node.frontmatter.slug}>
            <Link to={article.node.frontmatter.slug} title={article.node.frontmatter.title}>
              <div className="article-title">
                {article.node.frontmatter.title} por {article.node.frontmatter.author}
              </div>
              {_getThumbnail(article.node.frontmatter)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function _getThumbnail(current) {
  if (current.featuredImage)
  {
    const style = {
      height: 200 + 'px',
      backgroundImage: 'url(' + current.featuredImage.childImageSharp.gatsbyImageData.images.fallback.src + ')',
      backgroundSize: 'cover'
    };
    return (
      <div style={style}></div>
    )
  }
  else 
  {
    return <></>
  }
}

export default ViewArticlesRandom
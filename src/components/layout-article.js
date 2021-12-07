import React from 'react'
import PropTypes from 'prop-types'
import Layout from './layout';
import SEO from './seo'
import { DiscussionEmbed } from "disqus-react"
import { makeStyles } from "@material-ui/core"
import ArticleHeader from './article-header'

const useStyles = makeStyles({
  sectionArticle: {
    margin: 'auto auto 40px',
    padding: '0 20px',
    maxWidth: 700,
    fontSize: 21,
    fontFamily: 'Calibri',
    wordWrap: 'break-word'
  }
})

const LayoutNumber = ({ children, pageContext }) => {
  const classes = useStyles();

  const disqusConfig = {
    shortname: "CompartiMOSS",
    config: { identifier: pageContext.frontmatter.slug, title: pageContext.frontmatter.title }
  }

  let discussion = <p>Disqus sólo en Producción</p>;
  if (process.env.NODE_ENV !== 'development') {      
      discussion = <DiscussionEmbed {...disqusConfig} />;
  }

  return (
    <Layout pageContext={pageContext}>
      <SEO title={pageContext.frontmatter.title} keywords={pageContext.frontmatter.keywords} />
      <ArticleHeader frontmatter={pageContext.frontmatter} />
      <section className={classes.sectionArticle}>
        {children}
      </section>
      {discussion}
    </Layout>
  );
};

LayoutNumber.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutNumber

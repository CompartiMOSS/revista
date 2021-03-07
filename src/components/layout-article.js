import React from 'react'
import PropTypes from 'prop-types'
import Layout from './layout';
import SEO from './seo'
import './layout.css'
import { DiscussionEmbed } from "disqus-react"


const LayoutNumber = ({ children, pageContext }) => {
  const disqusConfig = {
    shortname: "CompartiMOSS",
    config: { identifier: pageContext.frontmatter.slug, title: pageContext.frontmatter.title }
  }

  console.log("ENV: " + process.env.NODE_ENV);
  let discussion = <p>Disqus sólo en Producción</p>;
  if (process.env.NODE_ENV !== 'development') {      
      discussion = <DiscussionEmbed {...disqusConfig} />;
  }

  return (
    <Layout pageContext={pageContext}>
      <SEO title={pageContext.frontmatter.title} keywords={pageContext.frontmatter.keywords} />
      <section id="articleSection">
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

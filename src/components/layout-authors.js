import React from 'react'
import PropTypes from 'prop-types'
import Layout from './layout';
import SEO from './seo'
import './layout.css'

const LayoutAuthors = ({ children, pageContext }) => {
  return (
    <Layout pageContext={pageContext}>
      <SEO title={pageContext.frontmatter.title} keywords={pageContext.frontmatter.keywords} />
      <section id="SectionAuthors">
          {children}
      </section>      
    </Layout>
  );
};

LayoutAuthors.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutAuthors

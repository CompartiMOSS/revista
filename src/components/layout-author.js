import React from 'react'
import PropTypes from 'prop-types'
import Layout from './layout';
import SEO from './seo'
import './layout.css'

const LayoutAuthor = ({ children, pageContext }) => {
  return (
    <Layout pageContext={pageContext}>
      <SEO title={pageContext.frontmatter.title} keywords={['CompartiMOSS', 'Autor', pageContext.frontmatter.title]} />
      {children}
    </Layout>
  );
};

LayoutAuthor.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutAuthor

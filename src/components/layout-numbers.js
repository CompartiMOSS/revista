import React from 'react'
import PropTypes from 'prop-types'
import Layout from './layout';
import SEO from './seo'

const LayoutNumbers = ({ children, pageContext }) => {
  return (
    <Layout pageContext={pageContext}>
      <SEO title={pageContext.frontmatter.title} keywords={pageContext.frontmatter.keywords} />
      <section id="SectionNumbers">
          {children}
      </section>      
    </Layout>
  );
};

LayoutNumber.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutNumbers

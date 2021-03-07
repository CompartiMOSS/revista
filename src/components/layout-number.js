import React from 'react'
import PropTypes from 'prop-types'
import Layout from './layout';
import SEO from './seo'
import './layout.css'

const LayoutNumber = ({ children, pageContext }) => {
  return (
    <Layout pageContext={pageContext}>
      <SEO title={pageContext.frontmatter.title} keywords={pageContext.frontmatter.keywords} />
      <section id="SectionNumber">
        <div id="divLastNumberInfo">
          {children}
        </div>
      </section>      
    </Layout>
  );
};

LayoutNumber.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutNumber

import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/styles';
import PropTypes from 'prop-types'
import Layout from './layout';
import SEO from './seo'
import ArticleHeader from './article-header'

const PREFIX = 'LayoutNumber';

const Section = styled('div')(({ theme }) => ({
  margin: 'auto auto 40px',
  padding: '0 20px',
  maxWidth: 700,
  fontSize: 21,
  fontFamily: 'Calibri',
  wordWrap: 'break-word'
}));


const LayoutNumber = ({ children, pageContext }) => {

  const div = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "CompartiMOSS/revista")
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("label", "Comments")
    script.setAttribute("theme", "github-light")
    script.setAttribute("crossorigin", "anonymous")

    div.current.appendChild(script)
  }, [])

  return (
    <Layout pageContext={pageContext}>
      <SEO title={pageContext.frontmatter.title} keywords={pageContext.frontmatter.keywords} />
      <ArticleHeader frontmatter={pageContext.frontmatter} />
      <Section>
        {children}
        <div ref={div}></div>
      </Section>
    </Layout>
  );
};

LayoutNumber.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutNumber

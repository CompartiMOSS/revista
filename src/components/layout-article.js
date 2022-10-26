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

function htmlDecode(html) {
  return html.replace(/&([a-z]+);/ig, (match, entity) => {
    const entities = { amp: '&', apos: '\'', gt: '>', lt: '<', nbsp: '\xa0', quot: '"' };
    entity = entity.toLowerCase();
    if (entities.hasOwnProperty(entity)) {
      return entities[entity];
    }
    return match;
  });
}

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.repo = "CompartiMOSS/revista";
    script.issueTerm = "pathname";
    script.label="Comments";
    script.theme="github-light";
    script.crossOrigin="anonymous";

    document.body.appendChild(script)

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script)
    }    
  }, [])

  return (
    <Layout pageContext={pageContext}>
      <SEO title={pageContext.frontmatter.title} keywords={pageContext.frontmatter.keywords} />
      <ArticleHeader frontmatter={pageContext.frontmatter} />
      <section className={classes.sectionArticle}>
        {children}
      </section>
    </Layout>
  );
};

LayoutNumber.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutNumber

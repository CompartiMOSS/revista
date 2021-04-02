import React from 'react'
import PropTypes from 'prop-types'
import {MDXProvider} from '@mdx-js/react'
import CodeBlock from './CodeBlock'
import Header from './layout/header'
import Footer from './layout/footer';
import { Container, CssBaseline } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
// import './layout.css'
import './layout/layout.css'

const useStyles = makeStyles({
  body: {
    minHeight: 'calc(100vh - 80px - 200px)'
  }
});


const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
};


const Layout = ({ children, pageContext }) => {
  const classes = useStyles();

  return (
    <MDXProvider components={components}>
      <CssBaseline />
      <Header />  
      <Container maxWidth="xl" className={classes.body}>
        {children}
      </Container>
      <Footer />

{/* 
      <section>      
        <Header />  
        <div id="divBody"
          style={{
            margin: '0 auto',
            padding: '2px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <footer id="divFooter">
          <div id="FooterSocial">
              <a href="http://www.linkedin.com/groups?gid=3776291&amp;trk=hb_side_g" target="linkedin">
                  <img src="/images/layout/LinkedIn.png" alt="Siguemos en LinkedIn" title="Siguemos en LinkedIn" />
              </a>
              <a href="http://twitter.com/CompartiMOSScom" target="twitter">
                  <img src="/images/layout/twitter.png" alt="Siguemos en Twitter" title="Siguemos en Twitter" />
              </a>
          </div>
          <div id="FooterPowered">
              Powered by &nbsp;
              <span id="spanGSCPowered">
                  <a href="http://www.encamina.com">ENCAMINA</a>
              </span>
          </div>
        </footer>    
      </section>       */}
    </ MDXProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

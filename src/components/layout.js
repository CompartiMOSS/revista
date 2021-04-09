import React from 'react'
import PropTypes from 'prop-types'
import {MDXProvider} from '@mdx-js/react'
import CodeBlock from './CodeBlock'
import Header from './layout/header'
import Footer from './layout/footer';
import { Container, CssBaseline } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
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
    </ MDXProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

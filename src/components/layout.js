import React from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import {MDXProvider} from '@mdx-js/react'
import CodeBlock from './CodeBlock'
import Header from './layout/header'
import Footer from './layout/footer';
import { Container, CssBaseline } from "@mui/material"
import './layout/layout.css'

const PREFIX = 'Layout';

const classes = {
  body: `${PREFIX}-body`
};

const Root = styled(' MDXProvider')({
  [`& .${classes.body}`]: {
    minHeight: 'calc(100vh - 80px - 200px)'
  }
});

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
};

const Layout = ({ children, pageContext }) => {


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

import React from 'react'
import PropTypes from 'prop-types'
import Layout from './layout';
import styled from "styled-components";

const HomeStyled = styled.section`
  background-image: url('/images/layout/BgBody.png');
  background-color: #dfdfdf;
  background-size: contain;
  background-repeat: no-repeat;
`

const LayoutHome = ({ children, pageContext }) => {
  return (
    <HomeStyled>
      <Layout pageContext={pageContext}>
          {children}
      </Layout>
    </HomeStyled>
  );
};

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHome

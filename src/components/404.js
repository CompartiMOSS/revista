import React from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';

const NotFoundStyled = styled.div`
   margin: auto;
   text-align: center;

   img {
      max-height: 500px;
   }
`;

const NotFound = ({ frontmatter, ...props }) => {
   return (
      <>
         <NotFoundStyled>
            <Link to="/">
               <img src="/images/layout/404.png" alt="Página no encontrada"/>
            </Link>
         </NotFoundStyled>
      </>
   );
}

export default NotFound;
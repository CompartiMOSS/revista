import React from "react";
import { styled } from '@mui/styles';
import { Grid } from "@mui/material";
const PREFIX = 'Footer';

const StyledGrid = styled(Grid)({
    padding: "10px 0px",
    borderTop: "1px solid #676767",
    color: "#676767",
    fontWeight: 200,
    width: "100%",
    backgroundColor: "rgba(223, 223, 223, 0.85)",
    height: 70,
    boxSizing: "border-box",
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 24
});

const GridSocial = styled(Grid)({
    marginLeft: 10,
    '& a': {
        marginLeft: 10,
        marginRight: 10    
    }
});

const GridPowered = styled(Grid)({
    verticalAlign: "top",
    marginRight: 20,
    paddingRight: 20,
    textAlign: "right",
    fontSize: "1.3em",
    float: "right",
    '& a': {
        color: '#ff6a00',
        textDecoration: 'none'
    }
});

const SpanPowered = styled('span')({
    color: "#ff6a00",
    textDecoration: "none" 
});


const Footer = () => {
    return (
        <StyledGrid container>
            <GridSocial item>
                <a href="http://www.linkedin.com/groups?gid=3776291&amp;trk=hb_side_g" target="linkedin">
                    <img src="/images/layout/LinkedIn.png" alt="Siguemos en LinkedIn" title="Siguemos en LinkedIn" />
                </a>
               <a href="http://twitter.com/CompartiMOSScom" target="twitter">
                   <img src="/images/layout/twitter.png" alt="Siguemos en Twitter" title="Siguemos en Twitter" />
               </a>
            </GridSocial>
            <GridPowered item>
                Powered by &nbsp;
                <SpanPowered>
                    <a href="http://www.encamina.com">ENCAMINA</a>
                </SpanPowered>
            </GridPowered>
        </StyledGrid>
    );
}

export default Footer;
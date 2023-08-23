import React from "react";
import { Grid } from "@mui/material/Grid"
import { makeStyles } from "@mui/material/styles"

const useStyles = makeStyles({
    footer: {
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
        justifyContent: 'center',
        marginTop: 24
    },
    footerSocial: {
        marginLeft: 10,
        '& a': {
            marginLeft: 10,
            marginRight: 10    
        }
    },
    footerPowered: {
        verticalAlign: "top",
        marginRight: 20,
        textAlign: "right",
        fontSize: "1.3em",
        float: "right",
        '& a': {
            color: '#ff6a00',
            textDecoration: 'none'
        }
    },
    spanPowered: {
        color: "#ff6a00",
        textDecoration: "none"      
    }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.footer}>
            <Grid item className={classes.footerSocial}>
                <a href="http://www.linkedin.com/groups?gid=3776291&amp;trk=hb_side_g" target="linkedin">
                    <img src="/images/layout/LinkedIn.png" alt="Siguemos en LinkedIn" title="Siguemos en LinkedIn" />
                </a>
               <a href="http://twitter.com/CompartiMOSScom" target="twitter">
                   <img src="/images/layout/twitter.png" alt="Siguemos en Twitter" title="Siguemos en Twitter" />
               </a>
            </Grid>
            <Grid item className={classes.footerPowered}>
                Powered by &nbsp;
                <span id="spanPowered">
                    <a href="http://www.encamina.com">ENCAMINA</a>
                </span>
            </Grid>
        </Grid>
    )
}

export default Footer;
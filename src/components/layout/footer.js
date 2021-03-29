import React from "react";
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    footer: {
        padding: "10px 0px",
        borderTop: "1px solid #676767",
        color: "#676767",
        fontWeight: 200,
        width: "100%",
        backgroundColor: "rgba(223, 223, 223, 0.85)",
        textAlign: "center",
        height: 70,
        boxSizing: "border-box"
    },
    footerSocial: {
        height: 32,
        margin: 6,
        display: "inline-block",
        marginLeft: 20,
        marginRight: 20,
        textAlign: "left",
        fontSize: "1.3em",
        float: "left"     
    },
    footerPowered: {
        verticalAlign: "top",
        display: "inline-block",
        marginLeft: 20,
        marginRight: 20,
        textAlign: "right",
        fontSize: "1.3em",
        float: "right"
    },
    spanPowered: {
        color: "#ff6a00",
        textDecoration: "none"      
    }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
          <div className={classes.footerSocial}>
              <a href="http://www.linkedin.com/groups?gid=3776291&amp;trk=hb_side_g" target="linkedin">
                  <img src="/images/layout/LinkedIn.png" alt="Siguemos en LinkedIn" title="Siguemos en LinkedIn" />
              </a>
              <a href="http://twitter.com/CompartiMOSScom" target="twitter">
                  <img src="/images/layout/twitter.png" alt="Siguemos en Twitter" title="Siguemos en Twitter" />
              </a>
          </div>
          <div className={classes.footerPowered}>
              Powered by &nbsp;
              <span id="spanPowered">
                  <a href="http://www.encamina.com">ENCAMINA</a>
              </span>
          </div>
        </div>
    )
}

export default Footer;
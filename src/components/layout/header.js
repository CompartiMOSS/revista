import * as React from "react"
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container, Hidden, Fab } from "@material-ui/core"
import { KeyboardArrowUp } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core"
import SideDrawer from "./sideDrawer"
import HideOnScroll from "./hideOnScroll"
import BackToTop from "./backToTop";
import { Link } from 'gatsby'
import logo from '../../images/layout/Logo380x109.png';

const useStyles = makeStyles({
    appBar: {
        height: 200,
        backgroundColor: '#303030',
        padding: '0 20px',
        boxSizing: 'border-box'
    },
    logo: {
        float: 'left',
        backgroundImage: `url(${logo});`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 0,
        width: 400,
        height: 200
    },
    toolbar: {
        height: 200
    },
    link: {
        alignSelf: 'center'
    },
    navbarDisplayFlex: {
        display: `flex`,
        height: '100%',
        justifyContent: `space-between`,
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
        height: 100,
        margin: '20px 0'
    },
    linkText: {
        textDecoration: `none`,
        color: `white`,
        width: 130,
        backgroundColor: '#f8922c',
        fontSize: '27px',
        fontFamily: 'Segoe UI',
        fontWeight: 300,
        textAlign: 'right',
        margin: '0 2px'
    }
});

const navLinks = [
    { title: `Home`, path: `/` },
    { title: `Revistas`, path: `/revistas` },
    { title: `Autores`, path: `/autores` },
    { title: `La revista`, path: `/la-revista` },
    { title: `faq`, path: `/faq` },
]

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <HideOnScroll>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
                            <Link to="/" className={classes.link}>
                                <img src={logo} alt="CompartiMOSS logo" />
                            </Link>
                            <Hidden mdUp>
                                <SideDrawer navLinks={navLinks} />
                            </Hidden>
                            <Hidden smDown>
                                <div className={classes.navDisplayFlex}>
                                    {navLinks.map(({ title, path }) => (
                                        <Link to={path} className={classes.linkText}>
                                            <span>{title}</span>
                                        </Link>
                                    ))}                                    
                                </div>
                                {/* <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                                    {navLinks.map(({ title, path }) => (
                                        <Link to={path} className={classes.linkText}>
                                            <ListItem button>
                                                <ListItemText primary={title} />
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List> */}
                            </Hidden>
                        </Container>
                    </Toolbar>
                </AppBar>        
            </HideOnScroll>
            <Toolbar id="back-to-top-anchor" className={classes.toolbar}/>
            <BackToTop>
                <Fab color="secondary" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>            
        </>
    )
}

export default Header
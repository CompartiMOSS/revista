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
    divNav: {
        width: 130,
        backgroundColor: '#f8922c',
        margin: '0 2px',
        position: 'relative',
        '&:hover': {
            backgroundColor: '#f90b39 !important'
        }
    },
    linkNav: {
        textDecoration: `none`,
        color: `white`,
        fontSize: '27px',
        fontFamily: 'Segoe UI',
        fontWeight: 300,
        width: 130,
        height: 100,
        position: 'absolute'
    },
    selectedNav: {
      backgroundColor: '#f90b39 !important'
    },
    divLink: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 5
    }
});

const navLinks = [
    { title: `Inicio`, path: `/`, icon: '../../images/icons/Menu-Home.png' },
    { title: `Revistas`, path: `/revistas`, icon: '../../images/icons/Menu-Magazines.png' },
    { title: `Autores`, path: `/autores`, icon: '../../images/icons/Menu-Autors.png' },
    { title: `La revista`, path: `/la-revista`, icon: '../../images/icons/Menu-Magazine.png' }
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
                                <div id="mainMenu" className={classes.navDisplayFlex}>
                                    {navLinks.map(({ title, path }) => (
                                        <div className={classes.divNav} key={title}>
                                            <Link to={path} className={classes.linkNav} activeClassName={classes.selectedNav}>
                                                <div className={classes.divLink}>
                                                    <span>{title}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}                                    
                                </div>
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
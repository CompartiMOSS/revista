import * as React from "react"
import { AppBar, Toolbar, Container, Hidden, Fab } from "@mui/material"
import { KeyboardArrowUp } from "@mui/icons-material"
import { styled } from '@mui/styles';
import SideDrawer from "./sideDrawer"
import HideOnScroll from "./hideOnScroll"
import BackToTop from "./backToTop";
import { Link } from 'gatsby'
import logo from '../../images/layout/Logo380x109.png';

const AppBarStyled = styled(AppBar)({
    height: 200,
    backgroundColor: '#303030 !important',
    padding: '0 20px',
    boxSizing: 'border-box'
});

const ToolbarStyled = styled(Toolbar)({
    height: 200
});

const ContainerStyled = styled(Container)({
    display: `flex !important`,
    height: '100%',
    justifyContent: `space-between`,
})

const LinkMobile = styled(Link)({
    alignSelf: 'center',
    width: 200,
    '& img': {
        width: 200
    }
});

const LinkStyled = styled(Link)({
    alignSelf: 'center'
});

const MainMenu = styled('div')({
    display: `flex`,
    justifyContent: `space-between`,
    height: 100,
    margin: '20px 0'
});

const Nav = styled('div')({
    width: 130,
    backgroundColor: '#f8922c',
    margin: '0 2px',
    position: 'relative',
    '&:hover': {
        backgroundColor: '#f90b39 !important'
    }
});

const LinkNav = styled(Link)({
    textDecoration: `none`,
    color: `white`,
    fontSize: '27px',
    fontFamily: 'Segoe UI',
    fontWeight: 300,
    width: 130,
    height: 100,
    position: 'absolute'
});

const DivLink = styled('div')({
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 5
});

const navLinks = [
    { title: `Inicio`, path: `/`, icon: '../../images/icons/Menu-Home.png' },
    { title: `Revistas`, path: `/revistas`, icon: '../../images/icons/Menu-Magazines.png' },
    { title: `Autores`, path: `/autores`, icon: '../../images/icons/Menu-Autors.png' },
    { title: `La revista`, path: `/la-revista`, icon: '../../images/icons/Menu-Magazine.png' }
]

const Header = () => {
    return (
        <>
            <HideOnScroll>
                <AppBarStyled position="fixed">
                    <ToolbarStyled>
                        <ContainerStyled maxWidth="xl">
                            <Hidden mdUp>
                                <LinkMobile to="/" >
                                    <img src={logo} alt="CompartiMOSS logo" />
                                </LinkMobile>
                            </Hidden>
                            <Hidden smDown>
                                <LinkStyled to="/">
                                    <img src={logo} alt="CompartiMOSS logo" />
                                </LinkStyled>
                            </Hidden>
                            <Hidden mdUp>
                                <SideDrawer navLinks={navLinks} />
                            </Hidden>
                            <Hidden smDown>
                                <MainMenu id="mainMenu">
                                    {navLinks.map(({ title, path }) => (
                                        <Nav key={title}>
                                            <LinkNav to={path} activeStyle={{backgroundColor: '#f90b39 !important'}} >
                                                <DivLink>
                                                    <span>{title}</span>
                                                </DivLink>
                                            </LinkNav>
                                        </Nav>
                                    ))}                                    
                                </MainMenu>
                            </Hidden>
                        </ContainerStyled>
                    </ToolbarStyled>
                </AppBarStyled>        
            </HideOnScroll>
            <ToolbarStyled id="back-to-top-anchor"/>
            <BackToTop>
                <Fab sx={{"backgroundColor": "#f50057 !important"}} color="secondary" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>            
        </>
    )
}

export default Header
import * as React from "react"
import { IconButton, List, ListItem, ListItemText, Drawer, ListItemIcon } from "@mui/material"
import { Menu } from "@mui/icons-material"
import { useState } from "react"
import { styled } from '@mui/styles';

const ListDiv = styled('div')({
    width: 250,
    backgroundColor: '#303030'
});

const LinkText = styled('a')({
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
});

const DrawerStyled = styled(Drawer)({
    backgroundColor: '#303030'
});

const SideDrawer = ({ navLinks }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setIsOpen(open);
    }

    const sideDrawerList = (anchor) => (
        <ListDiv role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List component="nav">
                {navLinks.map(({ title, path, icon }) => (
                    <LinkText href={path} key={title}>
                        <ListItem button>
                            <ListItemIcon>
                                <img src={icon} alt="inicio" />
                            </ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItem>
                    </LinkText>
                ))}
            </List>
        </ListDiv>
    );

    return (
        <React.Fragment>
            <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                <Menu fontSize="large" style={{ color: `white` }} />
            </IconButton>
            <DrawerStyled anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
                {sideDrawerList("right")}
            </DrawerStyled>            
        </React.Fragment>
    )
}

export default SideDrawer
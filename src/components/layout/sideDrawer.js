import * as React from "react"
import { IconButton, List, ListItem, ListItemText, Drawer, ListItemIcon } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    list: {
        width: 250,
        backgroundColor: '#303030'
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`,
    },
    paper: {
        backgroundColor: '#303030'
      }    
})

const SideDrawer = ({ navLinks }) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setIsOpen(open);
    }

    const sideDrawerList = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List component="nav">
                {navLinks.map(({ title, path, icon }) => (
                    <a href={path} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemIcon>
                                <img src={icon} alt="inicio" />
                            </ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItem>
                    </a>
                ))}
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                <Menu fontSize="large" style={{ color: `white` }} />
            </IconButton>
            <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)} classes={{ paper: classes.paper }}>
                {sideDrawerList("right")}
            </Drawer>            
        </React.Fragment>
    )
}

export default SideDrawer
import * as React from "react"
import { Link } from 'gatsby'
import { ListItem, ListItemText } from "@material-ui/core"

const Nav = ({ navLinks, classes }) => {
    return (
        <ul className={classes.ulNav}>
            {navLinks.map(({ title, path }) => (
                <li className={classes.liNav}>
                    <Link to={path} key={title} className={classes.linkText}>
                        <div className={classes.divLink}>
                            <span>{title}</span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Nav
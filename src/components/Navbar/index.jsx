import classes from './Navbar.module.css'

export function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <a href="#f">Profile</a>
                </li>
                <li className={classes.item}>
                    <a href="#f">Messages</a>
                </li>
                <li className={classes.item}>
                    <a href="#f">News</a>
                </li>
                <li className={classes.item}>
                    <a href="#f">Music</a>
                </li>
                <li className={classes.item}>
                    <a href="#f">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

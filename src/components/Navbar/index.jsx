import './Navbar.css'

export function Navbar() {
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li className="nav_list__item">
                    <a href="#f">Profile</a>
                </li>
                <li className="nav_list__item">
                    <a href="#f">Messages</a>
                </li>
                <li className="nav_list__item">
                    <a href="#f">News</a>
                </li>
                <li className="nav_list__item">
                    <a href="#f">Music</a>
                </li>
                <li className="nav_list__item">
                    <a href="#f">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

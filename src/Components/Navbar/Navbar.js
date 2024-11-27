// import { NavLink } from "react-router-dom";
import { useState } from "react";
import './style.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive)
    };

    const menuItems = [
        {mid: 1, label: 'Home', link: '/'},
        {mid: 2, label: 'Services', link: '/services'},
        {mid: 3, label: 'About Us', link: '/about-us'},
        {mid: 4, label: 'Portfolio', link: '/portfolio'},
        {mid: 5, label: 'Contact', link: '/contact'},
    ]

    return (
        <div className={` ${mobileMenuActive ? 'rz-mobile-nav-open' : ''}`}>
            <nav>
                <ul>
                    {
                        menuItems.map((menuList) => (
                                <li key={menuList.mid}>
                                    <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to={menuList.link}>{menuList.label}</NavLink>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>

            <div onClick={toggleMobileMenu} className="rz-menu-toggle">
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar;
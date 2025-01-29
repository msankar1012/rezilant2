import { useState, useEffect } from "react";
import './style.css';
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const location = useLocation(); // React Router's location hook

    useEffect(() => {
        // Automatically scroll to the top when navigating to a new page
        window.scrollTo(0, 0);
    }, [location.pathname]); // Trigger whenever the route changes

    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    };

    const toggleSubmenu = (mid) => {
        setActiveSubmenu(activeSubmenu === mid ? null : mid);
    };

    const menuItems = [
        { mid: 1, label: 'Home', link: '/' },
        {
            mid: 2,
            label: 'Services',
            submenu: [
                { sid: 1, label: 'AI Agents', link: '/ai-agents' },
                { sid: 2, label: 'UI/UX Design', link: '/ui-ux-design' },
                { sid: 3, label: 'Web App Development', link: '/web-app-development' },
                { sid: 4, label: 'Mobile App Development', link: '/mpbile-app-development' },
            ],
        },
        { mid: 3, label: 'About Us', link: '/about-us' },
        { mid: 4, label: 'Portfolio', link: '/portfolio' },
        { mid: 5, label: 'Contact', link: '/contact' },
    ];

    return (
        <div className={` ${mobileMenuActive ? 'rz-mobile-nav-open' : ''}`}>
            <nav>
                <ul>
                    {menuItems.map((menuItem) => (
                        <li key={menuItem.mid}>
                            <div
                                onClick={() => menuItem.submenu && toggleSubmenu(menuItem.mid)}
                                className="menu-item"
                            >
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'is-active' : '')}
                                    to={menuItem.link}
                                >
                                    {menuItem.label}
                                </NavLink>
                                {menuItem.submenu && (
                                    <span className="submenu-toggle">{activeSubmenu === menuItem.mid ? '-' : '+'}</span>
                                )}
                            </div>
                            {menuItem.submenu && activeSubmenu === menuItem.mid && (
                                <ul className="submenu">
                                    {menuItem.submenu.map((subItem) => (
                                        <li key={subItem.sid}>
                                            <NavLink
                                                className={({ isActive }) => (isActive ? 'is-active' : '')}
                                                to={subItem.link}
                                            >
                                                {subItem.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <div onClick={toggleMobileMenu} className="rz-menu-toggle">
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
            </div>
        </div>
    );
};

export default Navbar;

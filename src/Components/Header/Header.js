import Navbar from '../Navbar/Navbar'
import {useEffect} from "react";
import './style.css'
import logo from '../../img/logo-rezilant.svg'
import pkg from '../../../package.json'

const Header = () => {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.rz-header');
        const scrollTop = window.scrollY;
        scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    return (
        <header className='rz-header'>
            <div className='container'>
                <div className='logo'>
                    <a href="/"><img src={logo} alt={pkg.name}/></a>
                </div>

                <Navbar></Navbar>

                <div className='btn-right'>
                    <a href='/contact' className='btn btn-primary'>Get Started</a>
                </div>
            </div>
        </header>
    )
}

export default Header;
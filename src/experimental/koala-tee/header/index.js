import React from 'react'

import Logo from '../images/koala_tee.png'
import { NavItemBlue } from '../nav-item'

import css from './index.css'

const Header = () => (
    <header className={css.headerGrid}>
        <span className={css.shippingHeader}>All Prices Include Tax & Shipping to the U.S.</span>
        <span className={css.titleGrid}>
            <img src={Logo} className={css.logo} alt='koala tee logo' />
            <span className={css.titleContainer}>
                <h1 className={css.title}>Koala Tee Nerd</h1>
                <h2 className={css.subtitle}>Quality T-shirts for Quality Nerds</h2>
            </span> 
        </span>
        <nav className={css.navBarContainer}>
            <NavItemBlue to='/experimental/koalatee'>Home</NavItemBlue>
            <NavItemBlue to='/experimental/koalatee/about'>About</NavItemBlue>
            <NavItemBlue to='/experimental/koalatee/faq'>FAQ</NavItemBlue>
            <NavItemBlue to='/experimental/koalatee/sizes'>Sizes</NavItemBlue>
            <NavItemBlue to='/experimental/koalatee/contact'>Contact Us</NavItemBlue>
        </nav>    
    </header>
)

export default Header

import React from 'react'

import Logo from '../images/koala_tee.png'
import NavItem from '../nav-item'

import css from './index.css'

const Header = () => (
    <div className={css.headerGrid}>
        <span className={css.shippingHeader}>All Prices Include Tax & Shipping to the U.S.</span>
        <span className={css.titleGrid}>
            <img src={Logo} className={css.logo} alt='koala tee logo' />
            <span className={css.titleContainer}>
                <h1 className={css.title}>Koala Tee Nerd</h1>
                <h2 className={css.subtitle}>Quality T-shirts for Quality Nerds</h2>
            </span> 
        </span>
        <nav className={css.navBarContainer}>
            <NavItem to='/experimental/koalatee'>Home</NavItem>
            <NavItem to='/experimental/koalatee/about'>About</NavItem>
            <NavItem to='/experimental/koalatee/faq'>FAQ</NavItem>
            <NavItem to='/experimental/koalatee/sizes'>Sizes</NavItem>
            <NavItem to='/experimental/koalatee/contact'>Contact Us</NavItem>
        </nav>    
    </div>
)

export default Header

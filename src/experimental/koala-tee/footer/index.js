import React from 'react'

import { NavItemWhite } from '../nav-item'

import css from './index.css'

const Footer = () => (
    <div className={css.footerGrid}>
        <nav className={css.navBarContainer}>
            <NavItemWhite to='/experimental/koalatee'>Home</NavItemWhite>
            <NavItemWhite to='/experimental/koalatee/about'>About</NavItemWhite>
            <NavItemWhite to='/experimental/koalatee/faq'>FAQ</NavItemWhite>
            <NavItemWhite to='/experimental/koalatee/sizes'>Sizes</NavItemWhite>
            <NavItemWhite to='/experimental/koalatee/contact'>Contact Us</NavItemWhite>
        </nav>  
        <nav className={css.socialNav}>
        <NavItemWhite to='/experimental/facebook'>Facebook</NavItemWhite>
            <NavItemWhite to='/experimental/koalatee/instagram'>Instagram</NavItemWhite>
            <NavItemWhite to='/experimental/koalatee/twitter'>Twitter</NavItemWhite>
            <NavItemWhite to='/experimental/koalatee/pinterest'>Pinterest</NavItemWhite>
        </nav>
    </div>
)

export default Footer

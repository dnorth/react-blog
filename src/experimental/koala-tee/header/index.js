import React from 'react'

import css from './index.css'

const Header = () => (
    <div className={css.container}>
        <span className={css.titleContainer}>
            <h1 className={css.title}>Koala Tee Nerd</h1>
            <h2 className={css.subtitle}>Quality T-shirts for Quality Nerds</h2>
        </span>
    </div>
)

export default Header

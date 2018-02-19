import React from 'react'

import Footer from './footer'
import Header from './header'

import css from './index.css'

const KoalaTee = () => (
    <div className={css.koalaGrid}>
        <Header />
        <span>Content</span>
        <Footer />
    </div>
)

export default KoalaTee

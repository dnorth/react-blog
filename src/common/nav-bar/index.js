import autobind from 'autobind-decorator'
import classnames from 'classnames'
import throttle from 'lodash.throttle'
import React from 'react'
import { Sticky } from 'react-sticky'

import css from './index.css'

@autobind
export default class NavigationBar extends React.Component {
  state = {
    shouldDisplayNav: false,
    isAtTheTop: true
  }

  calculateDisplayNav() {
    this.setState({
      shouldDisplayNav: this.prevScroll >= window.scrollY,
      isAtTheTop:  window.scrollY === 0,
      scrollWHY: window.scrollY >= 60
    })

    this.prevScroll = window.scrollY
  }

  componentDidMount(){
      window.addEventListener('scroll', throttle(this.calculateDisplayNav, 200));
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.calculateDisplayNav);
  }

  render() {
    const classname = classnames(css.content, (this.state.scrollWHY || (this.state.shouldDisplayNav && !this.state.isAtTheTop)) && css.fixed,
                      !this.state.isAtTheTop && this.state.shouldDisplayNav && classnames(css.displaySticky, css.isTransitioning))

    return (    
      <div className={css.parent}>
        <div className={classname}>
          Sticky Sticky
        </div>
      </div> 
    )
  } 
}
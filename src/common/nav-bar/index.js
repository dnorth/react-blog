import autobind from 'autobind-decorator'
import throttle from 'lodash.throttle'
import React from 'react'
import { Sticky } from 'react-sticky'

import css from './index.css'

@autobind
export default class NavigationBar extends React.Component {
  state = {
    shouldDisplayNav: false
  }

  calculateDisplayNav() {
    this.setState({
      shouldDisplayNav: this.prevScroll >= window.scrollY && window.scrollY != 0
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
    return (
      this.state.shouldDisplayNav
      ? (
        <Sticky>
          {
            props => {
              return (
                <div className={css.stickyContent} style={props.style}>
                  {this.props.children}
                </div>
              )
            }
          }
        </Sticky>
      )
      : <div className={css.content}>Sticky Sticky</div>
    )
  } 
}
import autobind from 'autobind-decorator'
import throttle from 'lodash.throttle'
import React from 'react'
import { Sticky } from 'react-sticky'

import css from './index.css'

@autobind
export default class NavigationBar extends React.Component {
  state = {
    prevScroll: 0,
    shouldDisplayNav: false
  }

  calculateDisplayNav() {
    this.setState({
      shouldDisplayNav: this.state.prevScroll >= window.scrollY && window.scrollY != 0,
      prevScroll: window.scrollY
    })
  }

  componentDidMount(){
      window.addEventListener('scroll', throttle(this.calculateDisplayNav, 200));
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.calculateDisplayNav);
  }

  render() {
    console.log('shouldDisplayNav: ', this.state.shouldDisplayNav)
    
    return (
      this.state.shouldDisplayNav
      ? (
        <Sticky>
          {
            props => {
              return (
                <div className={css.content} style={props.style}>
                  {this.props.children}
                </div>
              )
            }
          }
        </Sticky>
      )
      : <div>Sticky Sticky</div>
    )
  } 
}
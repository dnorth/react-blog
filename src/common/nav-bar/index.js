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
      isAtTheTop:  window.scrollY === 0
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
    const classname = classnames(this.state.isAtTheTop ? css.content : css.stickyContent, 
                      this.state.shouldDisplayNav || this.state.isAtTheTop ? css.displaySticky : css.hideSticky)

    return (
      <div>
        <Sticky>
          {
            props => {
              return (
                <div className={classname} style={ {...props.style, transform: ''}}>
                  {this.props.children}
                </div>
              )
            }
          }
        </Sticky>
      </div>
    )
  } 
}
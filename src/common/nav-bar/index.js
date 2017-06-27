import autobind from 'autobind-decorator'
import classnames from 'classnames'
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
      shouldDisplayNav: this.prevScroll >= window.scrollY && window.scrollY !== 0
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
    const classname = classnames(css.stickyContent, this.state.shouldDisplayNav ? css.displaySticky : css.hideSticky)

    return (
      <div>
        <div className={css.content}>Sticky Sticky</div>

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
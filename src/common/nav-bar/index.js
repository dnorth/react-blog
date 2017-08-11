import autobind from 'autobind-decorator'
import React from 'react'
import throttle from 'lodash.throttle'
import { Sticky } from 'react-sticky'

import css from './index.css'


@autobind
export default class NavigationBar extends React.Component {
  state = {
    isAtTop: true
  }
  
  calculateDisplayNav() {
    this.setState({
      isAtTop: window.scrollY === 0
    })
  }
  
  componentDidMount() {
    window.addEventListener('scroll', throttle(this.calculateDisplayNav, 200))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.caluclateDisplayNav)
  }
  
  render() {

    const stickyClass = this.state.isAtTop ? css.content : css.stickyContent

    return (
      <div>
        <Sticky>
          {
            props => {
              return (
                <div className={stickyClass} style={ {...props.style, transform: ''} }>
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
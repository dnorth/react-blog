import autobind from 'autobind-decorator'
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
      shouldDisplayNav: this.state.prevScroll > window.scrollY,
      prevScroll: window.scrollY
    })
  }

  componentDidMount(){
      window.addEventListener('scroll', this.calculateDisplayNav);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.calculateDisplayNav);
  }

  render() {
    return (
      <Sticky>
        {
          props => {
            return (
              <div className={css.content} style={props.style}>
                Sticky sticky
              </div>
            )
          }
        }
      </Sticky>
    )
  } 
}
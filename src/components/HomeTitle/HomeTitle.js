import React, { Component } from 'react'
import Particles from 'react-particles-js'
import FontAwesome from 'react-fontawesome'
import Scroll from 'react-scroll'
import particleSetting from './particle.json'

const scroll = Scroll.animateScroll

class HomeTitle extends Component {
  handleScrollDown = () => {
    scroll.scrollTo(window.innerHeight)
  }

  render() {
    const particlesStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
    }

    return (
      <div id="homeTitle" className="section">
        <Particles
          width="100%"
          height="100%"
          style={particlesStyle}
          params={particleSetting}
        />
        <div className="welcome">
          <h3>Hello, Welcome to</h3>
          <h1>ReactMaker</h1>
        </div>
        <div
          onClick={this.handleScrollDown}
          className="scrollDown bounce"
        >
          <FontAwesome name="chevron-down" />
        </div>
      </div>
    )
  }
}

export default HomeTitle

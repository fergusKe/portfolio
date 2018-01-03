import React, { Component } from 'react'
import Particles from 'react-particles-js'

class HomeTitle extends Component {
  render() {
    const particlesStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
    }

    return (
      <div id="homeTitle" className="section">
        <Particles
          style={particlesStyle}
        />
      </div>
    )
  }
}

export default HomeTitle

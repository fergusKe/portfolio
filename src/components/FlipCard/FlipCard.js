import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './FlipCard.scss'

class FlipCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    Expertise: PropTypes.string,
    Introduction: PropTypes.string,
  }

  render() {
    return (
      <div className="container flipCard">
        <div className="front" style={{ backgroundImage: `url(${this.props.photo})` }}>
          <div className="inner">
            <p>{this.props.name}</p>
            <span>{this.props.Expertise}</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{this.props.Introduction}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FlipCard

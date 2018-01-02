import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

import './Card.scss'

class Card extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    demoUrl: PropTypes.string,
    repoUrl: PropTypes.string,
  }

  render() {
    const {
      name,
      description,
      img,
      demoUrl,
      repoUrl,
    } = this.props

    const bgStyle = {
      backgroundImage: `url("${img}")`
    }

    return (
      <div className="card">
        <div className="bgimg" style={bgStyle} />
        <div className="buttons">
          <a title="Demo" href={demoUrl} target="_blank">
            <div className="circle demo">
              <FontAwesome name="laptop" />
            </div>
          </a>
          <a title="Github" href={repoUrl} target="_blank">
            <div className="circle repo">
              <FontAwesome name="github-alt" />
            </div>
          </a>
        </div>
        <div className="cardInfo">
          <div className="title">{name}</div>
          <div className="des">{description}</div>
        </div>
      </div>
    )
  }
}

export default Card

import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

    return (
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <div><img src={img} alt="" /></div>
        <div>{demoUrl}</div>
        <div>{repoUrl}</div>
      </div>
    )
  }
}

export default Card

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

    return (
      <div className="card">
        <img
          className="bgimg"
          src={img}
          alt=""
        />

        <div className="cardInfo">
          <div className="title" title={name}>{name}</div>
          <div className="des" title={description}>{description}</div>
          <div className="buttons">
            {
              demoUrl &&
              <a title="Demo" href={demoUrl} rel="noopener noreferrer" target="_blank">
                <div className="circle demo">
                  <FontAwesome name="laptop" />
                </div>
              </a>
            }
            {
              repoUrl &&
              <a title="Github" href={repoUrl} rel="noopener noreferrer" target="_blank">
                <div className="circle repo">
                  <FontAwesome name="github-alt" />
                </div>
              </a>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Card

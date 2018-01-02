import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Section.scss'

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
  }

  render() {
    const { title, id } = this.props

    return (
      <div id={id} className="section">
        <h2>{title}</h2>
      </div>
    )
  }
}

export default Section

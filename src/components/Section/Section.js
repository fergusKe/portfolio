import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from '../Card/Card'

import './Section.scss'

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    dataList: PropTypes.array,
  }

  render() {
    const { title, id, dataList, goDetail } = this.props

    return (
      <div id={id} className="section">
        <h2>{title}</h2>
        <button className="more" onClick={() => goDetail(id)}>More</button>
        {
          dataList.map(data => (
            <Card
              {...data}
            />
          ))
        }
      </div>
    )
  }
}

export default Section

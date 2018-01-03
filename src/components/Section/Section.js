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
    const {
      title, id, dataList, goDetail, desc
    } = this.props

    return (
      <div id={id} className="section">
        <div className="titleText">
          <h2>{title}</h2>
          <p>{desc}</p>
          <button className="more" onClick={() => goDetail(id)}>More</button>
        </div>
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

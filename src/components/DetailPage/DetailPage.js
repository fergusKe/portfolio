import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from '../Card/Card'

import webJson from '../../containers/Home/webData.json'
import './DetailPage.scss'

class DetailPage extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  componentDidMount() {
    const menuEle = document.querySelector('.menu')

    this.page.addEventListener('scroll', () => {
      if (this.page.scrollTop > 0) {
        menuEle.classList.add('opacity')
      } else {
        menuEle.classList.remove('opacity')
      }
    })
  }


  render() {
    const { type } = this.props.match.params
    const matchObject = webJson.find(item => item.key === type)

    return (
      <div className="detailPage" ref={page => this.page = page} >
        <p>數量:{matchObject.dataList.length}</p>
        <div className="detailContainer">
          {
            matchObject && [...matchObject.dataList].reverse().map(data => (
              <Card
                {...data}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default DetailPage

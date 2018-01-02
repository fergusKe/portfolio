import React, { Component } from 'react'
import HomeTitle from '../../components/HomeTitle/HomeTitle'
import Section from '../../components/Section/Section'

import webJson from './webData.json'
import './Home.scss'


class Home extends Component {
  render() {
    return (
      <div className="pageHome">
        <HomeTitle />
        {
          webJson.map(sectionData => (
            <Section
              key={sectionData.key}
              title={sectionData.title}
              dataList={sectionData.dataList}
            />
          ))
        }
      </div>
    )
  }
}

export default Home

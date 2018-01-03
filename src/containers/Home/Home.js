import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AnimatedRoute } from 'react-router-transition'
import FontAwesome from 'react-fontawesome'

import HomeTitle from '../../components/HomeTitle/HomeTitle'
import Section from '../../components/Section/Section'
import DetailPage from '../../components/DetailPage/DetailPage'

import webJson from './webData.json'
import './Home.scss'


class Home extends Component {
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
  }

  goDetail = (type) => {
    this.props.history.push(`/detail/${type}`)
  }

  goHome = () => {
    this.props.history.push('/')
  }

  render() {
    const { isExact } = this.props.match

    return (
      <div id="pageHome">
        <HomeTitle />
        {
          webJson.map(sectionData => (
            <Section
              key={sectionData.key}
              title={sectionData.title}
              dataList={sectionData.dataList.slice(-3).reverse()}
              id={sectionData.key}
              goDetail={this.goDetail}
              desc={sectionData.desc}
            />
          ))
        }
        <div className={`menu ${!isExact && 'slideIn'}`}>
          {
            webJson.map(sectionData => (
              <Link className="link" to={`/detail/${sectionData.key}`}>{sectionData.title}</Link>
            ))
          }
        </div>
        <div className={`goHome ${!isExact && 'slideIn'}`} onClick={this.goHome}>
          <div className="animated bounce">
            <FontAwesome name="chevron-left" />
          </div>
        </div>
        <AnimatedRoute
          className="animateRoute"
          path="/detail/:type"
          component={DetailPage}
          atEnter={{ offset: 100 }}
          atLeave={{ offset: 100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`,
          })}
        />
      </div>
    )
  }
}

export default Home

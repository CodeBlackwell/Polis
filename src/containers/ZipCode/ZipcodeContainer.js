import React, { Component } from 'react'
import Zipcode from '../../components/Zipcode/Zipcode'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import { getRepresentatives } from '../../actions/actionRepresentatives'
import { getContributorData } from '../../actions/actionContributor'


class ZipcodeContainer extends Component {

  constructor(props) {
    super(props)

    this.zipcodeSubmit.bind(this)
  }

  zipcodeSubmit(zipcode) {
    this.props.dispatch(getRepresentatives(zipcode))
    this.props.dispatch(getContributorData(zipcode))

    browserHistory.push('representatives')
  } 

  render() {
    return (
      <Zipcode zipcodeSubmit={this.zipcodeSubmit} />
    )
  }
}


export default connect()(ZipcodeContainer)


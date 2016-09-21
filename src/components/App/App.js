import React, { Component } from 'react'
import { connect } from 'react-redux'

import FrontPage from '../../containers/FrontPage/FrontPage'
import Representatives from '../../containers/Representatives/Representatives'
import TopNavbar from '../TopNavBar/TopNavBar'
import Footer from '../Footer/Footer'
import { getContributorData } from '../../actions/actionContributor'
import { getRepresentatives } from '../../actions/actionRepresentatives'
import { loginSuccess } from '../../actions/actionLogin'

import './App.scss';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    const token = localStorage.getItem('token') 
    if (token !== "undefined") {
      dispatch(loginSuccess())
    }
    window.navigator.geolocation.getCurrentPosition(function(pos){
      fetch('/api/zipcode/' + pos.coords.latitude + '/' + pos.coords.longitude)
        .then(response => response.json())
        .then(location => {
          dispatch(getRepresentatives(location.results[0].address_components[0].short_name))
          dispatch(getContributorData(location.results[0].address_components[0].short_name))
      })
    }.bind(this))
  }
  render() {
    const { store, children } = this.props
    return (
      <div className="main">
        <TopNavbar />
      	{children}
        <Footer />
      </div>
    )
  }
}

export default connect()(App)
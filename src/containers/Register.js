import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userRegister } from '../actions/actionLogin'
import { getRepresentatives } from '../actions/index'
import RegisterForm from '../components/RegisterForm'
import Zipcode from '../components/Zipcode'
import { browserHistory } from 'react-router'


export class Register extends Component {
   constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
      this.zipcodeSubmit = this.zipcodeSubmit.bind(this)
   }

   onSubmit(login, password) {
      this.props.dispatch(userRegister(login, password))
   }

   zipcodeSubmit(zipcode) {
      this.props.dispatch(getRepresentatives(zipcode))
      browserHistory.push('representatives')
   }

   render () {
      const { registrationError } = this.props
      return <div className='login-container'>
            <Zipcode zipcodeSubmit={this.zipcodeSubmit} />
            <RegisterForm onSubmit={this.onSubmit} />
            { registrationError ? <div className='registration-error'>Sorry, that email is already taken.</div> : null}
      </div>
   }
}

function mapStateToProps(state) {
   const registrationError = state.user.registrationError
   return {
      registrationError
   }
}

export default connect(mapStateToProps)(Register)
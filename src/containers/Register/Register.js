import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userRegister } from '../../actions/actionLogin'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

class Register extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(login, password) {
     this.props.dispatch(userRegister(login, password))
   }



  render () {
     const { registrationError } = this.props
     return <div className='register-container'>
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
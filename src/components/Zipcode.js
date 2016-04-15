import React, { Component } from 'react'

export default class Zipcode extends Component {
  handleSubmit(e) {
      e.preventDefault()
      this.props.zipcodeSubmit(this.zipcode.value)
   }

  render() {
    return <div>
        <p className='zipcode-header'>Find Your Representatives</p>
        <form action="#" onSubmit={(e) => this.handleSubmit(e)}>
          <input className='zipcode-field' placeholder='zipcode' type='zipcode' ref={node => { this.zipcode = node }} />
          <br />
          <input className='zipcode-button' type='submit' value='Submit' />
        </form>
        <p className='or-header'></p>
      </div>
  }
}
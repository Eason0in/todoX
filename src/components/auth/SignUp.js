import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = e => {
    console.log(e)
  }
  handleSubmit = e => {
    console.log(e)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <input id="email" type="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input id="password" type="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <input id="firstName" type="text" onChange={this.handleChange} />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field">
            <input id="lastName" type="text" onChange={this.handleChange} />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp

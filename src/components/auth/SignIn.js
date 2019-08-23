import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <input id="email" type="email" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input id="password" type="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn

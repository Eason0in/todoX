import React, { Component } from 'react'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleSumit = e => {
    console.log(e)
  }
  handleChange = e => {
    console.log(e.target)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSumit} className="white">
          <div className="input-field">
            <input id="title" type="text" onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" class="materialize-textarea" />
            <label htmlFor="content">Content</label>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject

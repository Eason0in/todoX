import React, { Component } from 'react'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSumit} className="white">
          <h5 className="grey-text text-darken-3">Create new Project</h5>
          <div className="input-field">
            <input id="title" type="text" onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" class="materialize-textarea" />
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-field">
            <button className="btn z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject

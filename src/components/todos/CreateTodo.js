import React, { Component } from 'react'

class CreateTodo extends Component {
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
      <li className="col m12">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new Todo</h5>
          <div className="input-field">
            <input id="title" type="text" onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-field">
            <button className="btn z-depth-0">Create</button>
          </div>
        </form>
      </li>
    )
  }
}

export default CreateTodo

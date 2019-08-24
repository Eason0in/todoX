import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    newTodo: ''
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
          <div className="input-field ">
            <input type="text" id="newTodo" placeholder="Add your todo..." onChange={this.handleChange} />
          </div>
        </form>
      </li>
    )
  }
}

export default CreateTodo

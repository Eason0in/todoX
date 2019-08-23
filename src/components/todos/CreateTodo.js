import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    newTodo: ''
  }
  render() {
    return (
      <li className="col m12">
        <div className="input-field ">
          <input type="text" placeholder="Add your todo..." />
        </div>
      </li>
    )
  }
}

export default CreateTodo

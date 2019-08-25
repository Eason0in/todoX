import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../../store/actions/todoActions'

class CreateTodo extends Component {
  state = {
    title: '',
    content: '',
    id: '',
    projectId: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState(
      (state, props) => {
        return {
          ...state,
          id: Math.random(),
          projectId: props.project.id
        }
      },
      () => {
        this.props.createTodo(this.state)

        this.setState({
          title: '',
          content: '',
          id: '',
          projectId: ''
        })
      }
    )
  }
  render() {
    return (
      <li className="col m12">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new Todo</h5>
          <div className="input-field">
            <input id="title" type="text" value={this.state.title} onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              value={this.state.content}
              onChange={this.handleChange}
            />
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

const mapDispatchToProps = dispatch => {
  return {
    createTodo: todo => dispatch(createTodo(todo))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo)

import React, { Component } from 'react'
import { deleteTodo, editTodo } from '../../store/actions/todoActions'
import { connect } from 'react-redux'

class TodoSummary extends Component {
  constructor(props) {
    super(props)
    const { id, title, content, projectId, order } = props.todo
    this.state = { id, title, content, projectId, order, isEdit: false }
  }
  handleDelete = e => {
    e.preventDefault()
    if (window.confirm('Are you sure to delete this todo?')) {
      this.props.deleteTodo(this.state.id)
    }
  }
  handleEdit = e => {
    e.preventDefault()
    this.setState(
      state => {
        return {
          ...state,
          isEdit: !this.state.isEdit
        }
      },
      () => {
        if (!this.state.isEdit) {
          this.props.editTodo(this.state)
        }
      }
    )
  }
  handleChange = e => {
    let { id, value } = e.target
    if (id === 'order') {
      value = parseInt(value)
    }
    this.setState({
      [id]: value
    })
  }
  render() {
    const cardTitle = this.state.isEdit ? (
      <div className="todo-edit">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={this.state.title} onChange={this.handleChange} required />
        <label htmlFor="order">Order</label>
        <input type="number" id="order" value={this.state.order} onChange={this.handleChange} required />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          className="materialize-textarea"
          rows="20"
          value={this.state.content}
          onChange={this.handleChange}
        />
      </div>
    ) : (
      <div>
        <span className="card-title">
          {this.state.order} - {this.state.title}
        </span>
        <p>{this.state.content}</p>
      </div>
    )

    const cardAction = this.state.isEdit ? (
      <div>
        <a href="this.handleEdit" className="todo-actions teal-text text-lighten-1" onClick={this.handleEdit}>
          <i className="material-icons medium">done</i>
        </a>
      </div>
    ) : (
      <div>
        <a href="this.handleDelete" className="todo-actions pink-text text-lighten-2" onClick={this.handleDelete}>
          <i className="material-icons ">delete</i>
        </a>

        <a href="this.handleEdit" className="todo-actions teal-text text-lighten-1" onClick={this.handleEdit}>
          <i className="material-icons">mode_edit</i>
        </a>
      </div>
    )
    return (
      <li className="col m12">
        <div className="card todo-summary">
          <div className="card-content">{cardTitle}</div>
          <div className="card-action">{cardAction}</div>
        </div>
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: todo => dispatch(editTodo(todo))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TodoSummary)

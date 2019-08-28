import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteProject, editProject } from '../../store/actions/projectActions'

class ProjectSummary extends Component {
  constructor(props) {
    super(props)

    const { id, title, content, createdAt } = props.project
    this.state = { id, title, content, createdAt, isEdit: false }
  }

  handleDelete = e => {
    e.preventDefault()
    if (window.confirm("Are you sure to delete this project? \n (In this project's todos are going to delete) ")) {
      this.props.deleteProject(this.state.id)
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
          this.props.editProject(this.state)
        }
      }
    )
  }
  handleChange = e => {
    let { id, value } = e.target
    this.setState({
      [id]: value
    })
  }

  render() {
    const cardTitle = this.state.isEdit ? (
      <div className="project-edit">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
        <label htmlFor="content">Content</label>
        <input type="text" id="content" value={this.state.content} onChange={this.handleChange} />
        <label htmlFor="content">Content</label>
      </div>
    ) : (
      <div>
        <Link to={'/projecttodo/' + this.state.id} key={this.state.id} className="grey-text text-darken-3">
          <span className="card-title activator ">{this.state.title}</span>
        </Link>
      </div>
    )

    const cardAction = this.state.isEdit ? (
      <div className="card-action-btn">
        <a href="this.handleEdit" className="todo-actions teal-text text-lighten-1" onClick={this.handleEdit}>
          <i className="material-icons medium">done</i>
        </a>
      </div>
    ) : (
      <div className="card-action-btn">
        <a href="this.handleDelete" className="todo-actions pink-text text-lighten-2" onClick={this.handleDelete}>
          <i className="material-icons">delete</i>
        </a>

        <a href="this.handleEdit" className="todo-actions teal-text text-lighten-1" onClick={this.handleEdit}>
          <i className="material-icons">mode_edit</i>
        </a>
      </div>
    )

    return (
      <div className="card section  z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">{cardTitle}</div>

        <div className="card-action">
          {cardAction}
          <span className="grey-text right">{moment(this.state.createdAt.toDate()).calendar()}</span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editProject: project => dispatch(editProject(project)),
    deleteProject: id => dispatch(deleteProject(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ProjectSummary)

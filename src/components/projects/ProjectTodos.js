import React from 'react'
import TodoList from '../todos/TodoList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ProjectTodos = ({ todos, project, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />
  return (
    <div className="container project-todos section">
      <div className="card row">
        <div className="card-content  col m12">
          <div className="card-title">
            <div className="project-detail">
              <h5 className="grey-text text-darken-3">{project.title}</h5> - <span>{project.content}</span>
            </div>
          </div>
          <a className="waves-effect waves-light btn modal-trigger btn-floating" href="#createModal">
            <i className="material-icons">add</i>
          </a>
          <TodoList todos={todos} projectId={project.id} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const projectId = ownProps.match.params.id
  const todos = state.firestore.ordered.todos
  const todosByProjectId = todos ? todos.filter(todo => todo.projectId === projectId) : null
  const projects = state.firestore.data.projects
  const project = projects ? projects[projectId] : null

  return {
    todos: todosByProjectId,
    project: {
      ...project,
      id: projectId
    },
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(['projects', 'todos'])
)(ProjectTodos)

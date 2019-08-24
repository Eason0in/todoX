import React from 'react'
import TodoList from '../todos/TodoList'
import { connect } from 'react-redux'

const ProjectTodos = ({ todos, project }) => {
  return (
    <div className="container project-todos section">
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            <div className="project-detail">
              <h5 className="grey-text text-darken-3">Project Name - {project.id}</h5>
              <span>content</span>
            </div>
          </div>
          <TodoList todos={todos} project={project} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const projectId = ownProps.match.params.id
  const todosByProjectId = state.todo.todos.filter(todo => todo.projectId === projectId)
  const project = state.project.projects.find(project => project.id === projectId)
  return {
    todos: todosByProjectId,
    project: project
  }
}

export default connect(mapStateToProps)(ProjectTodos)

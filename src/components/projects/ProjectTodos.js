import React from 'react'
import TodoList from '../todos/TodoList'

const ProjectTodos = props => {
  return (
    <div className="container project-todos section">
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            <div className="project-detail">
              <h5 className="grey-text text-darken-3">Project Name - {props.match.params.id}</h5>
              <span>content</span>
            </div>
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default ProjectTodos

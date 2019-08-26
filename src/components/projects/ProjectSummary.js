import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = ({ project }) => {
  return (
    <Link to={'/projecttodo/' + project.id} key={project.id}>
      <div className="card section  z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <span className="grey-text">3rd September, 2am</span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectSummary

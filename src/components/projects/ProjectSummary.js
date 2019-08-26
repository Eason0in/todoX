import React from 'react'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card section  z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <span className="grey-text">3rd September, 2am</span>
      </div>
    </div>
  )
}

export default ProjectSummary

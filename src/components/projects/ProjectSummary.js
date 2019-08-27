import React from 'react'
import moment from 'moment'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card section  z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <span className="grey-text">{moment(project.createdAt.toDate()).calendar()}</span>
      </div>
    </div>
  )
}

export default ProjectSummary

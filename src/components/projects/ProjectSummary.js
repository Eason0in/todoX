import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = () => {
  return (
    <Link to={'/projecttodo/1'}>
      <div className="card section">
        <div className="card-content">
          <span className="card-title">Project Name</span>
          <span className="grey-text">3rd September, 2am</span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectSummary

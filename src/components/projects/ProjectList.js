import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {
  return (
    <ul className="project-list">
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />
        })}
    </ul>
  )
}

export default ProjectList

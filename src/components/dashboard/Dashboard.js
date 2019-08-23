import React from 'react'
import ProjectList from '../projects/ProjectList'

const Dashboard = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col m6">
          <ProjectList />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

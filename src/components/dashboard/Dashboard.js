import React from 'react'
import ProjectList from '../projects/ProjectList'
import NoteArea from './NoteArea'

const Dashboard = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col m6">
          <ProjectList />
        </div>
        <div className="col m5 offset-m1">
          <NoteArea />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

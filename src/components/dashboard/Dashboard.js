import React from 'react'
import ProjectList from '../projects/ProjectList'
import NoteArea from './NoteArea'
import { connect } from 'react-redux'

const Dashboard = ({ projects }) => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col m5 offset-m1">
          <NoteArea />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)

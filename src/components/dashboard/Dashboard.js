import React from 'react'
import ProjectList from '../projects/ProjectList'
import NoteArea from './NoteArea'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const Dashboard = ({ projects, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <NoteArea />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const uid = state.firebase.auth.uid
  const projects = state.firestore.ordered.projects
  const projectsByUid = projects
    ? projects.filter(project => {
        return project.authorId === uid
      })
    : null
  return {
    projects: projectsByUid,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects', orderBy: ['createdAt', 'desc'] }])
)(Dashboard)

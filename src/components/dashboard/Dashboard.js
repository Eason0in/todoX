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
  console.log(state)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect(props => [
//     {
//       collection: 'projects',
//       where: ['authorId', '==', props.auth.uid]
//     }
//   ])
// )(Dashboard)

export default compose(
  connect(mapStateToProps),
  firestoreConnect(['projects'])
)(Dashboard)

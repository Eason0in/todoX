import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignInLinks = ({ signOut }) => {
  return (
    <ul className="right">
      <li>
        <Link to="/create">New Project</Link>
      </li>
      <li>
        <a onClick={signOut}>Log Out</a>
      </li>
      <li>
        <Link to="/" className="btn btn-floating pink lighten-1">
          NN
        </Link>
      </li>
    </ul>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignInLinks)

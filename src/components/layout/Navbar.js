import React from 'react'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ auth, profile }) => {
  return (
    <nav id="navbar" className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          TodoX
        </Link>
        {auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />}
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)

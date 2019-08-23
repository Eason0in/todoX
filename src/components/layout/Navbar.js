import React from 'react'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          TodoX
        </Link>
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  )
}

export default Navbar

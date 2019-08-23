import React from 'react'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <a href="/" className="brand-logo">
          TodoX
        </a>
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  )
}

export default Navbar

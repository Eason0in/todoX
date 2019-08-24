import React from 'react'
import { Link } from 'react-router-dom'

const SignOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
    </ul>
  )
}

export default SignOutLinks

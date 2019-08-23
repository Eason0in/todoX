import React from 'react'
import { Link } from 'react-router-dom'

const SignInLinks = () => {
  return (
    <ul className="right">
      <li>
        <Link to="/create">New Project</Link>
      </li>
      <li>
        <Link to="/">Log Out</Link>
      </li>
      <li>
        <Link to="/" className="btn btn-floating pink lighten-1">
          NN
        </Link>
      </li>
    </ul>
  )
}

export default SignInLinks

import React from 'react'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProjectTodos from './components/projects/ProjectTodos'
import CreateProject from './components/projects/CreateProject'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/create" component={CreateProject} />
          <Route path="/projecttodo/:id" component={ProjectTodos} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

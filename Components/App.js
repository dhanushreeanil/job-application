import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './Home'
import ApplicationForm from './ApplicationForm'
import Admin from './Admin'

const App = (props) => {
  
  return (
    <div>
      <Link to="/" > Home </Link> | 
      <Link to="/application-form" > Application Form </Link> |
      <Link to="/admin" > Admin Dashboard </Link>

      <Route path="/" component = { Home } exact = { true } />
      <Route path="/application-form" component = { ApplicationForm } exact = { true } />
      <Route path="/admin" component = { Admin } exact = { true } />
  
    </div>
  )
}

export default App

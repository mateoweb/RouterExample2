import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './components/Homepage'
import UserPage from './components/Userpage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:id" component={UserPage} />
    </Switch>
  )
}
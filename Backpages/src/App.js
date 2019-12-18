import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </Router>
    )
  }
}



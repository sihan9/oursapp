import React, { Component } from 'react'
import Shouye from './container/Shouye'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Login from './container/Login'
import Home from './container/Home'


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



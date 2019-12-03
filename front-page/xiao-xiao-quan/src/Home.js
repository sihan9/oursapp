import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import App from './App';
import Login from './container/Login';
import Set from './container/Set';
import Count from './container/Count';
import Chat from './container/MyChat';
import Register from './container/Register';
import Person from './container/Person';

export default class Home extends Component {
    render() {
        return (
            <Router>
               <div >
                   
                    <Switch>    
                       
                        <Route exact path='/my/set' component={Set}/>
                        <Route exact path='/my/count' component={Count}/>
                        <Route exact path='/info/:id' component={Chat}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/person' component={Person}/>
                        <Route path='/' component={App}/>
                        {/* <Redirect to='/community'/>      */}
                    </Switch>
               </div>
            </Router>
        )
    }
}
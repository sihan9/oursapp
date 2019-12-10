import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import App from './App';
import Login from './container/Login';
import Set from './container/Set';
import Count from './container/Count';
import Chat from './container/MyChat';
import Register from './container/Register';
import Person from './container/Person';
import Publish from './container/Publish';
import Synopsis from './container/Synopsis';
import Forum from './container/Forum';
export default class Home extends Component {
    render() {
        return (
            <Router>
               <div >
                   
                    <Switch>    
                        
                        <Route exact path='/community/publish' component={Publish} />
                        <Route exact path='/friend/:idx' component={Synopsis} />
                        <Route exact path='/my/set' component={Set}/>
                        <Route exact path='/my/count' component={Count}/>
                        <Route exact path='/info/:id' component={Chat}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/forum' component={Forum}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/person' component={Person}/>
                        <Route path='/home' component={App}/>
                        <Route path='/' component={Login}/>
                       
                    </Switch>
               </div>
            </Router>
        )
    }
}
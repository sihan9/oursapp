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
import Forum from './container/Forum1';
import Collect from './container/Collect';
import MyChat1 from './container/MyChat1';
import AddFriend from './container/AddFriend';
import PhotoAlbum from './container/PhotoAlbum';
export default class Home extends Component {
    render() {
        return (
            <Router>
               <div >
                   
                    <Switch>   
                        <Route exact path='/home/mychat/:idx' component={MyChat1}></Route>
                        <Route exact path='/home/my/collect' component={Collect}></Route>
                        <Route exact path='/home/my/photoalbum' component={PhotoAlbum}></Route>
                        <Route exact path='/community/publish' component={Publish} />
                        <Route exact path='/friend/:idx' component={Synopsis} />
                        <Route exact path='/my/set' component={Set}/>
                        <Route exact path='/my/count' component={Count}/>
                        <Route exact path='/info/:id' component={Chat}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/forum' component={Forum}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/addfriend' component={AddFriend}/>
                        <Route path='/person' component={Person}/>
                        <Route path='/home' component={App}/>
                        <Route path='/' component={Login}/>
                       
                    </Switch>
               </div>
            </Router>
        )
    }
}

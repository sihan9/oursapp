import React, { Component } from 'react'
import Shouye from './pages/Shouye'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'



export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='box-1-1'>
            <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/title1.png?raw=true' />
            <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/title2.png?raw=true' style={{paddingTop:'35px'}}/>
            <button>退出</button>
          </div>
          <div className='box-2'>
            <div className='box-2-1'>
              <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/home,%E9%A6%96%E9%A1%B5,%E4%B8%BB%E9%A1%B5.png?raw=true'/>
              <Link to='/shouye'>首页</Link>
            </div>
            <div className='box-2-1'>
              <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/my.png?raw=true'/>
              <Link to='user'>用户管理</Link>
            </div>
            <div className='box-2-1'>
              <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86.png?raw=true'/>
              <Link to='post'>帖子管理</Link>
            </div>
            <div className='box-2-1'>
              <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E5%8F%8D%E9%A6%88,%E6%96%B0%E5%BB%BA,%E5%86%99,feedback.png?raw=true'/>
              <Link to='feedback'>反馈管理</Link>
            </div>
            <div className='box-2-1'>
              <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E5%B9%B3%E5%8F%B0%E7%AE%A1%E7%90%86%E2%80%94%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86.png?raw=true'/>
              <Link to='system'>系统管理</Link>
            </div>
            <div className='box-2-1'>
              <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/ic_favorite_24px.png?raw=true'/>
              <Link to='recommend'>推荐管理</Link>
            </div>
          </div>
          <div className='box-3'>
            <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E6%90%9C%E7%B4%A2.png?raw=true'/>
            <input type='search' defaultValue='请查询要查询的用户ID或用户名'></input>
          </div>
          <div className='component'>
            <Switch>
              <Route path='/shouye' component={Shouye}/>
              <Route/>
              <Route/>
              <Route/>
              <Route/>
              <Route/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

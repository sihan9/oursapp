import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className='Login'>
                <div className='head'>
                    <img className='title1' src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/title1.png?raw=true'/>
                    <img className='title2' src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/title2.png?raw=true'/>
                </div>
                <div className='middle'>
                    <img className='header' src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/head.png?raw=true'/>
                    <form method='GET'>
                        <div className='users'> 
                            <img className='user' src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/user.png?raw=true'/>
                            <input className='username' placeholder="输入用户名"/>
                        </div>
                        <div className='users'> 
                            <img className='user' src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/pwd.png?raw=true'/>
                            <input className='username' placeholder="输入密码"/>
                        </div>
                        <div className='users'> 
                            <img className='user' src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/Edit.png?raw=true'/>
                            <input className='code' placeholder="验证码"/>
                            <button className='btn1'>JXP5</button>
                            <img className='update' src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/update.png?raw=true'/>
                            <p>换一张</p>
                        </div>
                        <button className='loginbtn'>登录</button>
                    </form>
                </div>
            </div>
        )
    }
}

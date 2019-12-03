import React, { Component } from 'react'

export default class Add extends Component {
    check=()=>{
        this.props.history.push('/home/manager')
    }
    render() {
        return (
            <div>
                <form action='http://101.37.172.74:3000/manager' method='POST' className='add-1'>
                    <div><p>ID</p><input type='text' name='id'/></div>
                    <div><p>用户名</p><input type='text' name='username'/></div>
                    <div><p>姓名</p><input type='text' name='name'/></div>
                    <div><p>密码</p><input type='text' name='pwd'/></div>
                    <div><p>性别</p><input type='text' name='sex'/></div>
                    <div><p>职位</p><input type='text' name='work'/></div>
                    <div><p>手机号</p><input type='text' name='phone'/></div>
                    <div><p>邮箱</p><input type='text' name='email'/></div>
                    <input type='submit' value='添加' className='add-2'/>  
                    <button onClick={this.check}>返回</button>                  
                </form>
            </div>
        )
    }
}

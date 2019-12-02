import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://101.37.172.74:8080/user')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.content
                })
        })
        
    }
    componentDidUpdate(){

        fetch('http://101.37.172.74:8080/user')
            .then((res)=>res.json())
            .then((res)=>{
                    this.setState({data:res.content});
                })
}



    render() {
        return (
            <div>
                <p className='user-1'>用户列表</p>
                <div className='user-2'>
                    <input type='checkbox'/>
                    <p style={{paddingLeft:'50px'}}>用户ID</p>
                    <p style={{paddingLeft:'45px'}}>头像</p>
                    <p style={{paddingLeft:'40px'}}>用户名</p>
                    <p style={{paddingLeft:'40px'}}>性别</p>
                    <p>学校</p>
                    <p style={{paddingLeft:'105px'}}>手机号</p>
                    <p style={{paddingLeft:'90px'}}>邮箱</p>
                    <p style={{paddingLeft:'90px'}}>操作</p>
                </div>
                {
                    this.state.data.map((item,idx)=>{
                        return(
                            <div className='user-3' key={idx}>
                                <input type='checkbox'/>
                                <p>{item.id}</p>
                                <p>{item.img}</p>
                                <p>{item.name}</p>
                                <p>{item.sex}</p>
                                <p>{item.school}</p>
                                <p>{item.phone}</p>
                                <p>{item.email}</p>
                                <p>操作</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

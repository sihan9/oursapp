import React, { Component } from 'react'
export default class User extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8015/users')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.content
                })
        })
        
    }
    componentDidUpdate(){

        fetch('http://129.211.62.80:8015/users')
            .then((res)=>res.json())
            .then((res)=>{
                    this.setState({data:res.content});
                })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }

    delete=(idx)=>{
        console.log(idx)
        var data = localStorage.getItem('data')
        if(JSON.parse(data).jurisdiction==1 || JSON.parse(data).jurisdiction == 2){
            fetch('http://129.211.62.80:8015/users/delete?phone='+idx.phone)
            .then(res=>res.json())
            .then((res)=>{
                console.log('ok')
            })
        }else{
            alert('权限不足！')
        }
        
    }

    render() {
        return (
            <div>
                <div className='box-3'>
                    <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E6%90%9C%E7%B4%A2.png?raw=true'/>
                    <input type='search' placeholder='请查询要查询的用户ID或用户名'></input>
                </div>
                <p className='user-1'>用户列表</p>
                <div className='user-2'>
                    <input type='checkbox'/>
                    <p>用户ID</p>
                    <p style={{paddingLeft:'280px'}}>用户名</p>
                    <p style={{paddingLeft:'295px'}}>密码</p>
                </div>
                {
                    this.state.data.map((item,idx)=>{
                        return(
                            <div className='user-3' key={idx}>
                                <input type='checkbox'/>
                                <p>{item.account}</p>
                                <p style={{width:'120px',paddingLeft:'235px'}}>{item.nickname}</p>
                                <p style={{paddingLeft:'235px'}}>{item.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

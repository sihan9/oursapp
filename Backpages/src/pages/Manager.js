import React, { Component } from 'react'

export default class Manager extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://101.37.172.74:8080/manager')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.content
                })
        })
        
    }
    componentDidUpdate(){

        fetch('http://101.37.172.74:8080/manager')
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
        if(JSON.parse(data).jurisdiction == 1){
            fetch('http://101.37.172.74:8080/manager/delete?id='+idx.id)
            .then(res=>res.json())
            .then((res)=>{
                console.log('ok')
            })
        }else{
            alert('权限不够！')
        }
        
    }

    check=()=>{
        var data = localStorage.getItem('data')
        if(JSON.parse(data).jurisdiction == 1){
            this.props.history.push('/home/add')
        }else{
            alert('权限不够！')
        }      
    }
    render() {
        return (
            <div>
                <div className='box-3'>
                    <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E6%90%9C%E7%B4%A2.png?raw=true'/>
                    <input type='search' placeholder='请查询要查询的用户ID或用户名' onKeyDown={(e)=>this.search(e)}></input>
                </div>
                <p className='manager-1'>用户列表</p>
                <div className='manager-2'>
                    <input type='checkbox'/>
                    <p style={{paddingLeft:'50px'}}>ID</p>
                    <p style={{paddingLeft:'45px'}}>用户名</p>
                    <p style={{paddingLeft:'85px'}}>姓名</p>
                    <p style={{paddingLeft:'50px'}}>性别</p>
                    <p style={{paddingLeft:'45px'}}>职位</p>
                    <p style={{paddingLeft:'70px'}}>手机号</p>
                    <p style={{paddingLeft:'115px'}}>邮箱</p>
                    <p style={{paddingLeft:'90px'}}>操作</p>
                </div>
                {
                    this.state.data.map((item,idx)=>{
                        return(
                            <div className='manager-3' key={idx}>
                                <input type='checkbox'/>
                                <p>{item.id}</p>
                                <p style={{width:'90px'}}>{item.username}</p>
                                <p style={{width:'45px'}}>{item.name}</p>
                                <p>{item.sex}</p>
                                <p>{item.work}</p>
                                <p style={{width:'100px'}}>{item.phone}</p>
                                <p style={{width:'160px',paddingLeft:'35px'}}>{item.email}</p>
                                <button onClick={()=>this.delete(item)}>删除</button>
                            </div>
                        )
                    })
                }
                <button onClick={this.check} className='manager-4'>添加管理员</button>
            </div>
        )
    }
}

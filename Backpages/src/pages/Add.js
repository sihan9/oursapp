import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state={
            ID:'',
            user:'',
            name:'',
            password:'',
            sex:'',
            work:'',
            phone:'',
            email:'',
            jurisdiction:''
        }
    }
   
    changeUser=(e)=>{
        this.setState({
            user:e.target.value
        })
    }
    
    changeId=(e)=>{
        this.setState({
            ID:e.target.value
        })
    }
    
    changeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    
    changeSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    
    changeWork=(e)=>{
        this.setState({
            work:e.target.value
        })
    }
    
    changePhone=(e)=>{
        this.setState({
            phone:e.target.value
        })
    }
    
    changeEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    changePwd=(e)=>{
        this.setState({
            password:e.target.value
        })
        
    }
    changeJurisdiction=(e)=>{
        this.setState({
            jurisdiction:e.target.value
        })
        
    }
  
    onSubmit=(e)=>{
        // 阻止事件传递
       e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
     console.log(this.state);
        fetch('http://101.37.172.74:8080/manager',{
            // post提交
            method:"POST",
            body:JSON.stringify(this.state)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.content){
                this.props.history.push('/home/manager')
            }
        })

    }
    check=()=>{
        this.props.history.push('/home/manager')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='add-1'>
                    <div><p>ID</p><input onChange={this.changeId} type='text' name='id'/></div>
                    <div><p>用户名</p>< input onChange={this.changeUser} type='text' name='username'/></div>    
                    <div><p>姓名</p><input onChange={this.changeName} type='text' name='name'/></div>
                    <div><p>密码</p><input onChange={this.changePwd} type='text' name='pwd'/></div>
                    <div><p>性别</p><input onChange={this.changeSex} type='text' name='sex'/></div>
                    <div><p>职位</p><input onChange={this.changeWork} type='text' name='work'/></div>
                    <div><p>手机号</p><input onChange={this.changePhone} type='text' name='phone'/></div>
                    <div><p>邮箱</p><input onChange={this.changeEmail} type='text' name='email'/></div>
                    <div><p>权限</p><input onChange={this.changeJurisdiction} type='text' name='jurisdiction'/></div>
                    <input type='submit' value='添加' className='add-2' onClick={this.onClick}/>  
                    <button onClick={this.check}>返回</button>               
                </form>
                
            </div>
        )
    }
}

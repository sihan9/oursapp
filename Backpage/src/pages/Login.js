import React, { Component } from 'react'
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            user:'',
            password:'',
        }
    }
    componentDidMount(){
        fetch('http://localhost:8080/login')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.recordset
                })
        })
        
    }
    componentDidUpdate(){

        fetch('http://localhost:8080/login')
            .then((res)=>res.json())
            .then((res)=>{
                    this.setState({data:res.recordset});
                })
}
    handleName=(e)=>{
        this.setState({
            user:e.target.value
        })
    }
    handlePwd=(e)=>{
        this.setState({
            password:e.target.value
        })
        
    }
    check=()=>{
        var islogin =false;
        for(var i=0;i<this.state.data.length;i++){
            if(this.state.user === this.state.data[i].userName && this.state.password === this.state.data[i].password){
                // this.props.history.push('/home/shouye')
                islogin = true
            }
        }
        console.log(islogin)
        if(islogin){
            this.props.history.push('/home/shouye')
        }else{
            alert('用户名密码错误！')
        }
    }

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
                            <input className='username' placeholder="输入用户名" onChange={this.handleName}/>
                        </div>
                        <div className='users'> 
                            <img className='user' src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/pwd.png?raw=true'/>
                            <input className='username' placeholder="输入密码" onChange={this.handlePwd}/>
                        </div>
                        <div className='users'> 
                            <img className='user' src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/Edit.png?raw=true'/>
                            <input className='code' placeholder="验证码"/>
                            <canvas id="canvas" width="100" height="30" onClick={this.draw}></canvas>
                            <img className='update' src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/update.png?raw=true'/>
                            <p>换一张</p>
                        </div>
                        <input type='submit' className='loginbtn' value='登录' onClick={this.check} />
                    </form>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {NavBar} from 'antd-mobile';
import ret from '../image/set/返回1.png';
import {Link} from 'react-router-dom';
export default class Person extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            school:'河北师范大学',
            code:'',
            sex:'男',
          
            pwd:'',
            repwd:''
        }
    }
    handleCode=(e)=>{
        this.setState({
            code:e.target.value
        })
    }
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handlePwd=(e)=>{
        this.setState({
            code:e.target.value
        })
    }
    handleRepwd=(e)=>{
        this.setState({
            repwd:e.target.value
        })
    }
    handlePwd=(e)=>{
        this.setState({
            pwd:e.target.value
        })
    }
    handleSchool=(e)=>{
        this.setState({
            school:e.target.value
        })
    }
    handleSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    // handleType=(e)=>{
    //     this.setState({
    //         type:e.target.value
    //     })
    // }
    checkPwd=(e)=>{
        if(this.state.pwd!==this.state.repwd){
            alert('密码输入不一致请再次输入');
        }
    }
    onSubmit=(e)=> {
        // 阻止事件传递
        console.log(this.state.phone);
       e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        console.log(this.state)
        fetch('http://101.37.172.74:8080/user/information',{
            // post提交
            method:"POST",
            body:JSON.stringify(this.state)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.content){
                this.props.history.push('/login')
            }
        })

    }
    render() {
        return (
            <div style={{width:'100%'}}>
                 <NavBar
                   style={{backgroundColor:'#fff',color:'#000',width:"100%"}} 
                  
                   leftContent={
                       <Link to='/register'>
                      
                 
                      <img src={ret} style={{width:"24%",height:"60%"}}/>
                   
                    
                    </Link>}
                    >
                   资料设置
                   
                    </NavBar>
                    <form onSubmit={this.onSubmit} style={{paddingTop:'20%',backgroundColor:'#fff',paddingBottom:'18%'}}>
                       
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                        <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>用户名</p>
                            <input name='name' onChange={this.handleName} style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px'}} type='text' placeholder='请输入用户名'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>性别</p>
                            <select onChange={this.handleSex} style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px',color:'#777'}}>
                                <option name ="boy" defaultValue="selected">男</option>
                                <option name ="girl">女</option>
                            </select>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>学校</p>
                            <select onChange={this.handleSchool} style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px',color:'#777'}}>
                                <option name="hebeishida" defaultValue="selected">河北师范大学</option>
                                <option name ="hebeikeda">河北科技大学</option>
                                <option name="hebeidaxue">河北大学</option>
                                <option name="tielu">石家庄铁路大学</option>
                                <option name='hebeiyikeda'>河北医科大学</option>
                            </select>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>学号</p>
                            <input name='code' onChange={this.handleCode} style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px'}} type='number' placeholder='请输入学号'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>密码</p>
                            <input type='password' onChange={this.handlePwd} name='pwd' style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #aaaaaa',borderRadius:'4px'}} type='password' placeholder='请输入密码'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>确认密码</p>
                            <input type='password' onChange={this.handleRepwd} name='repwd' onBlur={this.checkPwd} style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #aaaaaa',borderRadius:'4px'}} type='password' placeholder='请输入密码'/>
                        </div>
                        <div>
                           
                            <input type='submit' value='立即登录' style={{color:'#fff',fontSize:'18px',width:'50%',height:'50px',marginLeft:'24%',backgroundColor:'#1296db',borderRadius:'20px',borderStyle:'none'}}/>
                           
                        </div>
                    </form>
            </div>
        )
    }
}

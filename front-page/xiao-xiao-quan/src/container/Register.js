import React, { Component } from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import ret from '../image/set/返回1.png';
import { Checkbox } from 'antd-mobile';
export default class Register extends Component {
    constructor(){
        super();
        this.state={
            phone:'',
            pwd:''
        }
    }
    data=[];
    displayResult=(e)=>{
        var  re = /^1\d{10}$/
        if(e.target.value){
            if (re.test(e.target.value)) {
                this.setState({
                    phone:e.target.value
                })
            }
            else{
                alert('输入手机不合法')
            } 
        }
        else{
            alert('手机号不能为空')
        }
    
    }
    display=(e)=>{
       
        if(!e.target.value){
           alert('密码不能为空')
        }
        
    
    }
    handleChangePhone=(e)=>{
        this.setState({
            phone:e.target.value
        })
        
    }
    handleChangePwd=(e)=>{
        this.setState({
            pwd:e.target.value
        })
        
    }
    onSubmit=(e)=> {
        // 阻止事件传递
        console.log(this.state.phone);
       e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        const post ={
            phone:this.state.phone,
            pwd:this.state.pwd

        }
        fetch('http://101.37.172.74:8080/user/register',{
            // post提交
            method:"POST",
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.content){
                this.props.history.push('/login')
            }
            else{
                alert('该手机号已经被占用')
            }
        })

    }

    render() {
        return (
            <div style={{width:'100%',height:'100%',position:'relative'}}>
                 <img style={{width:'100%',height:'100%',position:'absolute', zIndex: -1,opacity: 0.8}} src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1940828277,2429005037&fm=26&gp=0.jpg'/>
                 <NavBar
                   style={{color:'#000',width:"100%",backgroundColor:'transparent'}} 
                  
                   leftContent={
                       <Link to='/login'>
                      
                 
                      <img src={ret} style={{width:"24%",height:"60%"}}/>
                   
                    
                    </Link>}
                    >
                   
                   
                    </NavBar>
                <div style={{height:'600px'}}>
                    <form onSubmit={this.onSubmit}>
                        <input type='number' placeholder='请输入手机号' id="phone" maxLength="11" onChange={this.handleChangePhone} onBlur={this.displayResult} style={{marginLeft:'10%',width:'70%',height:'40px',marginTop:'30%',marginBottom:'10%',borderRadius:'10px',fontSize:'18px'}}/>
                        <input type='password' placeholder='请输入密码' id="pwd"  onChange={this.handleChangePwd} onBlur={this.display} style={{marginLeft:'10%',width:'70%',height:'40px',marginBottom:'10%',borderRadius:'10px',fontSize:'18px'}}/>
                        
                        {/* <div style={{width:'100%',height:'150px'}}>
                            <input type='number' placeholder='验证码' id="check" maxLength="6"  style={{marginLeft:'10%',width:'50%',height:'40px',marginTop:'5%',marginBottom:'10%',borderRadius:'10px',fontSize:'18px',float:'left'}}/>
                            <button style={{float:'left',width:'24%',height:'40px',marginTop:'5%',marginBottom:'10%',borderRadius:'10px',fontSize:'12px',backgroundColor:'#585858',color:'#fff',marginRight:'10%',borderStyle:'none'}}>获取验证码</button>
                        </div> */}
                        
                       
                        <input type='submit' value='注册' style={{width:'50%',height:'40px',backgroundColor:'#585858',color:'#fff',marginLeft:'25%',borderRadius:'5px',marginTop:'20px',borderStyle:'none'}}/>
                     
                    </form>
                </div>
            </div>
        )
    }
}

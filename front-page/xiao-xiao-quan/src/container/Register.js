import React, { Component } from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import ret from '../image/set/返回.png';
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
            <div style={{width:'100%',height:'100%'}}>
                 <img style={{width:'100%',height:'100%',position:'absolute', zIndex: -1,opacity:1}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576058976013&di=f1d57b4a6dbc62daaf44c71f7cde2df6&imgtype=jpg&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D42b16be172899e51788e3a1c72a7d990%2Fa65049086e061d957d308f2472f40ad162d9ca0d.jpg'/>
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
                        <input type='number' placeholder='请输入手机号' id="phone" maxLength="11" onChange={this.handleChangePhone} onBlur={this.displayResult} style={{marginLeft:'15%',fontFamily:'cursive',boxShadow:' 0px 2px 2px',opacity:'0.7',width:'70%',height:'40px',marginTop:'30%',borderStyle:'none',marginBottom:'10%',borderRadius:'10px',fontSize:'18px'}}/>
                        <input type='password' placeholder='请输入密码' id="pwd"  onChange={this.handleChangePwd} onBlur={this.display} style={{marginLeft:'15%',width:'70%',height:'40px',fontFamily:'cursive',boxShadow:' 0px 2px 2px',opacity:'0.7',marginBottom:'10%',borderRadius:'10px',borderStyle:'none',fontSize:'18px'}}/>
                        <input type='submit' value='注册' style={{width:'50%',fontFamily:'cursive',height:'40px',color:'#000',marginLeft:'25%',borderRadius:'5px',backgroundColor:'#fff',marginTop:'20px',boxShadow:' 0px 2px 3px',opacity:'0.7',borderStyle:'none'}}/>
                     
                    </form>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import {NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import ret from '../image/set/返回1.png';
import { Checkbox } from 'antd-mobile';
export default class Register extends Component {
    data=[];
    displayResult=(e)=>{
        var phone =e.target.value;
        var Value = phone.replace(/\D/g,'');
        e.target.value=Value;
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',backgroundColor:'#fff'}}>
              
                 <NavBar
                   style={{backgroundColor:'#f5f5f9',color:'#000',width:"100%"}} 
                  
                   leftContent={
                       <Link to='/login'>
                      
                 
                      <img src={ret} style={{width:"24%",height:"60%"}}/>
                   
                    
                    </Link>}
                    >
                   注册
                   
                    </NavBar>
                <div style={{backgroundColor:'#fff',height:'600px'}}>
                    <form action="" method="get">
                        <input type='number' placeholder='请输入手机号' id="phone" maxLength="11" onKeyUp={this.displayResult} style={{marginLeft:'10%',width:'70%',height:'40px',marginTop:'30%',marginBottom:'10%',borderRadius:'10px',fontSize:'18px'}}/>
                        <div style={{width:'100%',height:'150px'}}>
                            <input type='number' placeholder='验证码' id="check" maxLength="6"  style={{marginLeft:'10%',width:'50%',height:'40px',marginTop:'5%',marginBottom:'10%',borderRadius:'10px',fontSize:'18px',float:'left'}}/>
                            <button style={{float:'left',width:'24%',height:'40px',marginTop:'5%',marginBottom:'10%',borderRadius:'10px',fontSize:'12px',backgroundColor:'#108ee9',color:'#fff',marginRight:'10%'}}>获取验证码</button>
                        </div>
                        <Checkbox style={{marginLeft:'10%'}}>
                        我已阅读并同意保密协议和条款
                        </Checkbox>
                        <Link to='/person'>
                        <input type='button' value='注册' style={{width:'50%',height:'40px',backgroundColor:'#108ee9',color:'#fff',marginLeft:'25%',borderRadius:'5px',marginTop:'20px'}}/>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

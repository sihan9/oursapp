import React, { Component } from 'react'
import {NavBar} from 'antd-mobile';
import ret from '../image/set/返回1.png';
import {Link} from 'react-router-dom';
export default class Person extends Component {
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
                    <div style={{paddingTop:'20%',backgroundColor:'#fff',paddingBottom:'18%'}}>
                    <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%',backgroundColor:'#fff'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>用户类型</p>
                            <select style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px',color:'#777'}}>
                                <option value ="personal" defaultValue="selected">个人</option>
                                <option value ="team">宿舍</option>
                            </select>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                        <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>用户名</p>
                            <input name='name' style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px'}} type='text' placeholder='请输入用户名'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>性别</p>
                            <select style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px',color:'#777'}}>
                                <option value ="boy" defaultValue="selected">男</option>
                                <option value ="girl">女</option>
                            </select>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>学校</p>
                            <select style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px',color:'#777'}}>
                                <option value ="hebeishida" defaultValue="selected">河北师范大学</option>
                                <option value ="hebeikeda">河北科技大学</option>
                                <option value="hebeidaxue">河北大学</option>
                                <option value="tielu">石家庄铁路大学</option>
                                <option value='hebeiyikeda'>河北医科大学</option>
                            </select>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>学号</p>
                            <input name='code' style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px'}} type='number' placeholder='请输入学号'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>密码</p>
                            <input type='password' name='pwd' style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #aaaaaa',borderRadius:'4px'}} type='password' placeholder='请输入密码'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>确认密码</p>
                            <input type='password' name='repwd' style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #aaaaaa',borderRadius:'4px'}} type='password' placeholder='请输入密码'/>
                        </div>
                        <div>
                            <Link to='/login'>
                            <input type='submit' value='立即登录' style={{color:'#fff',fontSize:'18px',width:'50%',height:'50px',marginLeft:'24%',backgroundColor:'#1296db',borderRadius:'20px',borderStyle:'none'}}/>
                            </Link>
                        </div>
                    </div>
            </div>
        )
    }
}

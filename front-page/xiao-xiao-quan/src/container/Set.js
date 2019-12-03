import React, { Component } from 'react'
import {NavBar,NoticeBar,Button} from 'antd-mobile';
import ret from '../image/set/返回.png';
import {Link} from 'react-router-dom';
export default class Set extends Component {
    render() {
        return (
            <div>
                  <NavBar
                   style={{backgroundColor:'#1296db',color:'#fff',width:"100%"}} 
                  
                   leftContent={
                       <Link to='/my'>
                      
                 
                      <img src={ret} style={{width:"24%",height:"60%"}}/>
                   
                    
                    </Link>}
                    >
                   设置
                   
                    </NavBar>
               <div style={{width:'100%',marginTop:10}}>
                   <Link to='/my/count'>
                   <NoticeBar icon={null} mode="link" style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                      账号安全
                   </NoticeBar>
                  </Link>
                   <NoticeBar icon={null} mode="link" style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                        新消息提醒
                   </NoticeBar>
                  
                   <NoticeBar icon={null} mode="link" style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                     勿扰模式
                   </NoticeBar>
                   <NoticeBar  mode="link" icon={null} style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                      通用
                   </NoticeBar>
                   <NoticeBar  mode="link" icon={null} style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                      隐私
                   </NoticeBar>
                   <NoticeBar  mode="link" icon={null} style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                      关于
                   </NoticeBar>
                   <NoticeBar  mode="link" icon={null} style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                      帮助与反馈
                   </NoticeBar>
                
                  
               </div>
                <div style={{width:'100%'}}>
                    <Link key='login' to='/login'>
                        <Button type="submit" style={{width:'80%',margin:'0 auto',marginBottom:14,marginTop:10,backgroundColor:'#1296db',color:'#fff'}}>退出登录</Button>
                    </Link>
                    <Button type="primary" style={{width:'80%',margin:'0 auto'}}>切换账户</Button>

                </div>
            </div>
        )
    }
}

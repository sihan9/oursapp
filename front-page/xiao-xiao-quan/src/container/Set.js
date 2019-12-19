import React, { Component } from 'react'
import {NavBar,NoticeBar,Button,Toast} from 'antd-mobile';
import {withRouter,} from 'react-router-dom'
import ret from '../image/set/返回.png';
import {Link} from 'react-router-dom';
class Set extends Component {

    clear=(e)=>{
        this.props.history.push('/login');
        // localStorage.clear();
    }
    render() {
        function failToast() {
            Toast.fail('敬请期待 !!!', 1);
        }
        return (
            <div>
                  <NavBar
                   style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
                  
                   leftContent={
                       <Link to='/home/my'>
                      <img src={ret} style={{width:"24%",height:"60%"}}/>
                    </Link>}
                    >
                   设置
                   
                    </NavBar>
               <div style={{width:'100%',marginTop:10}}>
                   <Link to='/my/count'>
                   <NoticeBar icon={null} mode="link" style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                      修改个人资料
                   </NoticeBar>
                  </Link>
                   <NoticeBar onClick={failToast} icon={null} mode="link" style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                        新消息提醒
                   </NoticeBar>
                  
                   <NoticeBar onClick={failToast} icon={null} mode="link" style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                     勿扰模式
                   </NoticeBar>
                   <NoticeBar onClick={failToast} mode="link" icon={null} style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                      通用
                   </NoticeBar>
                   <NoticeBar onClick={failToast} mode="link" icon={null} style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                      隐私
                   </NoticeBar>
                   <NoticeBar onClick={failToast}  mode="link" icon={null} style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                      关于
                   </NoticeBar>
                   <NoticeBar onClick={failToast} mode="link" icon={null} style={{height:50,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                      帮助与反馈
                   </NoticeBar>
                
                  
               </div>
                <div style={{width:'100%'}}>
                 
                        <Button type="submit" onClick={this.clear} style={{width:'80%',margin:'0 auto',marginBottom:14,marginTop:10,backgroundColor:'#46a794',color:'#fff'}}>退出登录</Button>
                 
                  
                        <Button type="primary"  onClick={this.clear} style={{width:'80%',margin:'0 auto',backgroundColor:'#46a794'}}>切换账户</Button>
                   
                </div>
            </div>
        )
    }
}
export default  withRouter(Set);
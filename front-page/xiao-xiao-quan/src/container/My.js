import React, { Component } from 'react'
import {NavBar,NoticeBar } from 'antd-mobile';
import {Route,Link,Switch} from 'react-router-dom';

import set from '../image/my/设置.png';
import star from '../image/my/收藏.png';
import decorate from '../image/my/表情.png';
import photo from '../image/my/相册.png';
import info from '../image/my/公告.png';
export default class My extends Component {
    person={
        img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg",
        name:"Sunshine",
        sign:'好好学习，天天向上'
    }
    render() {
        return (
            <div>
                
               
                <NavBar
                   style={{backgroundColor:'#1296db',color:'#fff',width:"100%"}} 
                  
                   rightContent={
                       [
                    <Link key='1' to='/my/set'> 
                    <img  src={set} style={{width:"24%",height:"60%",float:'right'}}/>
                    </Link>
                  ]}
                  >
                   我的
                   
               </NavBar>
                <div style={{width:'100%',height:"120px",backgroundColor:'#fff',marginTop:10,padding:"10px 20px 10px 20px"}}>
                    <div style={{margin:'0 auto',height:'76%',width:'100%',marginTop:10}}>
                        <img src={this.person.img} style={{width:"22%",height:'100%',float:'left',borderRadius:"50px"}}/>
                        <div style={{float:"left",width:"70%",marginLeft:"20px",height:'100%'}}>   
                            <p style={{height:'60%',fontSize:"18px",fontWeight:"bold",margin:0,width:'100%'}}>{this.person.name}</p>
                            <p style={{width:"100%",margin:0,height:'40%'}}>{this.person.sign}</p>   
                        </div>
                    </div>
                </div>
                <div style={{width:'100%',marginTop:10}}>
                   
                    <NoticeBar icon={null} mode="link" style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                        <img src={photo} style={{marginTop:0,marginRight:10,height:20,width:20}}/>
                        我的相册
                    </NoticeBar>
                   
                    <NoticeBar icon={null} mode="link" style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                    <img src={star} style={{marginTop:0,marginRight:10,height:20,width:20}}/>
                        我的收藏
                    </NoticeBar>
                  
                    <NoticeBar icon={null} mode="link" style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                    <img src={decorate} style={{marginTop:0,marginRight:10,height:20}}/>
                        表情
                    </NoticeBar>
                    <NoticeBar  mode="link" icon={null} style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                        <img src={info} style={{marginTop:0,marginRight:10,height:20}}/>
                        公告
                    </NoticeBar>
                 
                   
                </div>
             
            </div>
        )
    }
}

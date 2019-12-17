import React, { Component} from 'react'
import {NavBar,NoticeBar } from 'antd-mobile';
import {Link,withRouter} from 'react-router-dom';
import Collect from './Collect' 
import set from '../image/my/设置.png';
import star from '../image/my/收藏.png';
import decorate from '../image/my/表情.png';
import photo from '../image/my/相册.png';
import info from '../image/my/公告.png';
class My extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://101.37.172.74:8080/user/massage',{
        })
        .then(res =>res.json())
        .then((res)=>{
            this.setState({data:res.content[0]});
        })
    }
    render() {
        return (
            <div>
                
               
                <NavBar
                   style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
                  
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
                    <Link to='/forum' style={{color:'#000'}}>
                    <div style={{margin:'0 auto',height:'76%',width:'100%',marginTop:10}}>
                        <img src={`http://101.37.172.74:8080/images/img?name=${this.state.data.img}`} style={{width:"22%",height:'100%',float:'left',borderRadius:"50px"}}/>
                        <div style={{float:"left",width:"70%",marginLeft:"20px",height:'100%'}}>   
                            <p style={{height:'60%',fontSize:"18px",fontWeight:"bold",margin:0,width:'100%'}}>{this.state.data.name}</p>
                <p style={{width:"100%",margin:0,height:'40%'}}>{this.state.data.school}</p>   
                        </div>
                    </div>
                    </Link>
                </div>
                <div style={{width:'100%',marginTop:10}}>
                   
                    <NoticeBar icon={null} mode="link" style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                        <img src={photo} style={{marginTop:0,marginRight:10,height:20,width:20}}/>
                        我的相册
                    </NoticeBar>
                   
                    <NoticeBar onClick={() => {this.props.history.push('/home/my/collect')}} icon={null} mode="link" style={{height:70,color:'#000',fontSize:'18px',backgroundColor:'#fff',borderBottom:'3px solid #f5f5f9'}}>
                    <img src={star} style={{marginTop:0,marginRight:10,height:20,width:20}}/>
                    收藏
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

export default withRouter(My);
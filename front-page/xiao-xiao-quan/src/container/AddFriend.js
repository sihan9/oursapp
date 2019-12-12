import React, { Component } from 'react'
import {NavBar} from 'antd-mobile';
import ret from '../image/set/返回.png';
import {Link} from 'react-router-dom';
import sousuo from '../image/friend/搜索.png'
export default class AddFriend extends Component {
    constructor(){
        super();
        this.state={
            phone:''
        }
    }
     
    handlePhone=(e)=>{
        this.setState({
            phone:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
       var phone=this.state.phone
       console.log(phone);
        fetch('http://101.37.172.74:8015/test/search',{
            // post提交
            method:"POST",
            
            body:phone//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(res=>{
            console.log(res)
            // if(data.content){
            //     this.props.history.push('/home')
            // }
        })
    }
    render() {
        return (
            <div style={{width:'100%'}}>
                  <NavBar
                   style={{backgroundColor:'#f7cb3c',color:'#fff',width:"100%"}} 
                   leftContent={
                    <Link to='/home/friend'>
                   
              
                   <img src={ret} style={{width:"24%",height:"60%"}}/>
                
                 
                 </Link>}
                  >
                  
                   添加好友
                   
               </NavBar>

               <div style={{width:'100%',position:'absolute'}}>
                   <form onSubmit={this.onSubmit} style={{width:'100%'}}>
                    <img src={sousuo} style={{width:'20px',height:'20px',position:'absolute',left:'9%',top:'46px'}}/>
                   <input type='text' name='phone' onChange={(e)=>this.handlePhone(e)} placeholder="通过手机号添加好友" style={{width:'80%',borderRadius:10,paddingLeft:'10%',color:'#555',marginLeft:'5%',height:'50px',fontSize:'18px',marginTop:'30px',border:'solid 1px #eee'}}/>
                   <input type='submit' style={{width:'60%',borderRadius:10,paddingLeft:'6px',height:'30px',marginLeft:'20%',backgroundColor:'#f7cb3c',color:'#fff',marginTop:'20px',borderStyle:'none'}}/>
                   </form>
               </div>
               <div style={{height:'auto',width:'80%',margin:'0 auto',marginTop:'30px'}}>
                </div>
            </div>
        )
    }
}

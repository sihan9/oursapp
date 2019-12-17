import React, { Component } from 'react'
import {NavBar,List,Popover} from 'antd-mobile';
import ret from '../image/set/返回.png';
import {Link} from 'react-router-dom';
import sousuo from '../image/friend/搜索.png'
let friend
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
    addFriend=(e)=>{
        e.target.value='已添加';
        e.target.style.backgroundColor='#888';
    }
    onSubmit=(e)=>{
        e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
       var phone=this.state.phone
       console.log(phone);
        fetch('http://101.37.172.74:8080/user/search',{
            // post提交
            method:"POST",
            
            body:phone//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(res=>{
            console.log(res)
            if(res.content!==''){
                friend=(
                    <List.Item style={{height:'60px'}}>
                        <img style={{width:'40px',height:'40px',float:'left',marginTop:'10px'}} src='https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256100974,305075936&fm=26&gp=0.jpg'/>
                        <p style={{margin:0,fontSize:'18px',float:'left',marginLeft:'14px',lineHeight:'60px'}}>除以</p>
                        <input type='button' onClick={this.addFriend} style={{float:'right',width:'20%',height:'40px',marginTop:'10px',backgroundColor:'#26bdb0',color:'#fff',borderStyle:'none'}} value='添加'/>
                    </List.Item>
                )
            }
            else{
                friend=(
                    <div></div>
                )
            }

            // if(data.content){
            //     this.props.history.push('/home')
            // }
        })
    }
    render() {
        
        return (
            <div style={{width:'100%'}}>
                  <NavBar
                   style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
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
                   <input type='submit' style={{width:'60%',borderRadius:10,paddingLeft:'6px',height:'30px',marginLeft:'20%',backgroundColor:'#26bdb0',color:'#fff',marginTop:'20px',borderStyle:'none'}}/>
                   </form>
               </div>
               <div style={{position:'absolute',top:'28%',height:'auto',width:'100%',margin:'0 auto',marginTop:'30px'}}>
                   {friend}
                </div>
            </div>
        )
    }
}

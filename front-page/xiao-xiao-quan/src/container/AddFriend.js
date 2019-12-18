import React, { Component } from 'react'
import {NavBar,List,Popover} from 'antd-mobile';
import ret from '../image/set/返回.png';
import {Link} from 'react-router-dom';
import sousuo from '../image/friend/搜索.png'
import { Toast} from 'antd-mobile';
export default class AddFriend extends Component {
    friend='';
    
    constructor(){
        super();
        this.state={
            phone:'',
            img:'',
            name:'',
            data:''
        }
    }
    
    handlePhone=(e)=>{
        this.setState({
            phone:e.target.value
        })
    }
    addFriend=(e)=>{
        e.target.value='已添加';
        e.target.style.backgroundColor='#ddd';
        let my=JSON.parse(localStorage.getItem('data'))[0];
        // console.log(this.state.data.phone);
        fetch( `http://101.37.172.74:8015/test/addFriend?phone=${my.phone}&&friendPhone=${this.state.data.phone}`)
        .then(res =>res.json())
        .then(res=>{
            console.log(res.content);
            localStorage.setItem('data',res.content)
        })
    }
    onSubmit=(e)=>{
      
    e.preventDefault();
    let isFriend=false;
    if(this.state.phone!=''){
       var phone=this.state.phone;
       let friend=JSON.parse(localStorage.getItem('data'))[0].friend;
       if(friend!==null){
            friend=friend.substring(0,friend.length-1);
            friend=friend.split(',');
            for(let i=0;i<friend.length;i++){
                if(friend[i]==phone){
                    isFriend=true;
                }
            }
            
        }
    
    //    console.log(phone);
        fetch('http://101.37.172.74:8015/test/search',{
            // post提交
            method:"POST",
            body:phone//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(res=>{
          
            let data=JSON.parse(res.content)[0];
            if(res.message==true&&isFriend==false){
                this.friend=(
                 <div style={{position:'absolute',top:'28%',height:'auto',width:'100%',margin:'0 auto',marginTop:'30px'}}>
                    <List.Item style={{height:'60px'}}>
                        <img style={{width:'40px',height:'40px',float:'left',marginTop:'10px'}} src={`http://101.37.172.74:8015/images/img?name=${data.img}`}/>
                        <p style={{margin:0,fontSize:'18px',float:'left',marginLeft:'14px',lineHeight:'60px'}}>{data.name}</p>
                        <input type='button' onClick={this.addFriend} style={{float:'right',width:'20%',height:'40px',marginTop:'10px',backgroundColor:'#26bdb0',color:'#fff',borderStyle:'none'}} value='添加'/>
                    </List.Item>
                </div> 
                )
                
            }
            else if(res.message&&isFriend){
                this.friend=(
                    <div style={{position:'absolute',top:'28%',height:'auto',width:'100%',margin:'0 auto',marginTop:'30px'}}>
                       <List.Item style={{height:'60px'}}>
                           <img style={{width:'40px',height:'40px',float:'left',marginTop:'10px'}} src={`http://101.37.172.74:8015/images/img?name=${data.img}`}/>
                           <p style={{margin:0,fontSize:'18px',float:'left',marginLeft:'14px',lineHeight:'60px'}}>{data.name}</p>
                           <input type='button'  style={{float:'right',width:'20%',height:'40px',marginTop:'10px',backgroundColor:'#ddd',color:'#fff',borderStyle:'none'}} value='已添加'/>
                       </List.Item>
                   </div> 
                   )
            }
            else{
                this.friend=(
                    <div style={{position:'absolute',top:'28%',height:'40px',width:'100%',paddingTop:'20px',textAlign:'center',margin:'0 auto',marginTop:'30px',backgroundColor:'#fff'}}>
                      没有该用户
                   </div> 
                   )
               
               
            }
            this.setState({
                data:data
            })
           
        })
    }
   
    else{
        Toast.offline('手机号为空', 1);
    }
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
               {this.friend}
            </div>
        )
    }
}

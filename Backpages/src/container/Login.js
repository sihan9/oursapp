import React, { Component } from 'react'
import {NavBar, Toast} from 'antd-mobile';
import {Link} from 'react-router-dom';
var chapterList =require('./Data');
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            user:'',
            password:'',

        }
        
    }
   
    handleName=(e)=>{
        this.setState({
            user:e.target.value
        })
    }
    handlePwd=(e)=>{
        this.setState({
            password:e.target.value
        })
        
    }
  
    onSubmit(e) {
        // 阻止事件传递
       e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        if(this.state.user==''||this.state.password==''){
            Toast.info('手机号或密码为空')
        }
        const post ={
            user:this.state.user,
            password:this.state.password
        }
        fetch('http://101.37.172.74:8015/test/login',{
            // post提交
            method:"POST",
            
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            // console.log(data)
           
            if(data.message){
                localStorage.setItem('data',data.content);
                if(!localStorage.getItem('forum')){
                    localStorage.setItem('forum',JSON.stringify(chapterList.default));
                }else{
                    let a = localStorage.getItem('forum');
                    localStorage.setItem('forum',a);
                }
                this.props.history.push('/home')
            }
            else{
                Toast.info('手机号或密码错误')
            }
        })

    }
    
    render() {
       
        return (
            <div style={{width:'100%',height:'100%'}}>
                  <img style={{width:'100%',height:'100%',position:'absolute', zIndex: -1,opacity:0.8}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576159524252&di=01570e2779ca6f8d6e6d5da2e29734a7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F21%2F20160421152421_JN3Zu.jpeg'/>
                  <NavBar
                   style={{color:'#585858',width:"100%",backgroundColor:'transparent',fontSize:'30px'}} 
                  >
                   
                   
                    </NavBar>
                   
                    <div style={{margin:'0 auto',width:"100%",height:"200px",marginTop:'100px'}}>
                        <form onSubmit={this.onSubmit.bind(this)} style={{width:'80%',margin:'0 auto'}}>
                            <div style={{backgroundColor:'#fff',width:'90%',height:'40px',margin:'0 auto',position:'relative',borderRadius:'10px',opacity:'0.7'}}>
                              
                                <input style={{fontFamily:'cursive',borderStyle:'none',borderRadius:10,backgroundColor:'#fff',fontSize:'18px',height:'40px',width:'100%',color:'#585858',position:'absolute',top:0,textAlign:'center',boxShadow:' 0px 2px 3px'}} placeholder="手机号" name='usr' onChange={this.handleName}/>
                            </div>
                            <div style={{backgroundColor:'#fff',width:'90%',height:'40px',margin:'0 auto',marginTop:'20px',position:'relative',borderRadius:'10px',opacity:'0.7'}}>
                               
                                <input style={{fontFamily:'cursive',borderStyle:'none',borderRadius:10,backgroundColor:'#fff',height:'40px',fontSize:'18px',width:'100%',color:'#585858',position:'absolute',top:0,textAlign:'center',boxShadow:' 0px 2px 3px'}} type="password" placeholder="密码" name='password' onChange={this.handlePwd}/>
                            </div>
                            <input type='submit'  style={{opacity:'0.7',marginLeft:'36.5%',fontSize:'18px',borderRadius:3,width:'23%',height:'70px',marginTop:'20px',color:'#888',backgroundColor:'#fff',borderRadius:'70px',borderStyle:'none',boxShadow:' 0px 3px 3px'}} value='login'/>
                            
                        </form>
                    </div>
                    <div style={{width:'100%',height:'120px'}}>
                        <div style={{float:'left',marginLeft:'20%',marginTop:'5%',color:'#fff',fontFamily:'cursive'}}>忘记密码</div>
                        <Link to='/register'>
                            <div style={{float:'right',marginRight:'20%',marginTop:'5%',color:'#fff',fontFamily:'cursive'}}>立即注册</div>
                        </Link>
                    </div>
            </div>
        )
    }
}

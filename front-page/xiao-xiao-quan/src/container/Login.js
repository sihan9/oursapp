import React, { Component } from 'react'
import {NavBar,InputItem} from 'antd-mobile';
import {Link} from 'react-router-dom';
import weixin from '../image/set/微信.png';
import  duanxin from '../image/set/短信.png';
import weibo from '../image/set/微博.png';
import qq from '../image/set/qq.png';
import usr from '../image/set/用户名.png';
import pwd from '../image/set/密码.png';
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
        const post ={
            user:this.state.user,
            password:this.state.password
        }
        fetch('http://101.37.172.74:8080/user/login',{
            // post提交
            method:"POST",
            
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.content){
                this.props.history.push('/home')
            }
        })

    }
    
    render() {
        return (
            <div style={{width:'100%',height:'100%',position:'relative'}}>
                  <img style={{width:'100%',height:'100%',position:'absolute', zIndex: -1,opacity: 0.8}} src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1940828277,2429005037&fm=26&gp=0.jpg'/>
                  <NavBar
                   style={{color:'#585858',width:"100%",backgroundColor:'transparent',fontSize:'30px'}} 
                  >
                   
                   
                    </NavBar>
                   
                    <div style={{margin:'0 auto',width:"100%",height:"200px",marginTop:'100px'}}>
                        <form onSubmit={this.onSubmit.bind(this)} style={{width:'80%',margin:'0 auto'}}>
                            <div style={{backgroundColor:'#fff',width:'90%',height:'50px',margin:'0 auto',position:'relative',borderRadius:'8px'}}>
                                <img src={usr} style={{width:30,height:30,marginTop:'10px'}}/>
                                <input style={{borderStyle:'none',backgroundColor:'#fff',fontSize:'18px',height:'50px',width:'84%',color:'#585858',position:'absolute',top:0,left:40}} placeholder="手机号" name='usr' onChange={this.handleName}/>
                            </div>
                            <div style={{backgroundColor:'#fff',width:'90%',height:'50px',margin:'0 auto',marginTop:'20px',position:'relative',borderRadius:'8px'}}>
                                <img src={pwd} style={{width:30,height:30,marginTop:'10px'}}/>
                                <input style={{borderStyle:'none',backgroundColor:'#fff',height:'50px',fontSize:'18px',width:'84%',color:'#585858',position:'absolute',top:0,left:40}} type="password" placeholder="密码" name='password' onChange={this.handlePwd}/>
                            </div>
                            <input type='submit'  style={{marginLeft:'14%',fontSize:'18px',borderRadius:3,width:'70%',height:'50px',marginTop:'20px',color:'#fff',backgroundColor:'#585858',borderRadius:'10px'}} value='登录'/>
                            
                        </form>
                    </div>
                    <div style={{width:'100%',height:'120px'}}>
                        <div style={{float:'left',marginLeft:'20%',marginTop:'5%',color:'#585858'}}>忘记密码</div>
                        <Link to='/register'>
                            <div style={{float:'right',marginRight:'20%',marginTop:'5%',color:'#585858'}}>立即注册</div>
                        </Link>
                    </div>
                    <div style={{width:'100%',height:'200px'}}>
                        <p style={{textAlign:'center',margin:0,color:'#585858'}}>----------第三方账号直接的的的登录----------</p>
                        <div style={{width:'80%',height:'40px',margin:'0 auto',marginTop:50}}>
                          <img style={{width:'16%',height:40,float:'left',borderRadius:'40px',marginLeft:'20px'}} src={weixin}/>
                          <img style={{marginLeft:'8%',width:'16%',height:40,float:'left',borderRadius:'40px'}} src={qq}/>
                          <img style={{marginLeft:'8%',width:'16',height:40,float:'left',borderRadius:'40px'}} src={weibo}/>
                          <img style={{marginLeft:'8%',width:'16%',height:40,float:'left',borderRadius:'40px'}} src={duanxin}/>
                          
                          
                        </div>
                    </div>
   
            </div>
        )
    }
}

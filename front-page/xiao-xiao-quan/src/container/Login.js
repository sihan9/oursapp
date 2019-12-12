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
        fetch('http://101.37.172.74:8015/test/login',{
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
            <div style={{width:'100%',height:'100%'}}>
                  <img style={{width:'100%',height:'100%',position:'absolute', zIndex: -1,opacity:1}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576058976013&di=f1d57b4a6dbc62daaf44c71f7cde2df6&imgtype=jpg&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D42b16be172899e51788e3a1c72a7d990%2Fa65049086e061d957d308f2472f40ad162d9ca0d.jpg'/>
                  <NavBar
                   style={{color:'#585858',width:"100%",backgroundColor:'transparent',fontSize:'30px'}} 
                  >
                   
                   
                    </NavBar>
                   
                    <div style={{margin:'0 auto',width:"100%",height:"200px",marginTop:'100px'}}>
                        <form onSubmit={this.onSubmit.bind(this)} style={{width:'80%',margin:'0 auto'}}>
                            <div style={{backgroundColor:'#fff',width:'90%',height:'40px',margin:'0 auto',position:'relative',borderRadius:'10px'}}>
                                {/* <img src={usr} style={{width:30,height:30,marginTop:'10px'}}/> */}
                                <input style={{fontFamily:'cursive',borderStyle:'none',borderRadius:10,backgroundColor:'#fff',fontSize:'18px',height:'40px',width:'100%',color:'#585858',position:'absolute',top:0,textAlign:'center',boxShadow:' 0px 2px 3px'}} placeholder="手机号" name='usr' onChange={this.handleName}/>
                            </div>
                            <div style={{backgroundColor:'#fff',width:'90%',height:'40px',margin:'0 auto',marginTop:'20px',position:'relative',borderRadius:'10px'}}>
                                {/* <img src={pwd} style={{width:30,height:30,marginTop:'10px'}}/> */}
                                <input style={{fontFamily:'cursive',borderStyle:'none',borderRadius:10,backgroundColor:'#fff',height:'40px',fontSize:'18px',width:'100%',color:'#585858',position:'absolute',top:0,textAlign:'center',boxShadow:' 0px 2px 3px'}} type="password" placeholder="密码" name='password' onChange={this.handlePwd}/>
                            </div>
                            <input type='submit'  style={{marginLeft:'36.5%',fontSize:'18px',borderRadius:3,width:'23%',height:'70px',marginTop:'20px',color:'#888',backgroundColor:'#fff',borderRadius:'70px',borderStyle:'none',boxShadow:' 0px 3px 3px'}} value='login'/>
                            
                        </form>
                    </div>
                    <div style={{width:'100%',height:'120px'}}>
                        <div style={{float:'left',marginLeft:'20%',marginTop:'5%',color:'#fff',fontFamily:'cursive'}}>忘记密码</div>
                        <Link to='/register'>
                            <div style={{float:'right',marginRight:'20%',marginTop:'5%',color:'#fff',fontFamily:'cursive'}}>立即注册</div>
                        </Link>
                    </div>
                    {/* <div style={{width:'100%',height:'200px'}}>
                        <p style={{textAlign:'center',margin:0,color:'#585858'}}>----------第三方账号直接的的的登录----------</p>
                        <div style={{width:'80%',height:'40px',margin:'0 auto',marginTop:50}}>
                          <img style={{width:'16%',height:40,float:'left',borderRadius:'40px',marginLeft:'20px'}} src={weixin}/>
                          <img style={{marginLeft:'8%',width:'16%',height:40,float:'left',borderRadius:'40px'}} src={qq}/>
                          <img style={{marginLeft:'8%',width:'16',height:40,float:'left',borderRadius:'40px'}} src={weibo}/>
                          <img style={{marginLeft:'8%',width:'16%',height:40,float:'left',borderRadius:'40px'}} src={duanxin}/>
                          
                          
                        </div>
                    </div> */}
   
            </div>
        )
    }
}

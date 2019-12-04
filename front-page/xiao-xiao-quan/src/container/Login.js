import React, { Component } from 'react'
import {NavBar,InputItem} from 'antd-mobile';
import {Link} from 'react-router-dom';
import touxiang from '../image/set/头像更换.png';
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
            <div>
                  <NavBar
                   style={{backgroundColor:'#1296db',color:'#fff',width:"100%"}} 
                  >
                   登录
                   
                    </NavBar>
                    <div style={{width:'100%',backgroundColor:'#fff',height:'150px'}}>
                        <div style={{margin:'0 auto',width:"100%",height:"100px"}} id="touxiang">
                            <img  src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1575443840&di=1364177293c9d9b3a9b340a3721d8998&src=http://hbimg.huabanimg.com/e920682e57a4652a3c61901785ac9e79fe63850c97aa8-UgkHiW_fw658'
                            id="avatar_img" style={{margin:'0 auto',width:"100%",height:"100px",marginTop:20,marginBottom:'6%'}}/>
                          
                        </div>
                    </div>
                    <div style={{margin:'0 auto',width:"100%",height:"160px",backgroundColor:'#fff'}}>
                            <form onSubmit={this.onSubmit.bind(this)} style={{width:'80%',margin:'0 auto'}}>
                            <div className='login'>
                                <img src={usr} style={{width:20,height:20}}/>
                                <input placeholder="手机号" name='usr' onChange={this.handleName}/>
                            </div>
                            <div className='login'>
                                <img src={pwd} style={{width:20,height:20}}/>
                                <input type="password" placeholder="密码" name='password' onChange={this.handlePwd}/>
                            </div>
                            <input type='submit'  style={{marginLeft:'14%',fontSize:'18px',borderRadius:3,width:'70%',height:'50px',marginTop:'20px',color:'#fff',backgroundColor:'#1296db',borderRadius:'10px'}} value='登录'/>
                            
                            </form>
                    </div>
                    <div style={{width:'100%',height:'120px',backgroundColor:'#fff'}}>
                      <div style={{float:'left',marginLeft:'20%',marginTop:'5%',color:'#aaaaaa'}}>忘记密码</div>
                      <Link to='/register'>
                      <div style={{float:'right',marginRight:'20%',marginTop:'5%',color:'#aaaaaa'}}>立即注册</div>
                      </Link>
                    </div>
                    <div style={{width:'100%',height:'300px',backgroundColor:'#ffffff'}}>
                        <p style={{textAlign:'center',margin:0,color:'#aaa'}}>----------第三方账号直接的的的登录----------</p>
                        <div style={{width:'70%',margin:'0 auto',marginTop:50}}>
                          <img style={{width:'18%',height:40,float:'left',borderRadius:'40px'}} src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1377547971,3453629665&fm=26&gp=0.jpg'/>
                          <img style={{marginLeft:'10%',width:'12%',height:36,float:'left',borderRadius:'40px'}} src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=37991897,2235150194&fm=26&gp=0.jpg'/>
                          <img style={{marginLeft:'10%',width:'18%',height:40,float:'left',borderRadius:'40px'}} src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2094330510,3937195633&fm=26&gp=0.jpg'/>
                          <img style={{marginLeft:'10%',width:'18%',height:40,float:'left',borderRadius:'40px'}} src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3761163873,1148004778&fm=26&gp=0.jpg'/>
                          
                          
                        </div>
                    </div>
   
            </div>
        )
    }
}

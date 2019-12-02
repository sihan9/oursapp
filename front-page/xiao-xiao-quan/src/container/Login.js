import React, { Component } from 'react'
import {NavBar,InputItem} from 'antd-mobile';
import {Link} from 'react-router-dom';
import touxiang from '../image/set/头像更换.png';
import usr from '../image/set/用户名.png';
import pwd from '../image/set/密码.png';
export default class Login extends Component {
  
      
   
    render() {
        return (
            <div>
                  <NavBar
                   style={{backgroundColor:'#f5f5f9',color:'grey',width:"100%"}} 
                  >
                   登录
                   
                    </NavBar>
                    <div style={{width:'100%',backgroundColor:'#fff',height:'150px'}}>
                        <div style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                            <img  src={touxiang} alt='头像'   id="avatar_img" style={{margin:'0 auto',width:"100px",height:"100px",marginTop:20,borderRadius:'100px'}}/>
                          
                        </div>
                    </div>
                    <div style={{margin:'0 auto',width:"100%",height:"160px",backgroundColor:'#fff'}}>
                            <form method='post' action='/#/' style={{width:'80%',margin:'0 auto'}}>
                            <InputItem
                                placeholder="用户名、账号"
                                name='usr'
                            ><img src={usr} style={{width:20,height:20}}/>
                            </InputItem>
                            <InputItem
                                
                                placeholder="密码"
                                name='pwd'
                            ><img src={pwd} style={{width:20,height:20}}/>
                            </InputItem>
                            <Link to='/home'>
                            <input type='submit'  style={{marginLeft:'14%',fontSize:'18px',borderRadius:3,width:'70%',height:'50px',marginTop:'20px',color:'#fff',backgroundColor:'#1296db',borderRadius:'10px'}} value='登录'/>
                            </Link>
                            </form>
                    </div>
                    <div style={{width:'100%',height:'80px',backgroundColor:'#fff'}}>
                      <div style={{float:'left',marginLeft:'20%',marginTop:'5%',color:'#aaaaaa'}}>忘记密码</div>
                      <Link to='/register'>
                      <div style={{float:'right',marginRight:'20%',marginTop:'5%',color:'#aaaaaa'}}>立即注册</div>
                      </Link>
                    </div>
                    <div style={{width:'100%',height:'300px',backgroundColor:'#ffffff'}}>
                        <p style={{textAlign:'center',margin:0,color:'#aaa'}}>----------第三方账号直接的的的登录----------</p>
                        <div style={{width:'70%',margin:'0 auto',marginTop:50}}>
                          <img style={{width:'18%',height:40,float:'left',borderRadius:'40px'}} src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1377547971,3453629665&fm=26&gp=0.jpg'/>
                          <img style={{marginLeft:'10%',width:'16%',height:40,float:'left',borderRadius:'40px'}} src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=37991897,2235150194&fm=26&gp=0.jpg'/>
                          <img style={{marginLeft:'10%',width:'18%',height:40,float:'left',borderRadius:'40px'}} src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2094330510,3937195633&fm=26&gp=0.jpg'/>
                          <img style={{marginLeft:'10%',width:'18%',height:40,float:'left',borderRadius:'40px'}} src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3761163873,1148004778&fm=26&gp=0.jpg'/>
                          
                          
                        </div>
                    </div>
   
            </div>
        )
    }
}

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
            data:[],
            user:'',
            password:'',
        }
    }
    componentDidMount(){
        fetch('http://101.37.172.74:3000/user')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.content
                })
        })
    }
    componentDidUpdate(){
        fetch('http://101.37.172.74:3000/user')
            .then((res)=>res.json())
            .then((res)=>{
                    this.setState({data:res.content});
                })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
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
    check=()=>{
        var islogin =false;
        console.log(this.state.user);
        console.log(this.state.password);

        for(var i=0;i<this.state.data.length;i++){
            if(this.state.user === this.state.data[i].phone && this.state.password === this.state.data[i].password){
                // this.props.history.push('/home/shouye')
                islogin = true
            }
        }
        console.log(islogin)
        if(islogin){
            this.props.history.push('/app')
        }else{
            alert('用户名密码错误！')
        }
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
                        <div style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                            <img  src={touxiang} alt='头像'   id="avatar_img" style={{margin:'0 auto',width:"100px",height:"100px",marginTop:20,borderRadius:'100px'}}/>
                          
                        </div>
                    </div>
                    <div style={{margin:'0 auto',width:"100%",height:"160px",backgroundColor:'#fff'}}>
                            <form method='GET' style={{width:'80%',margin:'0 auto'}}>
                            <div className='login'>
                                <img src={usr} style={{width:20,height:20}}/>
                                <input placeholder="用户名、账号" name='usr' onChange={this.handleName}/>
                            </div>
                            <div className='login'>
                                <img src={pwd} style={{width:20,height:20}}/>
                                <input type="password" placeholder="密码" name='password' onChange={this.handlePwd}/>
                            </div>
                            <input type='submit' onClick={this.check} style={{marginLeft:'14%',fontSize:'18px',borderRadius:3,width:'70%',height:'50px',marginTop:'20px',color:'#fff',backgroundColor:'#1296db',borderRadius:'10px'}} value='登录'/>
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

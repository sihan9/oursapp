import React, { Component } from 'react'
import {NavBar,NoticeBar,Button} from 'antd-mobile';
import ret from '../image/set/返回.png';
import {Link} from 'react-router-dom';
// import { Dimensions } from "react-native";
// const deviceHeight = Dimensions.get('window').height; 

/**
 * 账号安全界面
 */
export default class Count extends Component {
    constructor(){
        super();
        this.state={
            imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg'
        }
    }
    // componentDidMount(){
    //     fetch('http://101.37.172.74:8080/count')
    //     .then((res)=>res.json())
    //     .then((res)=>{
              
    //     //    this.setState({data:res.content});
    //     })
    //     console.log(this.state.data)
    // }
    addImage = () => {
        this.input.click();//触发input：file的click事件，
      };
     
      handleImageChange = (e) => {//处理图片
        const saveUrl = this.props.saveUrl;
        const file = e.target.files[0];
        const windowURL = window.URL || window.webkitURL;//实现预览
        const dataURl = windowURL.createObjectURL(file);//硬盘或sd卡指向文件路径
        this.setState({
          imgUrl:dataURl
        });
        let param = new FormData(); //创建form对象
        param.append('file',file);

    }
    //  getData=(e)=>{
    //     e.preventDefault(); 
    //     if(this.state.pwd!==this.state.rePwd)
    //         console.log('密码输入不一致');
    //     fetch('http://101.37.172.74:8080/user/information',{
           
    //     })
    //         .then(res =>res.json())
    //         .then(data =>{
    //             console.log(data)
    //             if(data.content){
    //                 this.props.history.push('/my/set')
    //             }
    //         })
        
    // }

    render() {
        return (
            <div style={{width:'100%' }}>
                {/* <img style={{width:'100%',height:'100%',position:'absolute', zIndex: -1,opacity: 0.6}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575556526370&di=e564f89b7a1c3d1d1627cad9c00b8356&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2F200903%2F22%2F186651_12377164013a5x.jpg'/> */}
                 <NavBar
                   style={{backgroundColor:'#f7cb3c',color:'#fff',width:"100%"}} 
                  
                   leftContent={
                       <Link to='/my/set'>
                      
                 
                      <img src={ret} style={{width:"24%",height:"60%"}}/>
                   
                    
                    </Link>}
                    >
                   修改个人资料
                   
                    </NavBar>
                    {/* <form onSubmit={this.onSubmit}> */}
                    <form action="http://101.37.172.74:8015/test/information" method='post' enctype="multipart/form-data">
                    <div style={{width:'100%',backgroundColor:'#fff',height:'140px',paddingTop:'10px'}}>
                        <div id="user-photo" style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                            <img  src={this.state.imgUrl} alt='头像'  onClick={this.addImage}   id="avatar_img" style={{margin:'0 auto',width:"100px",height:"100px",marginTop:20,borderRadius:'100px'}}/>
                            <input type="file" id="file" accept="image/*" name='pic' onChange={this.handleImageChange} capture='camera' ref={(el) => { this.input = el }} style={{display:'none'}}></input>
                        </div>
                    </div>
                    <div style={{width:'100%',backgroundColor:'#fff'}}>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>昵称</p>
                            <input name='name' onChange={this.handleName} style={{marginLeft:'4%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px'}} type='text' placeholder='请输入昵称'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>性别</p>
                            <input name='sex' onChange={this.handleSex} onChange={this.handleCode} style={{marginLeft:'4%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px'}} type='text' placeholder='请输入性别'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>学校</p>
                            <input name='school' onChange={this.handleSchool} onChange={this.handleCode} style={{marginLeft:'4%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px'}} type='text' placeholder='请输入学校'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>学号</p>
                            <input name='code' onChange={this.handleCode} onChange={this.handleCode} style={{marginLeft:'4%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px'}} type='number' placeholder='请输入学号'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>密码</p>
                            <input type='password' onChange={this.handlePassword} name='pwd' style={{marginLeft:'4%',width:'50%',height:'30px',border:'1px solid #aaaaaa',borderRadius:'4px'}} type='password' placeholder='请输入密码'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>确认密码</p>
                            <input type='password' onChange={this.handleRepassword} name='pwd' style={{marginLeft:'4%',width:'50%',height:'30px',border:'1px solid #aaaaaa',borderRadius:'4px'}} type='password' placeholder='请输入密码'/>
                        </div>
                        <div>
                            {/* <Link to='/my/set'> */}
                            <input type='submit' value='保存' style={{color:'#fff',borderStyle:'none',fontSize:'18px',width:'50%',height:'50px',marginLeft:'16%',backgroundColor:'#f7cb3c',borderRadius:'20px',marginLeft:'20%',marginBottom:'30px'}}/>
                            {/* </Link> */}
                       </div>
                    </div>
                    </form>
                    
            </div>
        )
    }
}

import React, { Component } from 'react'
import {NavBar,NoticeBar,Button} from 'antd-mobile';
import ret from '../image/set/返回.png';

import {Link,withRouter} from 'react-router-dom';
let he=window.innerHeight;
let a;
let localStorageData;
/**
 * 账号安全界面
 */
 class Count extends Component {
     base64='';
    constructor(){
        super();
        this.state={
            img:'',
            name:'',
            school:'',
            schoolnum:'',
            sex:'',
            password:'',
            repwd:'',
           
        }
    }
    componentDidMount(){
        localStorageData=JSON.parse(localStorage.getItem('data'))[0]
        this.setState({
            img:localStorageData.img,
            name:localStorageData.name,
            school:localStorageData.school,
            schoolnum:localStorageData.schoolnum,
            sex:localStorageData.sex,
            password:localStorageData.password,
            repwd:localStorage.password
        })
        // fetch('http://101.37.172.74:8015/test/massage')
        // .then((res)=>res.json())
        // .then((res)=>{
        //     console.log(res.content[0])
        //    this.setState({
        //        img:res.content[0].img,
        //        name:res.content[0].name,
        //        school:res.content[0].school,
        //        schoolnum:res.content[0].schoolnum,
        //        sex:res.content[0].sex,
        //        password:res.content[0].password
        //     });

        // }) 
      
    }
    addImage = () => {
        this.input.click();//触发input：file的click事件，
      }
     
      handleImageChange = (e) => {//处理图片
        const file = e.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(e){
            this.base64=e.target.result;
             localStorage.setItem('pic',this.base64);
        }
        const windowURL = window.URL || window.webkitURL;//实现预览
        const dataURl = windowURL.createObjectURL(file);//硬盘或sd卡指向文件路径
      
        this.setState({
          img:dataURl
        });
        // let param = new FormData(); //创建form对象
        // // console.log(file);
        // param.append('file',file);
        // console.log(param.get('file'))
        // this.setState({
        //     param
        // })

    }
 
    handleName = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleSex = (e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handleSchool = (e)=>{
        this.setState({
            school:e.target.value
        })
    }
    handleCode = (e)=>{
        this.setState({
            schoolnum:e.target.value
        })
    }
    handlePassword = (e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handleRepassword = (e)=>{
        this.setState({
            repwd:e.target.value
        })
    }
    
    postForm = (e)=>{
        e.preventDefault()
       
        let data={
            emile:localStorageData.emile,
            friend:localStorageData.friend,
            img:this.state.img,
            nickname:localStorageData.nickname,
            name:this.state.name,
           
            password:this.state.password,
            school:this.state.school,
            schoolnum:this.state.schoolnum,
            sex:this.state.sex ,
            pic:localStorage.getItem('pic'),
            phone:localStorageData.phone
        }
        localStorage.setItem('data',JSON.stringify([data]))
       
        fetch(`http://101.37.172.74:8015/test/information?phone=${data.phone}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(res.message){
                console.log(res.content);
                localStorage.setItem('data',res.content)
            this.props.history.push('/home/my')
            }
        })
       
    }
    render() {
        let img
        let str=this.state.img;
        a=str.indexOf('http')
        if(a!=-1){
            img=(
                <div id="user-photo" style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                    <img  src={this.state.img} alt='头像'  onClick={this.addImage}   id="avatar_img" style={{margin:'0 auto',width:"100px",height:"100px",marginTop:20,borderRadius:'100px'}}/>
                    <input type="file" id="file" accept="image/*" name='pic' onChange={this.handleImageChange} capture='camera' ref={(el) => { this.input = el }} style={{display:'none'}}></input>
                
                </div>
            )
        }
        else{
            img=(
                <div id="user-photo" style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                    <img  src={`http://101.37.172.74:8015/images/img?name=${this.state.img}`} alt='头像'  onClick={this.addImage}   id="avatar_img" style={{margin:'0 auto',width:"100px",height:"100px",marginTop:20,borderRadius:'100px'}}/>
                    <input type="file" id="file" accept="image/*" name='pic' onChange={this.handleImageChange} capture='camera' ref={(el) => { this.input = el }} style={{display:'none'}}></input>
                </div>
            )
        }
        return (
            <div style={{width:'100%',height:he,backgroundColor:'#fff'}}>
                {/* <img style={{width:'100%',height:'100%',position:'absolute', zIndex: -1,opacity: 0.6}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575556526370&di=e564f89b7a1c3d1d1627cad9c00b8356&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2F200903%2F22%2F186651_12377164013a5x.jpg'/> */}
                 <NavBar
                   style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
                  
                   leftContent={
                       <Link to='/my/set'>
                      
                 
                      <img src={ret} style={{width:"24%",height:"60%"}}/>
                   
                    
                    </Link>}
                    >
                   修改个人资料
                   
                    </NavBar>
                    <form onSubmit={this.postForm}>
                    {/* <form action="http://101.37.172.74:8015/test/information" method='post' enctype="multipart/form-data"> */}
                    <div style={{width:'100%',height:'140px',paddingTop:'10px'}}>
                        {img}
                    </div>
                    <div style={{width:'100%'}}>
                        <div style={{fontSize:'18px',width:'80%',margin:'0 auto',marginBottom:'30px',borderBottom:'1px solid #ccc'}}>
                            <p style={{width:'18%',margin:0,dispaly:'inline',float:'left'}}>昵称:</p>
                            <input name='name' onChange={this.handleName} style={{marginLeft:'4%',width:'70%',height:'30px',border:'1px solid #ccc',borderRadius:'4px',borderStyle:'none'}} type='text' placeholder={this.state.name} />
                        </div>
                        <div style={{fontSize:'18px',width:'80%',margin:'0 auto',marginBottom:'30px',borderBottom:'1px solid #ccc'}}>
                            <p style={{width:'18%',margin:0,dispaly:'inline',float:'left'}}>性别:</p>
                            <input name='sex' placeholder={this.state.sex} onChange={this.handleSex} style={{marginLeft:'4%',width:'70%',height:'30px',border:'1px solid #ccc',borderRadius:'4px',borderStyle:'none'}} type='text' />
                        </div>
                        <div style={{fontSize:'18px',width:'80%',margin:'0 auto',marginBottom:'30px',borderBottom:'1px solid #ccc'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>学校:</p>
                            <input name='school' placeholder={this.state.school} onChange={this.handleSchool}  style={{marginLeft:'4%',width:'70%',height:'30px',borderRadius:'4px',borderStyle:'none'}} type='text'/>
                        </div>
                        <div style={{fontSize:'18px',width:'80%',margin:'0 auto',marginBottom:'30px',borderBottom:'1px solid #ccc'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>学号:</p>
                            <input name='code' placeholder={this.state.schoolnum} onChange={this.handleCode}  style={{marginLeft:'4%',width:'70%',height:'30px',borderStyle:'none',borderRadius:'4px'}} type='number' />
                        </div>
                        <div style={{fontSize:'18px',width:'80%',margin:'0 auto',marginBottom:'30px',borderBottom:'1px solid #ccc'}}>
                            <p style={{width:'24%',margin:0,dispaly:'inline',float:'left'}}>密码:</p>
                            <input type='password' placeholder={this.state.password} onChange={this.handlePassword} name='pwd' style={{marginLeft:'',width:'70%',height:'30px',borderRadius:'4px',borderStyle:'none'}} type='password' />
                        </div>
                        <div style={{fontSize:'18px',width:'80%',margin:'0 auto',marginBottom:'30px',borderBottom:'1px solid #ccc'}}>
                            <p style={{width:'26%',margin:0,dispaly:'inline',float:'left'}}>确认密码:</p>
                            <input placeholder={this.state.repwd} type='password' onChange={this.handleRepassword} name='pwd' style={{marginLeft:'4%',width:'70%',height:'30px',borderRadius:'4px',borderStyle:'none'}} type='password' />
                        </div>
                        <div>
                           
                            <input type='submit' value='保存' style={{color:'#fff',borderStyle:'none',fontSize:'18px',width:'50%',height:'50px',marginLeft:'25%',backgroundColor:'#46a794',borderRadius:'20px'}}/>
                           
                       </div>
                    </div>
                    </form>
                    
            </div>
        )
    }
}
export default withRouter(Count);

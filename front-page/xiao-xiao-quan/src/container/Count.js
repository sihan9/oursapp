import React, { Component } from 'react'
import {NavBar,NoticeBar,Button} from 'antd-mobile';
import ret from '../image/set/返回.png';
import {Link} from 'react-router-dom';
import touxiang from '../image/set/头像更换.png';

/**
 * 账号安全界面
 */
export default class Count extends Component {
    constructor(){
        super();
        this.state={
            imgUrl:touxiang
        }
    }
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
    render() {
        return (
            <div>
                 <NavBar
                   style={{backgroundColor:'#1296db',color:'#fff',width:"100%"}} 
                  
                   leftContent={
                       <Link to='/my/set'>
                      
                 
                      <img src={ret} style={{width:"24%",height:"60%"}}/>
                   
                    
                    </Link>}
                    >
                   账号安全
                   
                    </NavBar>
                    <div style={{width:'100%',backgroundColor:'#fff',height:'200px',paddingTop:'30px'}}>
                        <div id="user-photo" style={{margin:'0 auto',width:"100px",height:"100px"}} id="touxiang">
                            <img  src={this.state.imgUrl} alt='头像'  onClick={this.addImage}   id="avatar_img" style={{margin:'0 auto',width:"100px",height:"100px",marginTop:20,borderRadius:'100px'}}/>
                            <input type="file" id="file" accept="image/*"  onChange={this.handleImageChange} capture='camera' ref={(el) => { this.input = el }} style={{display:'none'}}></input>
                        </div>
                    </div>
                    <div style={{width:'100%',height:'400px',backgroundColor:'#fff'}}>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            昵称
                            <input name='name' style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px'}} type='text' placeholder='请输入昵称'/>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            性别
                            <select style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px',color:'#777'}}>
                                <option value ="boy" defaultValue="selected">男</option>
                                <option value ="girl">女</option>
                            </select>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            学校
                            <select style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #ccc',borderRadius:'4px',color:'#777'}}>
                                <option value ="hebeishida" defaultValue="selected">河北师范大学</option>
                                <option value ="hebeikeda">河北科技大学</option>
                                <option value="hebeidaxue">河北大学</option>
                                <option value="tielu">石家庄铁路大学</option>
                                <option value='hebeiyikeda'>河北医科大学</option>
                            </select>
                        </div>
                        <div style={{fontSize:'18px',marginBottom:'30px',marginLeft:'10%'}}>
                            密码
                            <input name='pwd' style={{marginLeft:'10%',width:'50%',height:'30px',border:'1px solid #aaaaaa',borderRadius:'4px'}} type='password' placeholder='请输入密码'/>
                        </div>
                        <div>
                            <Link to='/my/set'>
                            <input type='submit' value='保存' style={{color:'#fff',fontSize:'18px',width:'50%',height:'50px',marginLeft:'16%',backgroundColor:'#1296db',borderRadius:'20px',marginLeft:'20%'}}/>
                            </Link>
                        </div>
                       
                    </div>
            </div>
        )
    }
}

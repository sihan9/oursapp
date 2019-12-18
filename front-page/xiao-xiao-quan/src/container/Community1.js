import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import "./css/style.css"; 
import {withRouter,} from 'react-router-dom'
import zaned from '../image/Community/2.png';
import unzan from '../image/Community/4.png';
var chapterList =require('./Data');

const requireContext = require.context('../image/Community', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
let a=true;
var followClick = false;

class Community1 extends Component{
    constructor(){
        super();
        this.state={
            data:chapterList.default
        }
        
    }
   follow=(value,e)=>{
       if(followClick==false){
        // e.target.value='已关注';
        value.isfollow='已关注'
        followClick=true;
        e.target.style.backgroundColor='#ddd'
       }
       else{
        value.isfollow='关注';
        followClick=false;
        e.target.style.backgroundColor='#26bdb0'
       }
       this.setState({
           data:chapterList.default
       })
   }
   Comment=(value,e)=>{
        if(value.isgood==false){
           value.unzan=zaned;
            value.good=value.good+1;
            value.isgood=true;
       
    }
    else{
       value.unzan=unzan;
        value.good=value.good-1;
        value.isgood=false
    }
    this.setState({
        data:chapterList.default
    })
}
   showTalk=(idx,e)=>{
       if(a){
        document.getElementById(idx).style.display='block';
        a=false;
       }
       else{
           document.getElementById(idx).style.display='none';
           a=true;
       }

   }
   handleInput=(value,e)=>{
    if(e.keyCode === 13){
        if(e.target.value!==''){
            value.comment=value.comment+1;

            value.talk.push(JSON.parse(localStorage.getItem('data'))[0].name +":"+e.target.value);
        }
        this.setState({
            data:chapterList.default
        })
        e.target.value='';
    }
   }
    handle=(e)=>{

    this.props.history.push('/community/publish')
}
    render(){
        return (
            <div>
                <NavBar
                 style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="plus" onClick={this.handle}/>,
                ]}
                >广场
                </NavBar>
                <div className='nav'>
                    <ul>
                        <li><a>推荐</a>
                            <ul>
                                <li><a >美食</a></li>
                                <li><a >旅游</a></li>
                                <li><a >购物</a></li>
                                <li><a >美妆</a></li>
                            </ul>
                        </li>
                        <li><a>最新</a></li>
                        <li><a>最热</a></li>
                        <li><a>好友</a></li>
                    </ul>
                </div>
                <div>
                {
                    this.state.data.map((value,idx)=>(
                        <div className = "navbar" key = {idx}>
                            {/* 头像 */}
                            <img className='img' onClick={()=>{}} src = {`http://101.37.172.74:8015/images/img?name=${value.img}`}/>
                            {/* 关注 */}
                            <div className='follow'>
                                <p className='username'>{value.name}</p>
                    <button onClick={(e)=>this.follow(value,e)} style={{backgroundColor:'#26bdb0',width:60}} className='tabFllow'>{value.isfollow}</button>
                            </div>
                            <p className="school">{value.school}</p>
                            <p className="comment">{value.title}</p>
                            <img className="commentImg" src={value.commentImg}   />
                            <div style={{float:"left",width:"100%",paddingTop:10,paddingLeft:10,paddingBottom:10}}>
                                <p style={{float:"left",marginLeft:"50%",marginTop:2}}>{value.publishTimer}</p>
                                {/* 点赞 */}
                                <img onClick={(e)=>this.Comment(value,e)} style={{width:22,float:"left",marginLeft:15}} src={value.unzan}/>
                                <p style={{float:"left",marginTop:3,marginLeft:7}}>{value.good}</p>
                                {/* 评论 */}
                                <img onClick={(e)=>this.showTalk(idx,e)} src={images[2]} style={{float:"left",width:22,marginTop:3,marginLeft:5}}/>
                                <p style={{float:"left",marginTop:3,marginLeft:4}}>{value.comment}</p>
                                <div id={idx} style={{display:'none',width:"100%",float:"left"}}>
                                    <from autoComplete="off">
                                        <input autoComplete="off" onKeyDown={(e)=>this.handleInput(value,e)}  style={{backgroundColor:'#fff',width:"90%",height:30,backgroundColor:"#eee",border:0}} placeholder='说点什么吧'></input>
                                    </from>
                                </div>
                                <ul style={{float:'left',width:"100%"}}>
                                    {
                                        (value.talk||[]).map((value,i)=>(
                                            <li style={{listStyle:"none"}} key={i}>{value}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
                </div> 
                
    
            </div>
        )
    }
}

export default  withRouter(Community1);
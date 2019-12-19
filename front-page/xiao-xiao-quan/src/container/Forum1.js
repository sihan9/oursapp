import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import ret from '../image/set/返回.png';
import {Link} from 'react-router-dom';
import "./css/style.css"; 
import zaned from '../image/Community/2.png';
import unzan from '../image/Community/4.png';
import {withRouter,} from 'react-router-dom'
var chapterList =require('./Data');

const requireContext = require.context('../image/Community', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
let a=true;

let allForum=[];
let idForum=[];
class Forum1 extends Component{
    constructor(){
       
        super();
        this.state={
            data:JSON.parse(localStorage.getItem('forum')),
            forum:[]
        }
       
        allForum=[];
        for(let i=0;i<this.state.data.length;i++){
           
            if(this.state.data[i].phone==JSON.parse(localStorage.getItem('data'))[0].phone){
                allForum.push(this.state.data[i]);
                idForum.push(i);
            }
        }
      
    }

    Comment=(idx,value,e)=>{
        let a=JSON.parse(localStorage.getItem('forum')); 
            if(value.isgood==false){
               value.unzan=zaned;
               value.good=value.good+1;
               value.isgood=true;
               a[idx]=value;
               localStorage.setItem('forum',JSON.stringify(a));
        }
        else{
           value.unzan=unzan;
            value.good=value.good-1;
            value.isgood=false;
            a[idx]=value;
            localStorage.setItem('forum',JSON.stringify(a));
        }
        this.setState({
            data:JSON.parse(localStorage.getItem('forum'))
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
   handleInput=(idx,value,e)=>{
    let a=JSON.parse(localStorage.getItem('forum')); 
    if(e.keyCode === 13){
        if(e.target.value!==''){
            value.comment=value.comment+1;
            value.talk.push(JSON.parse(localStorage.getItem('data'))[0].name +":"+e.target.value);
            a[idx]=value;
            localStorage.setItem('forum',JSON.stringify(a));
        }
        this.setState({
            data:JSON.parse(localStorage.getItem('forum'))
        })
        e.target.value='';
    }
   }
    handle=(e)=>{
    this.props.history.push('/community/publish');

  }
  deleteForum=(idx)=>{
    let newForum=JSON.parse(localStorage.getItem('forum'));
   newForum.splice(idForum[idx],1);
    localStorage.setItem('forum',JSON.stringify(newForum));
    allForum.splice(idx,1);
    this.setState({
        data:JSON.parse(localStorage.getItem('forum'))
    })
  }

    render(){
        return (
            <div>
                 <div style={{position:'relative'}}>
                    <img style={{width:'100%',height:'160px'}} src='https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3593643456,2253978744&fm=26&gp=0.jpg'/>
                    <Link to='/home/my'>                 
                      <img src={ret} style={{width:"26px",height:"26px",position:'absolute',top:2,left:2}}/>
                    </Link>
                  
                </div>
                <div>
                {
                    allForum.map((value,idx)=>(
                        <div className = "navbar" key = {idx}>
                            {/* 头像 */}
                            <img className='img' onClick={()=>{}} src = {`http://101.37.172.74:8015/images/img?name=${value.img}`}/>
                           
                            <div className='follow'>
                                <p className='username'>{value.name}</p>
                                  {/* 删除帖子 */}
                               <img onClick={()=>this.deleteForum(idx)} style={{width:'20px',height:'20px',float:'right',marginRight:'20px',marginTop:'14px'}} src='https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3265765378,1116569126&fm=26&gp=0.jpg'/>
                            </div>
                            <p className="school">{value.school}</p>
                            <p className="comment">{value.title}</p>
                            <img className="commentImg" src={value.commentImg}   />
                            <div style={{float:"left",width:"100%",paddingTop:10,paddingLeft:10,paddingBottom:10}}>
                                <p style={{float:"left",marginLeft:"50%",marginTop:2}}>{value.publishTimer}</p>
                                {/* 点赞 */}
                                <img onClick={(e)=>this.Comment(idx,value,e)} style={{width:22,float:"left",marginLeft:15}} src={value.unzan}/>
                                <p style={{float:"left",marginTop:3,marginLeft:7}}>{value.good}</p>
                                {/* 评论 */}
                                <img onClick={(e)=>this.showTalk(idx,e)} src={images[2]} style={{float:"left",width:22,marginTop:3,marginLeft:5}}/>
                                <p style={{float:"left",marginTop:3,marginLeft:4}}>{value.comment}</p>
                                <div id={idx} style={{display:'none',width:"100%",float:"left"}}>
                                    <form autoComplete="off">
                                        <input autoComplete="off" onKeyDown={(e)=>this.handleInput(idx,value,e)}  style={{backgroundColor:'#fff',width:"90%",height:30,backgroundColor:"#eee",border:0}} placeholder='说点什么吧'></input>
                                    </form>
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

export default  withRouter(Forum1);
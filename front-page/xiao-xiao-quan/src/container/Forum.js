import React, {Component } from 'react'
import ret from '../image/set/返回.png';
import {Link} from 'react-router-dom';
import "./css3-lava-lamp-menu/css/style.css";
const requireContext = require.context('./css3-lava-lamp-menu/image', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
let a=true;
export default class Forum extends Component{
    constructor(){
        super();
        this.state={
            data:{
                img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg",
                name:"Sunshine",
                sign:'好好学习，天天向上',
                school:'河北师范大学',
                forum:[
                    {
                        time:'09月27日',
                        unClick:images[3],
                        title:'心情就像天气一样变化无穷！！！',
                        img:images[0],
                        zan:66,
                        talk:[
                            "zhangsan:下雨下雨",
                            "lisi:xssfnef",
                            "smv:ervfgnr"
                        ]
                    },
                    {
                        time:'09月27日',
                        unClick:images[3],
                        title:'心情就像天气一样变化无穷！！！',
                        img:images[0],
                        zan:66,
                        talk:[
                            
                        ]
                    },
                    {
                        time:'09月27日',
                        unClick:images[3],
                        title:'心情就像天气一样变化无穷！！！',
                        img:images[0],
                        zan:66,
                        talk:[
                            
                        ]
                    }
        
                ]
            }
        }
    }
  
   
   
     deleteForum=(idx)=>{
        var topic=this.state.data;
        topic.forum.splice(idx,1);
        this.setState({
           data:topic
        })

    }
    changeImg=(idx,e)=>{
        console.log(idx);
        if(a){
            let data=this.state.data;
            data.forum[idx].unClick=images[1];
            data.forum[idx].zan++;
            a=false;
            this.setState({
                data:data
            })
        }
        else{
            let data=this.state.data;
            data.forum[idx].unClick=images[3];
            data.forum[idx].zan--;
            a=true;
            this.setState({
                data:data
            })
        }
        
      

    }
 
    addTalk=(idx,e)=>{
        if(e.keyCode === 13){
            let msg=this.state.data.name+':'+e.target.value;
            e.target.value='';
            this.state.data.forum[idx--].talk.push(msg);
            this.setState({
                data:this.state.data
            })
        }
    }
   
    
    

   render(){ 
   
    return (
        <div style={{width:'100%'}}>
                <div style={{position:'relative'}}>
                    <img style={{width:'100%',height:'160px'}} src='https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3593643456,2253978744&fm=26&gp=0.jpg'/>
                    <Link to='/home/my'>                 
                      <img src={ret} style={{width:"26px",height:"26px",position:'absolute',top:2,left:2}}/>
                    </Link>
                  
                </div>
                {
                this.state.data.forum.map((item,idx)=>(
                    <div key={idx} style={{height:'auto',width:'100%',marginTop:4}}>
                        <div className = "navbar">
                        <img className='img' src = {this.state.data.img}/>
                        <div className='follow'>
                            <p className='username'>{this.state.data.name}</p>
                            <p style={{width:'40%', marginLeft:15,fontSize:12,float:'left',color:'#333',marginTop:'6px'}}>{this.state.data.forum[0].time}</p>
                            {/* 删除帖子 */}
                            <img onClick={(idx)=>this.deleteForum(idx)} style={{width:'20px',height:'20px',float:'right',marginRight:'20px'}} src='https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3265765378,1116569126&fm=26&gp=0.jpg'/>
                        </div>

                         <p className="comment">{item.title}</p>
                        <img className="commentImg" src={item.img}   />
                        <div style={{float:"left",width:"100%",paddingTop:10,paddingLeft:10}}>
                            <img onClick={(e)=>{this.changeImg(idx,e)}} style={{width:22,float:"left",marginLeft:'70%'}} src={item.unClick}/>
                           {/* 点赞 */}
                            <p style={{float:"left",marginTop:3,marginLeft:7}}>{item.zan}</p>
                            <img onClick={()=>{}} src={images[2]} style={{float:"left",width:22,marginTop:3,marginLeft:5}}/>
                            <ul style={{float:'left',width:"100%"}}>
                            {
                                item.talk.map((con,i)=>(
                                    <li style={{listStyle:"none"}} key={i}>{con}</li>
                                ))
                            }
                        </ul>
                        {/* 评论 */}
                        <div style={{display:this.showInput,width:"100%",float:"left"}}>
                                <input onKeyDown={(e)=>this.addTalk(idx,e)} style={{backgroundColor:'#fff',width:"80%",height:30,borderStyle:'none'}} placeholder='说点什么吧'></input>
                               
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
    }
    
}

import React,{useState,useEffect} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import "./css/style.css"; 
import {useHistory,withRouter,} from 'react-router-dom'
var chapterList =require('./Data');
console.log(chapterList.default[0]);
const requireContext = require.context('../image/Community', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);


var followClick = false;
function Community (){
    let history = useHistory();
    let [follow,setfollow] = useState('关注');
    let [back,setback]=useState('#26bdb0');
    let [width,setwidth]=useState('40px');
    let [showInput,setshowInput] = useState("none");     //输入框显示隐藏
    let [valueCon,setvalueCon]=useState(chapterList.default[0].talk);
    // let [comment1,setcomment1] = useState(chapterList.default[0].good);
    let [comment,setcomment] = useState(chapterList.default[0].comment);
    // let [data,setdata] = useState(chapterList.default[0]);
    useEffect(() => {
    //   setdata(chapterList)
      },[]);
    const Follow=()=>{
        if(followClick == false){
            setfollow('已关注');
            setback('#bfbfbf');
            setwidth('60px');
            followClick = true;
        }
        else{
            setfollow('关注');
            setback('#26bdb0');
            setwidth('40px');
            followClick = false;
        }
    }
    let Comment=(value,e)=>{
        console.log(value.isgood);
        if(value.isgood==false){
            e.target.src=value.zaned;
            console.log(value.good);
            value.good=value.good+1;
            value.isgood=true;
           
        }
        else{
            e.target.src=value.unzan;
            console.log(value.good);
            value.good=value.good-1;
            value.isgood=false
        }
       
        // // setcomment1(value.good);
        // if(chapterList.default[0].isgood==false){
        //     e.target.src=chapterList
        // }
        // else{
        //     // setimg(images[3]);
        //     // setcomment1(comment1-1);
        //     // chapterList[0].good-=1;
        //     // chapterList[0].isgood=false;
        // }
    }
    const handleClick=()=> {
        setTimeout(() => {
            setshowInput('block');
        }, 100);
    }
    const handleInput=(value,e)=>{
        if(e.keyCode === 13){
            // setvalueCon([...valueCon,e.target.value]);
            setshowInput('none');
            setcomment(comment+1);
            value.comment +=1;
            value.talk.push(e.target.value);
        }
    }
    const handle = ()=>{
        history.push('/community/publish')
    }
        return (
            <div>
                <NavBar
                 style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="plus" onClick={handle}/>,
                ]}
                >广场</NavBar>
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
                {
                    (chapterList.default||[]).map((value,idx)=>(
                        <div className = "navbar" key = {idx}>
                            <img className='img' onClick={()=>{history.push('/forum')}} src = {`http://101.37.172.74:8015/images/img?name=${value.img}`}/>
                            <div className='follow'>
                                <p className='username'>{value.name}</p>
                                <button onClick={Follow} style={{backgroundColor:`${back}`,width:`${width}`}} className='tabFllow'>{follow}</button>
                            </div>
                            <p className="school">{value.school}</p>
                            <p className="comment">{value.title}</p>
                            <img className="commentImg" src={value.commentImg}   />
                            <div style={{float:"left",width:"100%",paddingTop:10,paddingLeft:10,paddingBottom:10}}>
                                <p style={{float:"left",marginLeft:"50%",marginTop:2}}>{value.publishTimer}</p>
                                <img onClick={(e)=>Comment(value,e)} style={{width:22,float:"left",marginLeft:15}} src={value.unzan}/>
                                <p style={{float:"left",marginTop:3,marginLeft:7}}>{value.good}</p>
                                <img onClick={handleClick} src={images[2]} style={{float:"left",width:22,marginTop:3,marginLeft:5}}/>
                                <p style={{float:"left",marginTop:3,marginLeft:4}}>{value.comment}</p>
                                <div style={{display:showInput,width:"100%",float:"left"}}>
                                    <from autoComplete="off">
                                        <input autoComplete="off" onKeyDown={(e)=>handleInput(value,e)} style={{backgroundColor:'#fff',width:"90%",height:30,backgroundColor:"#eee",border:0}} placeholder='说点什么吧'></input>
                                    </from>
                                </div>
                                <ul style={{float:'left',width:"100%"}}>
                                    {
                                        (valueCon||[]).map((valueCon,i)=>(
                                        <li style={{listStyle:"none"}} key={i}>{value.name}：{valueCon}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
                
    
            </div>
        )
    }
    export default  withRouter(Community);


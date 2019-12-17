import React,{useState,useEffect} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import "./css/style.css"; 
import {useHistory,withRouter,} from 'react-router-dom'
const requireContext = require.context('../image/Community', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
var {chapterList} = require('./Data');
var followClick = false;
function Community (){
    let history = useHistory();
    let [img,setimg]=useState(chapterList[0].isgood?images[1]:images[3]);
    let [follow,setfollow] = useState('关注');
    let [back,setback]=useState('#26bdb0');
    let [width,setwidth]=useState('40px');
    let [showInput,setshowInput] = useState("none");     //输入框显示隐藏
    let [valueCon,setvalueCon]=useState(chapterList[0].talk);
    let [comment1,setcomment1] = useState(chapterList[0].good);
    let [comment,setcomment] = useState(chapterList[0].comment);
    let [data,setdata] = useState([]);
    useEffect(() => {
        // fetch('http://101.37.172.74:8080/user/massage',{
        // })
        // .then(res =>res.json())
        // .then((res)=>{
        //     setdata(res.content[0]);
        // })
        let data=localStorage.getItem('data');
        let da=JSON.parse(data)[0];
        setdata(da);
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
    let Comment=(value)=>{
        setcomment1(value.good);
        if(chapterList[0].isgood==false){
            setimg(images[1]);
            setcomment1(comment1+1);
            chapterList[0].good+=1;
            chapterList[0].isgood = true;
        }
        else{
            setimg(images[3]);
            setcomment1(comment1-1);
            chapterList[0].good-=1;
            chapterList[0].isgood=false;
        }
    }
    const handleClick=()=> {
        setTimeout(() => {
            setshowInput('block');
        }, 100);
    }
    const handleInput=(e)=>{
        if(e.keyCode === 13){
            setvalueCon([...valueCon,e.target.value]);
            setshowInput('none');
            setcomment(comment+1);
            chapterList[0].comment +=1;
            chapterList[0].talk.push(e.target.value);
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
                        <li><a href='#'>推荐</a>
                            <ul>
                                <li><a href='#'>美食</a></li>
                                <li><a href='#'>旅游</a></li>
                                <li><a href='#'>购物</a></li>
                                <li><a href='#'>美妆</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>最新</a></li>
                        <li><a href='#'>最热</a></li>
                        <li><a href='#'>好友</a></li>
                    </ul>
                </div>
                {
                    (chapterList||[]).map((value,idx)=>(
                        <div className = "navbar" key = {idx}>
                            <img className='img' onClick={()=>{history.push('/forum')}} src = {`http://101.37.172.74:8015/images/img?name=${data.img}`}/>
                            <div className='follow'>
                            <p className='username'>{data.name}</p>
                            <button onClick={Follow} style={{backgroundColor:`${back}`,width:`${width}`}} className='tabFllow'>{follow}</button>
                            </div>
                            <p className="school">{data.school}</p>
                            <p className="comment">{value.title}</p>
                            <img className="commentImg" src={value.commentImg}   />
                            <div style={{float:"left",width:"100%",paddingTop:10,paddingLeft:10,paddingBottom:10}}>
                                <p style={{float:"left",marginLeft:"50%",marginTop:2}}>{value.publishTimer}</p>
                                <img onClick={()=>Comment(value)} style={{width:22,float:"left",marginLeft:15}} src={img}/>
                                <p style={{float:"left",marginTop:3,marginLeft:7}}>{comment1}</p>
                                <img onClick={handleClick} src={images[2]} style={{float:"left",width:22,marginTop:3,marginLeft:5}}/>
                                <p style={{float:"left",marginTop:3,marginLeft:4}}>{comment}</p>
                                <div style={{display:showInput,width:"100%",float:"left"}}>
                                    <from autoComplete="off">
                                        <input autoComplete="off" onKeyDown={(e)=>handleInput(e,value)} style={{backgroundColor:'#fff',width:"90%",height:30,backgroundColor:"#eee",border:0}} placeholder='说点什么吧'></input>
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


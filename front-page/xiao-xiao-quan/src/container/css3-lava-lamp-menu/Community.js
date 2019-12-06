import React,{useState} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import "./css/style.css";
import {useHistory,withRouter} from 'react-router-dom'
const requireContext = require.context('./image', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);

function Community (){
    let history = useHistory();
    var name = '安好'
    let [img,setimg]=useState(images[3]);
    let [follow,setfollow] = useState('关注');
    let [back,setback]=useState('#f7cb3c');
    let [width,setwidth]=useState('40px');
    let [comment,setcomment] = useState(66);
    let [showInput,setshowInput] = useState("none");     //输入框显示隐藏
    let [valueCon,setvalueCon]=useState([]);
    const Follow=()=>{
        setfollow('已关注');
        setback('#bfbfbf');
        setwidth('60px');
    }
    const Comment=()=>{
        setimg(images[1]);
        setcomment(comment+1);
    }
    const handleClick=()=> {
        setshowInput('block');
    }
    const showvalueCon=(e)=>{
            setvalueCon([...valueCon,e.target.value]);
            setshowInput('none')
    }
    const handleInput=(e)=>{
        if(e.keyCode === 13){
            setvalueCon([...valueCon,e.target.value]);
            setshowInput('none')
        }
    }
    const handle = ()=>{
        history.push('/community/publish')
    }
        return (
            <div>
                <NavBar
                 style={{backgroundColor:'#f7cb3c',color:'#fff',width:"100%"}} 
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
                        <li><a href='#'>关注</a></li>
                    </ul>
                </div>
                <div className = "navbar">
                    <img className='img' src = "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1574758744&di=eabb518b61f0414d63271a1f607e3a2d&src=http://wx1.sinaimg.cn/orj360/8018b0d1ly1g8kjftn048j20sg0qgn1q.jpg"/>
                    <div className='follow'>
                        <p className='username'>{name}</p>
                        <button onClick={Follow} style={{backgroundColor:`${back}`,width:`${width}`}} className='tabFllow'>{follow}</button>
                    </div>
                    <p className="school">河北科技大学</p>
                    <p className="comment">心情就像天气一样变化无穷！！！</p>
                    <img className="commentImg" src={images[0]}   />
                    <div style={{float:"left",width:"100%",paddingTop:10,paddingLeft:10}}>
                        <p style={{float:"left",marginLeft:"50%",marginTop:2}}>11/8</p>
                        <img onClick={Comment} style={{width:22,float:"left",marginLeft:15}} src={img}/>
                        <p style={{float:"left",marginTop:3,marginLeft:7}}>{comment}</p>
                            <img onClick={handleClick} src={images[2]} style={{float:"left",width:22,marginTop:3,marginLeft:5}}/>
                        <p style={{float:"left",marginTop:3,marginLeft:4}}>6</p>
                        <div style={{display:showInput,width:"100%",float:"left"}}>
                            <input onKeyDown={(e)=>handleInput(e)} style={{backgroundColor:'#fff',width:"80%",height:30}} placeholder='说点什么吧'></input>
                            <button onClick={(e)=>showvalueCon(e)} style={{border:0,backgroundColor:'#1296db',color:"#fff",height:30,width:"10%"}}>发送</button>
                        </div>
                        <ul style={{float:'left',width:"100%"}}>
                            {
                                valueCon.map((valueCon,i)=>(
                                <li style={{listStyle:"none"}} key={i}>{name}：{valueCon}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
    
            </div>
        )
    }
    export default  withRouter(Community);


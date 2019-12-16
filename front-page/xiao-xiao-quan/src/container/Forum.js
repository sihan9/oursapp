import React, {useState,useEffect } from 'react'
import ret from '../image/set/返回.png';
import {Link} from 'react-router-dom';
import "./css/style.css";
const requireContext = require.context('../image/Community', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
var {chapterList} = require('./Data');
export default function Forum (){
    let [chapterList1,setchapterList1] = useState(chapterList);
    let [img,setimg]=useState(chapterList[0].isgood?images[1]:images[3]);
    let [data,setdata] = useState([]);
    let [comment1,setcomment1] = useState(chapterList[0].good);
    let [comment,setcomment] = useState(chapterList[0].comment);
    let [showInput,setshowInput] = useState("none");
    let [valueCon,setvalueCon]=useState(chapterList[0].talk);
    useEffect(() => {
        fetch('http://101.37.172.74:8080/user/massage',{
        })
        .then(res =>res.json())
        .then((res)=>{
            setdata(res.content[0]);
        })
      },[]);
   
   
    let deleteForum=(idx)=>{
        chapterList.splice(idx,1);
        setchapterList1(chapterList);
    }
    let changeImg=(value)=>{
        setcomment1(value.good);
        if(chapterList[0].isgood==false){
            setimg(images[1]);
            setcomment1(comment1+1);
            chapterList[0].good +=1;
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
        setshowInput('block');
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

   
    return (
        <div style={{width:'100%'}}>
                <div style={{position:'relative'}}>
                    <img style={{width:'100%',height:'160px'}} src='https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3593643456,2253978744&fm=26&gp=0.jpg'/>
                    <Link to='/home/my'>                 
                      <img src={ret} style={{width:"26px",height:"26px",position:'absolute',top:2,left:2}}/>
                    </Link>
                  
                </div>
                {
                (chapterList||[]).map((item,idx)=>(
                    <div key={idx} style={{height:'auto',width:'100%',marginTop:4}}>
                        <div className = "navbar">
                        <img className='img' src = {`http://101.37.172.74:8080/images/img?name=${data.img}`}/>
                        <div className='follow'>
                            <p className='username'>{data.name}</p>
                            <p style={{width:'40%', marginLeft:15,fontSize:12,float:'left',color:'#333',marginTop:'6px'}}>{data.school}</p>
                            {/* 删除帖子 */}
                            <img onClick={()=>deleteForum(idx)} style={{width:'20px',height:'20px',float:'right',marginRight:'20px'}} src='https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3265765378,1116569126&fm=26&gp=0.jpg'/>
                            {/* <img style={{width:'20px',height:'20px',float:'right',marginRight:'20px'}} src='https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3265765378,1116569126&fm=26&gp=0.jpg'/> */}
                        </div>

                         <p className="comment">{item.title}</p>
                        <img className="commentImg" src={item.commentImg}   />
                        <div style={{float:"left",width:"100%",paddingTop:10,paddingLeft:10}}>
                            <img onClick={()=>{changeImg(item)}} style={{width:22,float:"left",marginLeft:'70%'}} src={img}/>
                           {/* 点赞 */}
                            <p style={{float:"left",marginTop:3,marginLeft:7}}>{comment1}</p>
                            <img src={images[2]} onClick={handleClick} style={{float:"left",width:22,marginTop:3,marginLeft:5}}/>
                            <p style={{float:"left",marginTop:3,marginLeft:4}}>{comment}</p>
                            <div style={{display:showInput,width:"100%",float:"left"}}>
                                <input onKeyDown={(e)=>handleInput(e)} style={{backgroundColor:'#fff',width:"80%",height:30,borderStyle:'none'}} placeholder='说点什么吧'></input>
                            </div>
                            <ul style={{float:'left',width:"100%"}}>
                                {
                                    (valueCon||[]).map((con,i)=>(
                                        <li style={{listStyle:"none"}} key={i}>{item.name}：{con}</li>
                                    ))
                                }
                            </ul>
                        {/* 评论 */}
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
    
}

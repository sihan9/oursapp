import React, { Component } from 'react'
import {NavBar,SearchBar,List } from 'antd-mobile';
import {Link} from 'react-router-dom';
const Item = List.Item;
let he=window.innerHeight;
export default class info extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){

    }
    data=[
        {
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
        title:'南栀',
        content:'你好',
        time:'19-11-26',
        unSee:3

        },
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
            title:'sunshine',
            content:'你好',
            time:'19-11-26',
            unSee:3
        },
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
            title:'南栀',
            content:'你好',
            time:'19-11-26',
            unSee:6
        
        },
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
            title:'南栀',
            content:'你好aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            time:'19-11-26',
            unSee:3
            
        },       

]
onClick=()=>{
    console.log(window.location.href)
    window.location.href='http://101.37.172.74:3005/'
}
    render() {
        let chatList;
        
        if(this.state.data.length!==0){
        
            chatList=(
                <List className="my-list">
                {
                this.data.map((item,idx)=>(
                    <Link onClick={this.onClick} key={idx}>
                    <Item >
                        <img src={item.img} style={{float:"left",width:"14%",height:50}}/>
                        <div style={{float:"left",width:"80%",height:'50px',marginLeft:"10px"}}>
                            <div style={{width:"100%",height:"50%"}}>
                                <p style={{fontSize:"18px",fontWeight:"bold",margin:0,float:"left",width:'70%'}}>{item.title}</p>
                                <p style={{color:'grey',float:'right',margin:0}}>{item.time}</p>
                            </div>
                            <div style={{width:"100%",height:'50%'}}>     
                                <p style={{ color:'grey',fontSize:'14px',margin:0,float:'left',width:'80%',textOverflow: "ellipsis",overflow: "hidden"}}>{item.content}</p> 
                            </div>
                        </div>
                    </Item>
                    </Link>
               

                ))
                
                }
            </List>
            )
        }
        else{
            chatList=(
                <div style={{textAlign:'center',height:he,backgroundColor:'#fff'}}>
                    <img style={{height:'100px',width:'100px',marginTop:'40%'}} src='https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1552531235,256739759&fm=26&gp=0.jpg'/>
                    <p style={{textAlign:'center',color:'#ccc',marginTop:'10px'}}>暂时没有新消息</p>
                </div>
            )
        }
        return (
            <div style={{width:"100%"}}>
                <NavBar
                   style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
                  >
                   消息 
                   
               </NavBar>
               <div style={{width:"100%", margin:'0 auto',marginBottom:'6px'}}>
                    <SearchBar
                        placeholder="搜索"
                        style={{margin:"0 auto",backgroundColor:"#fff",width:"90%",borderRadius:80,height:'30px',marginTop:6}}
                        
                    />
                </div>
                <div style={{width:"100%"}}>
                    {chatList}
                </div>
            </div>
        )
    }
}

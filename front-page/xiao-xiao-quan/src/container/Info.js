import React, { Component } from 'react'
import {NavBar,SearchBar,List } from 'antd-mobile';
import {withRouter,Link} from 'react-router-dom';
import Friend from './Friend'
const Item = List.Item;
const Brief = Item.Brief;
class Info extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://101.37.172.74:8080/user/friend')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.content
            })
        })
    }
onClick=()=>{
    this.props.history.push('/mychat')
}
    render() {
        let chatList;
        
        if(this.state.data.length!==0){
        
            chatList=(
                <List className="my-list">
                
                </List>
            )
        }
        else{
            chatList=(
                <div style={{textAlign:'center',height:100,backgroundColor:'#fff'}}>
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
                    {
                        this.state.data.map((item,idx)=>(
                            <List className="my-list">
                                <Item
                                key={idx}
                                arrow="horizontal"
                                thumb={`http://101.37.172.74:8015/images/img?name=${item.img}`}
                                multipleLine
                                onClick={() => {this.props.history.push(`/home/mychat/${idx}`)}}
                                >
                                {item.name} <Brief>hello</Brief>
                                </Item>
                            </List> 
    
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(Info);

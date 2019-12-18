import React, { Component } from 'react'
import {Link,withRouter } from 'react-router-dom'
import { NavBar, Icon,Popover } from 'antd-mobile';
import { SearchBar, List } from 'antd-mobile';
let he=window.innerHeight;
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
        var str = JSON.parse(localStorage.getItem('data'))[0].friend;
        if(str != null){
            let friends = JSON.parse(localStorage.getItem('data'))[0].friend.split(',');
            if(friends.length !== 0){
                for(var i=0; i<friends.length; i++){
                    for(var j=i+1; j<friends.length; j++){
                        if(friends[i]==friends[j]){
                            friends.splice(j,1);
                            j--;
                        }
                    }
                }
                for(var i=0;i<friends.length-1;i++){
                    fetch(`http://101.37.172.74:8015/test/friend?phone=${friends[i]}`)
                    .then((res)=>res.json())
                    .then((res)=>{
                        var data=this.state.data    
                        if(res.content[0]!=undefined){
                            data.push(res.content[0])
                            this.setState({
                                data:data
                        })
                    }
                    })   
                }
            }
        }
    }
    Submit=(value)=>{
        for(var i = 0 ; i < this.state.data.length ; i++){
            if(this.state.data[i].title.indexOf(value)!=-1){
                this.state.props.history.push('/friend/'+`${i}`);
            }
        }
    }
    onSelect=()=>{
        this.props.history.push('/addfriend');
    }
    render() {
        let friendList;
        if(this.state.data.length!=0){
            friendList=(
                <List >
                {
                    this.state.data.map((item,idx)=>(
                        
                            <List.Item
                                key={idx}
                                arrow="horizontal"
                                thumb={`http://101.37.172.74:8015/images/img?name=${item.img}`}
                                multipleLine
                                onClick={() => {this.props.history.push(`/home/mychat/${item.phone}`)}}
                                >
                                {item.name} <Brief>hello</Brief>
                            </List.Item>

                    ))
                    
                }
            </List>
            )
       
        
        }
        else{
            friendList=(
                <div style={{height:he,backgroundColor:'#fff',paddingTop:'20%'}}>
                    <p style={{width:'100%',height:'auto',color:'#ccc',textAlign:'center'}}>您还没有好友,点击+号添加好友吧</p>
                </div>
            );
        }
        return (
            <div>
                <NavBar
                    // mode="light"
                    style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
                    >消息
                </NavBar>
                <SearchBar
                    placeholder="搜索"
                    onSubmit={this.Submit}
                />
                <div style={{ marginBottom: 10 }}>   
                           {friendList}
                </div>
            </div>
        )
    }
}
export default withRouter(Info);

import React, { Component } from 'react'
import {NavBar } from 'antd-mobile';
import {Link,withRouter} from 'react-router-dom';
import ret from '../image/set/返回.png';
import Chat  from 'chat-react';
let params;
 class MyChat extends Component {
  constructor(){
    super();
    this.state={
        data:[],
        data1:[],
        inputValue: '',
        messages: [],
        timestamp: new Date().getTime()

    }
}
componentDidMount(){
  params=this.props.match.params.idx;
  fetch('http://101.37.172.74:8080/user/massage')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data1:res.content
            })
            console.log(res.content)
        })
  fetch('http://101.37.172.74:8080/user/friend',{
  })
  .then(res =>res.json())
  .then((res)=>{
      this.setState({data:res.content[params]});
      this.setState({messages:[{
              timestamp: 1545925494422,
              userInfo: {
                  avatar: `http://101.37.172.74:8080/images/img?name=${res.content[params].img}`,
                  userId: `${res.content[params].phone}`
              },
              value: "hello~"
          }]})
  })
}
 
    
    
      setInputfoucs = () => {
        this.chat.refs.input.inputFocus();  //色t input foucus
      }
      setScrollTop = () => {
        this.chat.refs.message.setScrollTop(1200);  //色t scrollTop position
      }
      sendMessage = (v) => {
        const {value} = v;
        if (!value) return;
        const {messages = []} = this.state;
        messages.push(v);
        this.setState({messages, timestamp: new Date().getTime(), inputValue: ''});
      
    }
     
    render() {
      const userInfo = {
        avatar:  `http://101.37.172.74:8015/images/img?name=${this.state.data.img}`,
        userId: `${this.state.data}`, //user id,  required parameters
        name: `${this.state.data.name}`
       }
        const {inputValue, messages, timestamp} = this.state;
       

        return (
            <div style={{width:'100%',height:'100%'}}>
                 <NavBar
                   style={{backgroundColor:'#1296db',color:'#fff',width:"100%"}} 
                   /**
                    * 点击返回消息列表
                    */
                   leftContent={
                    <Link to='/home'>
                   <img src={ret} style={{width:"24%",height:"60%"}}/>
                 </Link>}
                  >
                  {userInfo.name}
                   
               </NavBar>
                
                <Chat
                    ref={el => this.chat = el}
                    className="my-chat-box"
                    dataSource={messages}
                    userInfo={userInfo}
                    value={inputValue}
                    sendMessage={this.sendMessage}
                    timestamp={timestamp}
                    avatarClick={(value)=>{}}
                    placeholder="请输入"
                    messageListStyle={{width: '100%', height: window.outerHeight}}
                />
               
                </div>
          
        )
    }
}
export default withRouter(MyChat);


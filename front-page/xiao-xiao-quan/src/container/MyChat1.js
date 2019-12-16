import React, { Component } from 'react'
import {NavBar } from 'antd-mobile';
import {Link} from 'react-router-dom';
import ret from '../image/set/返回.png';
import Chat  from 'chat-react';
export default class MyChat extends Component {
  constructor(){
    super();
    this.state={
        data:[],
        inputValue: '',
        messages: [],
        timestamp: new Date().getTime()

    }
}
componentDidMount(){
  fetch('http://101.37.172.74:8080/user/massage',{
  })
  .then(res =>res.json())
  .then((res)=>{
      this.setState({data:res.content[0]});
      this.setState({messages:[{
              timestamp: 1545925494422,
              userInfo: {
                  avatar: `http://101.37.172.74:8080/images/img?name=${this.state.data.img}`,
                  name: "游客1544365758856",
                  userId: `${this.state.data.phone}`
              },
              value: "hello~"
          }]})
  })
}
    userInfo = {
        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg', //user avatar,  required parameters
        userId: '13607047258', //user id,  required parameters
        name: 'rigcky',
        other: 'otherInfo'
       }
 
    
    
      setInputfoucs = () => {
        this.chat.refs.input.inputFocus();  //色t input foucus
      }
      setScrollTop = () => {
        this.chat.refs.message.setScrollTop(1200);  //色t scrollTop position
      }
      sendMessage = (v) => {
      console.log(this.state.messages)
        const {value} = v;
        if (!value) return;
        const {messages = []} = this.state;
        messages.push(v);
        this.setState({messages, timestamp: new Date().getTime(), inputValue: ''});
      
    }
     
    render() {
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
                  {this.userInfo.name}
                   
               </NavBar>
                
                <Chat
                    ref={el => this.chat = el}
                    className="my-chat-box"
                    dataSource={messages}
                    userInfo={this.userInfo}
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

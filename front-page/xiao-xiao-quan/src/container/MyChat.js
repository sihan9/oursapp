import React, { Component } from 'react'
import {NavBar,SearchBar,List } from 'antd-mobile';
import {Link} from 'react-router-dom';
import ret from '../image/set/返回.png';
import Chat  from 'chat-react';
export default class MyChat extends Component {
    userInfo = {
        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg', //user avatar,  required parameters
        userId: '5bf7cf25a069a537ffe7c324', //user id,  required parameters
        name: 'rigcky',
        other: 'otherInfo'
       }
 
    
    state = {
        inputValue: '',
        messages: [{
          timestamp: 1545925494422,
          userInfo: {
              avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg",
              name: "游客1544365758856",
              userId: "1544365758856"
          },
          value: "hello~"
      },  {
          timestamp: 1545925534218,
          userInfo: {
              avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg",
              name: "游客1544365758856",
              userId: "1544365758856"
          },
          value: "啊啊啊啊啊啊奥所所撒奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥",
           error: true //设置消息状态为失败，显示错误状态图标
      }],
        timestamp: new Date().getTime()
      }
      setInputfoucs = () => {
        this.chat.refs.input.inputFocus();  //set input foucus
      }
      setScrollTop = () => {
        this.chat.refs.message.setScrollTop(1200);  //set scrollTop position
      }
      sendMessage = (v) => {
      
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

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
        inputValue: '',
        messages: [{
          timestamp: 1545925494422,
          userInfo: {
              avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg",
              name: "游客1544365758856",
              userId: "1544365758856"
          },
          value: "hello~"
      }]
    }
}
componentWillMount(){
  params = this.props.match.params.idx;
  fetch(`http://101.37.172.74:8015/test/friend?phone=${params}`)
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
        const {inputValue, messages, timestamp} = this.state;
        const userInfo = {
            avatar: `http://101.37.172.74:8015/images/img?name=${JSON.parse(localStorage.getItem('data'))[0].img}`,
            userId: '5bf7cf25a069a537ffe7c324',
            name: `${this.state.data[0]&&this.state.data[0].name}`,
            other: 'otherInfo'
           }

        return (
            <div style={{width:'100%',height:'100%'}}>
                 <NavBar
                   style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
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
                    avatarClick={()=>{this.props.history.push(`/friend/${params}`)}}
                    placeholder="请输入"
                    messageListStyle={{width: '100%', height: window.outerHeight}}
                />
               
                </div>
          
        )
    }
}
export default withRouter(MyChat)
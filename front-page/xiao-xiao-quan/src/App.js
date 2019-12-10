import React from 'react';
import { TabBar } from 'antd-mobile';
import {withRouter} from "react-router-dom";
import Info from './container/Info';
import Friend from './container/Friend';
import My from './container/My';
import Community from './container/Community';
const requireContext = require.context('./image/tab', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext)
class App extends React.Component {
  
  
  render() {
    return (

        <div style={{ 
            position: 'fixed', 
            height: '100%', 
            width: '100%', 
            top: 0 
        }}>
           
            <TabBar
            unselectedTintColor="#000"
            tintColor="#f7cb3c"
            barTintColor="#fff"
           
            >
            
            <TabBar.Item
                 icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${images[5]}) center center /  21px 21px no-repeat` }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${images[4]}) center center /  21px 21px no-repeat`}}
                  />
                }
                badge={1}
                title="消息"
                key="info"
                
                
                selected={
                 
                  this.props.location.pathname==='/home'||
                  this.props.location.pathname==='/home/info'
                }
                onPress={() => {
                
                   this.props.history.push('/home/info')
                }}
               
            >
         <Info/>
          </TabBar.Item>
        
         
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background:  `url(${images[2]}) center center /  21px 21px no-repeat `}}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background:  `url(${images[3]}) center center /  21px 21px no-repeat`}}
              />
            }
            title="朋友"
            key="friend"
            selected={
             
              this.props.location.pathname === '/home/friend'}
            onPress={() => {
            
              this.props.history.push('/home/friend')
            }}
          >
           <Friend/>
          </TabBar.Item>
          
        
          <TabBar.Item
             title="社区"
             key="home"
             icon={<div style={{
             width: '22px',
             height: '22px',
             background: `url(${images[6]}) center center /  21px 21px no-repeat` }}
             />
             }
             selectedIcon={<div style={{
             width: '22px',
             height: '22px',
             background: `url(${images[7]}) center center /  21px 21px no-repeat `}}
             />
             
             }
             
          
            selected={
           
            this.props.location.pathname==='/home/community'
          
          }
            onPress={() => {
             
              this.props.history.push('/home/community')
            }}
          >
           <Community/>
          </TabBar.Item>
        
         
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[0]}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[1]}) center center /  21px 21px no-repeat`}}
              />
            }
            title="我的"
            key="my"
            selected={
             
               this.props.location.pathname==='/home/my'}
            onPress={() => {
            
              this.props.history.push('/home/my')
             
            }}
          >
         
          <My/>
          </TabBar.Item>
       
        </TabBar>
      </div>
    );
  }
}
export default withRouter(App);
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
            tintColor="#1296db"
            barTintColor="#fff"
           
            >
            
            <TabBar.Item
                title="社区"
                key="home"
                icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[0]}) center center /  21px 21px no-repeat` }}
                />
                }
                selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[1]}) center center /  21px 21px no-repeat `}}
                />
                
                }
                
                selected={
                 
                  this.props.location.pathname==='/'||
                  this.props.location.pathname==='/community'
                }
                onPress={() => {
                
                   this.props.history.push('/community')
                }}
               
            >
          <Community/>
          </TabBar.Item>
        
         
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background:  `url(${images[4]}) center center /  21px 21px no-repeat `}}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background:  `url(${images[5]}) center center /  21px 21px no-repeat`}}
              />
            }
            title="朋友"
            key="friend"
            selected={
             
              this.props.location.pathname === '/friend'}
            onPress={() => {
            
              this.props.history.push('/friend')
            }}
          >
           <Friend/>
          </TabBar.Item>
          
        
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[6]}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[7]}) center center /  21px 21px no-repeat`}}
              />
            }
            title="消息"
            key="info"
          
            selected={
           
            this.props.location.pathname==='/info'
          
          }
            onPress={() => {
             
              this.props.history.push('/info')
            }}
          >
          <Info/>
          </TabBar.Item>
        
         
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[3]}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${images[2]}) center center /  21px 21px no-repeat`}}
              />
            }
            title="我的"
            key="my"
            selected={
             
               this.props.location.pathname==='/my'}
            onPress={() => {
            
              this.props.history.push('/my')
             
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
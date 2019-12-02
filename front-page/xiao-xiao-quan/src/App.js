import React from 'react';
import { TabBar } from 'antd-mobile';
import Info from './container/Info';
import Friend from './container/Friend';
import My from './container/My';

const requireContext = require.context('./image/tab', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext)
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      
    };
  }
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
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                      
                    });
                    window.location='http://localhost:3000/#/home'
                }}
            >
            社区
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
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab'
               
              });
              window.location='http://localhost:3000/#/friend'
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
          
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
              window.location='http://localhost:3000/#/info'
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
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab'
               
              });
              window.location='http://localhost:3000/#/my'
            }}
          >
         
          <My/>
          </TabBar.Item>
       
        </TabBar>
      </div>
    );
  }
}

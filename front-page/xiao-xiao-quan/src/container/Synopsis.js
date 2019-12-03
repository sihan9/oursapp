import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const requireContext = require.context('../image/Synopsis', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
export default class Synopsis extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    leftContent={[
                        <Link style={{color:"#1296db"}} to='/friend'>
                            <Icon type="left" />
                        </Link>
                    ]}
                    >好友
                </NavBar>
                <Item
                    arrow="horizontal"
                    thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg"
                    multipleLine
                    onClick={() => {}}
                    >
                    安好 <Brief>描述副标题</Brief>
                </Item>
                <div style={{borderTop:"1px solid #aaa",borderBottom:"1px solid #aaa"}}>
                    <div style={{borderBottom:"0.5px solid #aaa",height:30,marginLeft:10,marginTop:13}}>
                        <p>设置备注</p>
                    </div>
                    <div style={{borderBottom:"0.5px solid #aaa",height:30,marginLeft:10,marginTop:13}}>
                        <p style={{float:"left"}}>帖子</p>
                        <img style={{width:20,height:20,marginLeft:10}} src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg"></img>
                    </div>
                    <div style={{height:30,marginLeft:10,marginTop:13}}>
                        <p>更多</p>
                    </div>
                </div>
                <div style={{float:"left",width:"100%",height:40,borderTop:"1px solid #aaa",borderBottom:"1px solid #aaa",marginTop:20}}>
                    
                    <img style={{width:30,height:30,float:"left",marginTop:5,marginLeft:"30%"}} src={images[0]}></img>
                    <p style={{float:"left",marginTop:10,marginLeft:10}}>发消息</p>
                </div>
                <div style={{float:"left",width:"100%",height:40,borderBottom:"1px solid #aaa"}}>
                    
                    <img style={{width:30,height:30,float:"left",marginTop:5,marginLeft:"30%"}} src={images[1]}></img>
                    <p style={{float:"left",marginTop:10,marginLeft:10}}>音视频通话</p>
                </div>
                

            </div>
        )
    }
}

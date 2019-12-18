import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {Link,useHistory} from 'react-router-dom';
const requireContext = require.context('../image/Collect', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
export default function Collect() {
        let history = useHistory();
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.push('/home/my')}
                    rightContent={
                        [
                        <Link key='1' to='/my/set'> 
                        </Link>
                    ]}
                    >我的收藏
                </NavBar>
                <div style={{textAlign:"center"}}>
                    <img style={{width:100,paddingTop:100}} src={images[0]}></img>
                    <p >没有任何收藏</p>
                </div>
            </div>
        )
}

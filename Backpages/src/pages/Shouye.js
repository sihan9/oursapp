import React, { Component } from 'react'

export default class Shouye extends Component {
    render() {
        return (
            <div className='shouye-1'>
                <div className='box-3' style={{marginBottom:'40px'}}>
                    <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E6%90%9C%E7%B4%A2.png?raw=true'/>
                    <input type='search' placeholder='请查询要查询的用户ID或用户名' onKeyDown={(e)=>this.search(e)}></input>
                </div>
                <div className='shouye-1-2'>
                    今日累计注册量30000
                </div>
                <div className='shouye-1-2' style={{marginLeft:'80px'}}>
                    今日访问量20000
                </div>
                <div style={{width:'550px',height:'215px',backgroundColor:'green',float:'left'}}>
                    图片
                </div>
                <div style={{width:'550px',height:'215px',backgroundColor:'yellow',float:'left'}}>
                    图片
                </div>
                <div className='shouye-1-2' style={{marginLeft:'80px'}}>
                    注册量20000
                </div>
            </div>
        )
    }
}

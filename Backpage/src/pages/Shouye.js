import React, { Component } from 'react'

export default class Shouye extends Component {
    render() {
        return (
            <div className='shouye-1'>
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

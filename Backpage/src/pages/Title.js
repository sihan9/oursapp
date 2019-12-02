import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://101.37.172.74:8080/title')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.content
                })
        })
        
    }
    componentDidUpdate(){

        fetch('http://101.37.172.74:8080/title')
            .then((res)=>res.json())
            .then((res)=>{
                    this.setState({data:res.content});
                })
}



    render() {
        return (
            <div>
                <p className='title-1'>帖子管理</p>
                <div className='title-2'>
                    <input type='checkbox'/>
                    <p style={{paddingLeft:'50px'}}>用户ID</p>
                    <p style={{paddingLeft:'63px'}}>标题</p>
                    <p style={{paddingLeft:'225px'}}>内容</p>
                    <p style={{paddingLeft:'265px'}}>时间</p>
                    <p style={{paddingLeft:'90px'}}>操作</p>
                </div>
                {
                    this.state.data.map((item,idx)=>{
                        return(
                            <div className='title-3' key={idx}>
                                <input type='checkbox'/>
                                <p>{item.id}</p>
                                <p>{item.title}</p>
                                <p style={{width:'375px'}}>{item.content}</p>
                                <p>{item.time}</p>
                                <p>操作</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


import React, { Component } from 'react'

export default class Title extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://101.37.172.74:3000/title')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.content
                })
        })
        
    }
    componentDidUpdate(){

        fetch('http://101.37.172.74:3000/title')
            .then((res)=>res.json())
            .then((res)=>{
                    this.setState({data:res.content});
                })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    delete=(idx)=>{
        console.log(idx)
        fetch('http://101.37.172.74:3000/title/delete?id='+idx.id)
            .then(res=>res.json())
            .then((res)=>{
                console.log('ok')
            })
    }


    render() {
        return (
            <div>
                <div className='box-3'>
                    <img src='https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E6%90%9C%E7%B4%A2.png?raw=true'/>
                    <input type='search' placeholder='请查询要查询的用户ID或用户名' onKeyDown={(e)=>this.search(e)}></input>
                </div>
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
                                <button onClick={()=>this.delete(item)}>删除</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


import React, { Component } from 'react'

export default class Title extends Component {
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
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    delete=(idx)=>{
        console.log(idx)
        fetch('http://101.37.172.74:8080/title/delete?phone='+idx.phone)
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
                    <p>用户ID</p>
                    <p style={{paddingLeft:'110px'}}>标题</p>
                    <p style={{paddingLeft:'220px'}}>内容</p>
                    <p style={{paddingLeft:'200px'}}>时间</p>
                    <p style={{paddingLeft:'90px'}}>操作</p>
                </div>
                {
                    this.state.data.map((item,idx)=>{
                        return(
                            <div className='title-3' key={idx}>
                                <input type='checkbox'/>
                                <p style={{width:'100px'}}>{item.phone}</p>
                                <p style={{width:'135px'}}>{item.title}</p>
                                <p style={{width:'330px'}}>{item.content}</p>
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


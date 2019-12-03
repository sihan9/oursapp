import React, { Component } from 'react'

export default class FeedBack extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://101.37.172.74:8080/FeedBack')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.content
                })
        })
        
    }
    componentDidUpdate(){

        fetch('http://101.37.172.74:8080/FeedBack')
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
        fetch('http://101.37.172.74:3000/feedback/delete?id='+idx.id)
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
                <p className='feekback-1'>反馈列表</p>
                <div className='feekback-2'>
                    <input type='checkbox'/>
                    <p style={{paddingLeft:'50px'}}>用户ID</p>
                    <p style={{paddingLeft:'45px'}}>反馈类型</p>
                    <p style={{paddingLeft:'130px'}}>详细信息</p>
                    <p style={{paddingLeft:'150px'}}>手机号</p>
                    <p style={{paddingLeft:'90px'}}>邮箱</p>
                    <p style={{paddingLeft:'90px'}}>操作</p>
                </div>
                {
                    this.state.data.map((item,idx)=>{
                        return(
                            <div className='feekback-3' key={idx}>
                                <input type='checkbox'/>
                                <p>{item.id}</p>
                                <p>{item.type}</p>
                                <p style={{width:'235px'}}>{item.content}</p>
                                <p>{item.phone}</p>
                                <p>{item.email}</p>
                                <button onClick={()=>this.delete(item)}>删除</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

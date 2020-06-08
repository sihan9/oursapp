import React, { Component } from 'react'

export default class Title extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8015/feedback/')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.content
                })
        })
        
    }
    componentDidUpdate(){

        fetch('http://129.211.62.80:8015/feedback/')
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
        fetch('http://129.211.62.80:8015/feedback/delete?content='+idx.content)
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
                <p className='title-1'>反馈管理</p>
                <div className='title-2'>
                    <input type='checkbox'/>
                    <p style={{paddingLeft:'65px'}}>用户账号</p>
                    <p style={{paddingLeft:'120px'}}>反馈内容</p>
                    <p style={{paddingLeft:'220px'}}>邮箱</p>
                    <p style={{paddingLeft:'90px'}}>操作</p>
                </div>
                {
                    this.state.data.map((item,idx)=>{
                        return(
                            <div className='title-3' key={idx}>
                                <input type='checkbox'/>
                                <p style={{width:'110px'}}>{item.account}</p>
                                <p style={{width:'135px'}}>{item.content}</p>
                                <p style={{width:'330px'}}>{item.email}</p>
                                <p>{item.province}</p>
                                <button onClick={()=>this.delete(item)}>删除</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


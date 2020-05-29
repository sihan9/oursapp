import React, { Component } from 'react'

export default class Title extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://129.211.62.80:8015/school/list')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.content
                })
        })
        
    }
    componentDidUpdate(){

        fetch('http://129.211.62.80:8015/school/list')
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
        fetch('http://129.211.62.80:8015/title/delete?phone='+idx.phone)
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
                <p className='title-1'>学校管理</p>
                <div className='title-2'>
                    <input type='checkbox'/>
                    <p style={{paddingLeft:'65px'}}>名称</p>
                    <p style={{paddingLeft:'120px'}}>属性</p>
                    <p style={{paddingLeft:'220px'}}>建校时间</p>
                    <p style={{paddingLeft:'142px'}}>位置</p>
                    <p style={{paddingLeft:'90px'}}>操作</p>
                </div>
                {
                    this.state.data.map((item,idx)=>{
                        return(
                            <div className='title-3' key={idx}>
                                <input type='checkbox'/>
                                <p style={{width:'110px'}}>{item.cname}</p>
                                <p style={{width:'135px'}}>{item.attribute}</p>
                                <p style={{width:'330px'}}>{item.time}</p>
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


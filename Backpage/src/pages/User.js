import React, { Component } from 'react'
export default class User extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://101.37.172.74:3000/user')
        .then((res)=>res.json())
        .then((res)=>{
                this.setState({
                    data:res.content
                })
        })
        
    }
    componentDidUpdate(){

        fetch('http://101.37.172.74:3000/user')
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
    // search=(e)=>{
    //     // var data =[];
    //     var arr=[]
    //     if(e.target.value != null){
    //         for(var i=0;i<this.state.data.length;i++){
    //             if(e.target.value === this.state.data[i].id || e.target.value === this.state.data[i].name){
    //                 var data = this.state.data[i]
    //                 for(let i in data){
    //                     arr.push(data[i])
    //                 }
    //                 break;
    //             }
    //         }
    //         this.setState({
    //             data:arr
    //         })
    //     }
    // }

    delete=(idx)=>{
        console.log(idx)
        fetch('http://101.37.172.74:3000/user/delete?id='+idx.id)
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
                    <input type='search' placeholder='请查询要查询的用户ID或用户名'></input>
                </div>
                <p className='user-1'>用户列表</p>
                <div className='user-2'>
                    <input type='checkbox'/>
                    <p style={{paddingLeft:'50px'}}>用户ID</p>
                    <p style={{paddingLeft:'55px'}}>用户名</p>
                    <p style={{paddingLeft:'51px'}}>性别</p>
                    <p style={{paddingLeft:'110px'}}>学校</p>
                    <p style={{paddingLeft:'170px'}}>手机号</p>
                    <p style={{paddingLeft:'90px'}}>操作</p>
                </div>
                {
                    this.state.data.map((item,idx)=>{
                        return(
                            <div className='user-3' key={idx}>
                                <input type='checkbox'/>
                                <p>{item.id}</p>
                                <p style={{width:'60px'}}>{item.name}</p>
                                <p>{item.sex}</p>
                                <p style={{width:'160px'}}>{item.school}</p>
                                <p style={{width:'150px'}}>{item.phone}</p>
                                <button onClick={()=>this.delete(item)}>删除</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

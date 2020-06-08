import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state={
            cname:'',
            ename:'',
            province:'',
            abbre:'',
            time:'',
            anniversary:'',
            attribute:'',
            type:'',
            tmajor:'',
            bspot:'',
            smotto:'',
            img:'',
            video:'',
            badge:''
        }
    }
   
    changeCname=(e)=>{
        this.setState({
            cname:e.target.value
        })
    }
    
    changeEname=(e)=>{
        this.setState({
            ename:e.target.value
        })
    }
    
    changeTime=(e)=>{
        this.setState({
            time:e.target.value
        })
    }
    
    changeProvince=(e)=>{
        this.setState({
            province:e.target.value
        })
    }
    
    changeAbbre=(e)=>{
        this.setState({
            abbre:e.target.value
        })
    }
    
    changeSmotto=(e)=>{
        this.setState({
            smotto:e.target.value
        })
    }
    
    changeAnniversary=(e)=>{
        this.setState({
            anniversary:e.target.value
        })
    }
    changeType=(e)=>{
        this.setState({
            type:e.target.value
        })
        
    }
    changeAttribute=(e)=>{
        this.setState({
            attribute:e.target.value
        })
        
    }
    changeTmajor=(e)=>{
        this.setState({
            tmajor:e.target.value
        })
        
    }
    changeBspot=(e)=>{
        this.setState({
            bspot:e.target.value
        })
        
    }
    changeImg=(e)=>{
        this.setState({
            img:e.target.value
        })
        
    }
    changeVideo=(e)=>{
        this.setState({
            video:e.target.value
        })
        
    }
    changeBadge=(e)=>{
        this.setState({
            badge:e.target.value
        })
        
    }
  
    onSubmit=(e)=>{
        // 阻止事件传递
       e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
     console.log(this.state);
        fetch('http://129.211.62.80:8015/manager/add',{
            // post提交
            method:"POST",
            body:JSON.stringify(this.state)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.content){
                this.props.history.push('/home/manager')
            }
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='add-1'>
                    <div><p>中文名称</p><input onChange={this.changeCname} type='text' name='cname'/></div>
                    <div><p>英文名称</p>< input onChange={this.changeEname} type='text' name='ename'/></div>    
                    <div><p>建校时间</p><input onChange={this.changeTime} type='text' name='time'/></div>
                    <div><p>位置</p><input onChange={this.changeProvince} type='text' name='province'/></div>
                    <div><p>简称</p><input onChange={this.changeAbbre} type='text' name='abbre'/></div>
                    <div><p>校训</p><input onChange={this.changeSmotto} type='text' name='smotto'/></div>
                    <div><p>校庆日</p><input onChange={this.changeAnniversary} type='text' name='anniversary'/></div>
                    <div><p>属性</p><input onChange={this.changeType} type='text' name='type'/></div>
                    <div><p>类型</p><input onChange={this.changeAttribute} type='text' name='attribute'/></div>
                    <div><p>王牌专业</p><input onChange={this.changeTmajor} type='text' name='tmajor'/></div>
                    <div><p>亮点</p><input onChange={this.changeBspot} type='text' name='bspot'/></div>
                    <div><p>图片</p><input onChange={this.changeImg} type='text' name='bspot'/></div>
                    <div><p>视频</p><input onChange={this.changeVideo} type='text' name='bspot'/></div>
                    <div><p>校徽</p><input onChange={this.changeBadge} type='text' name='bspot'/></div>
                    <input type='submit' value='添加' className='add-2' onClick={this.onClick} style={{marginLeft:'120px'}} />               
                </form>
                
            </div>
        )
    }
}

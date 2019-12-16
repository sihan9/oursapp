import React, { Component } from 'react'
import { NavBar, Icon,Popover } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const requireContext = require.context('../image/Synopsis', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
export default class Synopsis extends Component {
    constructor(){
        super();
        this.state = {
            visible: false,
            selected: '',
            phone:''
        };
    }
    componentDidMount(){
        fetch('')
        .then(res=>res.json)
        .then(res=>{
            this.setState({
                
            })
        })
    }
    onSelect = (opt) => {
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
          visible
        });
    };
    deleteFriend=()=>{
       
        fetch('http://101.37.172.74:8080/user/login',{
            // post提交
            method:"POST",
            
            body:JSON.stringify(this.state.phone)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.content){

                this.props.history.push('/my/friend')
            }
        })
    }
    render() {
        return (
            <div>
            <div style={{width:'100%',backgroundColor:"#fff",paddingTop:10}}>
                <NavBar
                    mode="light"
                    leftContent={
                        <Link style={{color:"#707070"}} to='/home/friend'>
                            <Icon type="left"/>
                        </Link>
                    }
                    rightContent={
                        <Popover mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                            (<Item key="4" value="scan"  data-seed="logId">设置备注和标签</Item>),
                            (<Item onClick={this.deleteFriend} key="5" value="special" style={{ whiteSpace: 'nowrap' }}>删除</Item>),
                            ]}
                            align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 15px',
                                marginRight: '-15px',
                                display: 'flex',
                                alignItems: 'center',
                                }}
                            >
                                <Icon type="ellipsis" style={{color:"#707070"}} />
                            </div>
                        </Popover>
                    }
                >
                </NavBar>
            </div>
                <Item style={{paddingBottom:20}}
                    arrow="horizontal"
                    thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg"
                    
                    >
                    聂丹 <Brief>昵称：博君一肖</Brief>
                </Item>
                <div style={{backgroundColor:"#fff",borderTop:"0.5px solid #cdcdcd"}}>
                    <div style={{borderBottom:"0.5px solid #cdcdcd",height:30,marginLeft:10,marginTop:13}}>
                        <p>设置备注和标签</p>
                    </div>
                    <div style={{borderBottom:"0.5px solid #cdcdcd",height:30,marginLeft:10,marginTop:13}}>
                        <p style={{float:"left"}}>帖子</p>
                        <img style={{width:20,height:20,marginLeft:10}} src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg"></img>
                    </div>
                    <div style={{height:30,marginLeft:10,marginTop:13}}>
                        <p>更多</p>
                    </div>
                </div>
                <div style={{backgroundColor:"#fff",float:"left",width:"100%",height:40,borderBottom:"0.5px solid #cdcdcd",marginTop:10}}>
                    
                    <img style={{width:30,height:30,float:"left",marginTop:5,marginLeft:"30%"}} src={images[0]}></img>
                    <p style={{float:"left",marginTop:10,marginLeft:10}}>发消息</p>
                </div>
                <div style={{backgroundColor:"#fff",float:"left",width:"100%",height:40}}>
                    
                    <img style={{width:30,height:30,float:"left",marginTop:5,marginLeft:"30%"}} src={images[1]}></img>
                    <p style={{float:"left",marginTop:10,marginLeft:10}}>音视频通话</p>
                </div>
                

            </div>
        )
    }
}

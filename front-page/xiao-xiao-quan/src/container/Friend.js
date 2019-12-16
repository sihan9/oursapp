import React, { Component } from 'react'
import {Link,withRouter } from 'react-router-dom'
import { NavBar, Icon,Popover } from 'antd-mobile';
import { SearchBar, List } from 'antd-mobile';
const requireContext = require.context('../image/friend', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const myImg1= <img src={`${images[5]}`} className="am-icon am-icon-xs" alt="" />;
let he=window.innerHeight;
class Friend extends Component {
    constructor(){
        super();
        this.state={
            data:this.data
        }
    }
    componentDidMount(){

        fetch('http://101.37.172.74:8080/user/friend')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.content);
            this.setState({
                data:res.content
            })
            console.log(this.state.data)
        })
        
    }
    // componentDidUpdate(){
    //     let num=this.state.data.length;
    //     fetch('http://101.37.172.74:8080/user/friend')
    //     .then(res =>res.json())
    //     .then(res=>{
    //         console.log(res);
    //         if(res.content!=num){
    //             // this.setState({data:res.content});
               
    //         }
    //     })
    // }
    data=[
        {
        img:'http://img2.imgtn.bdimg.com/it/u=2247785495,154890183&fm=11&gp=0.jpg',
        name:'南栀',
        school:'河北师范大学'
    
        },
        {
            img:'http://img0.imgtn.bdimg.com/it/u=4024120272,2855386786&fm=11&gp=0.jpg',
            name:'sunshine',
            school:'河北师范大学'
        },
        {
            img:'http://img4.imgtn.bdimg.com/it/u=1964968116,1485562288&fm=26&gp=0.jpg',
            name:'遍地梧桐花',
            school:'河北师范大学'
        
        },
        {
            img:'http://img4.imgtn.bdimg.com/it/u=346146653,1424425619&fm=11&gp=0.jpg',
            name:'长安',
            school:'河北师范大学'
        },       
    
    ]
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    Submit=(value)=>{
        for(var i = 0 ; i < this.data.length ; i++){
            if(this.data[i].title.indexOf(value)!=-1){
                this.props.history.push('/friend/'+`${i}`);
            }
        }
    }
    onSelect=()=>{
        console.log(this.props);
        this.props.history.push('/addfriend');
    }
    render() {
        let friendList;
        
        if(this.state.data.length!==0){
        
            friendList=(
                <List >
                {
                   
                    
                    this.state.data.map((item,idx)=>(
                        <Link to={`/friend/${idx}`} key={idx}>
                            <List.Item style={{height:'60px'}}>
                                <img style={{width:'40px',height:'40px',float:'left',marginTop:'4px'}} src={`http://101.37.172.74:8015/images/img?name=${item.img}`}/>
                                <div style={{float:'left',marginLeft:'14px'}}>
                                <p style={{margin:0,fontSize:'18px'}}>{item.name}</p>
                                <p style={{margin:0,fontSize:'12px',color:'#555',fontFamily:'cursive'}}>{item.school}</p>
                                </div>
                            </List.Item>
                        </Link>

                    ))
                    
                }
            </List>
            )
       
        
        }
        else{
            friendList=(
                <div style={{height:he,backgroundColor:'#fff',paddingTop:'20%'}}>
                    <p style={{width:'100%',height:'auto',color:'#ccc',textAlign:'center'}}>您还没有好友,点击+号添加好友吧</p>
                </div>
            );
        }
        return (
            <div>
                <NavBar
                    // mode="light"
                    style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
                    rightContent={[
                        <Popover mask
                            key = "1"
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                                
                                
                             
                                <Item key="5" value="special" icon={myImg1} onSelect={this.onSelect} style={{ whiteSpace: 'nowrap' }}>添加朋友</Item>
                             
                                ,
                                
                                <Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>
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
                                <Icon type="plus" />
                            </div>
                        </Popover>
                    ]}
                    >朋友
                </NavBar>
                <SearchBar
                    placeholder="搜索"
                    onSubmit={this.Submit}
                />
                <div style={{ marginBottom: 10 }}>   
                           {friendList}
                            {/* <List >
                                {
                                   
                                    
                                    this.state.data.map((item,idx)=>(
                                        <Link to={`/friend/${idx}`} key={idx}>
                                            <List.Item style={{height:'60px'}}>
                                                <img style={{width:'40px',height:'40px',float:'left',marginTop:'4px'}} src={item.img}/>
                                                <div style={{float:'left',marginLeft:'14px'}}>
                                                <p style={{margin:0,fontSize:'18px'}}>{item.name}</p>
                                                <p style={{margin:0,fontSize:'12px',color:'#555',fontFamily:'cursive'}}>{item.school}</p>
                                                </div>
                                            </List.Item>
                                        </Link>

                                    ))
                                    
                                }
                            </List> */}
                           
                    
                </div>
            </div>
        )
    }
}
export default withRouter(Friend);

import React, { Component } from 'react'
import {Link,withRouter } from 'react-router-dom'
import { NavBar, Icon,Popover,  } from 'antd-mobile';
import { SearchBar, List,Accordion  } from 'antd-mobile';
const requireContext = require.context('../image/friend', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const myImg1= <img src={`${images[5]}`} className="am-icon am-icon-xs" alt="" />;
class Friend extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){

        fetch('http://101.37.172.74:8015/test/friend')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
        //    this.setState({data:res.content});
        })
        // console.log(this.state.data)
    }
    // componentDidUpdate(){
    //     fetch('http://101.37.172.74:8015/test/friend')
    //     .then(res =>res.json())
    //     .then(res=>{
    //         console.log(res);
    //         this.setState({data:res.content});
    //         console.log(this.state.data)
    //     })
    // }
    data=[
        {
        img:'http://img2.imgtn.bdimg.com/it/u=2247785495,154890183&fm=11&gp=0.jpg',
        title:'南栀',
        school:'河北师范大学'
    
        },
        {
            img:'http://img0.imgtn.bdimg.com/it/u=4024120272,2855386786&fm=11&gp=0.jpg',
            title:'sunshine',
            school:'河北师范大学'
        },
        {
            img:'http://img4.imgtn.bdimg.com/it/u=1964968116,1485562288&fm=26&gp=0.jpg',
            title:'遍地梧桐花',
            school:'河北师范大学'
        
        },
        {
            img:'http://img4.imgtn.bdimg.com/it/u=346146653,1424425619&fm=11&gp=0.jpg',
            title:'长安',
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
        return (
            <div>
                <NavBar
                    // mode="light"
                    style={{backgroundColor:'#f7cb3c',color:'#fff',width:"100%"}} 
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
                   
                            <List >
                                {
                                    this.data.map((item,idx)=>(
                                        <Link to={`/friend/${idx}`} key={idx}>
                                            <List.Item style={{height:'60px'}}>
                                                <img style={{width:'40px',height:'40px',float:'left',marginTop:'4px'}} src={item.img}/>
                                                <div style={{float:'left',marginLeft:'14px'}}>
                                                <p style={{margin:0,fontSize:'18px'}}>{item.title}</p>
                                                <p style={{margin:0,fontSize:'12px',color:'#555',fontFamily:'cursive'}}>{item.school}</p>
                                                </div>
                                            </List.Item>
                                        </Link>

                                    ))
                                }
                            </List>
                      
                </div>
            </div>
        )
    }
}
export default withRouter(Friend);

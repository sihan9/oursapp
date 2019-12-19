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
            data:[]
        }
    }
    componentDidMount(){
        var str = JSON.parse(localStorage.getItem('data'))[0].friend;
        if(str != null){
            let friends = JSON.parse(localStorage.getItem('data'))[0].friend.split(',');
            if(friends.length !== 0){
                for(var i=0; i<friends.length; i++){
                    for(var j=i+1; j<friends.length; j++){
                        if(friends[i]==friends[j]){
                            friends.splice(j,1);
                            j--;
                        }
                    }
                }
                for(var i=0;i<friends.length-1;i++){
                    fetch(`http://101.37.172.74:8015/test/friend?phone=${friends[i]}`)
                    .then((res)=>res.json())
                    .then((res)=>{
                        var data=this.state.data    
                        if(res.content[0]!=undefined){
                            data.push(res.content[0])
                            this.setState({
                                data:data
                        })
                    }
                    })
                    
                }
            
            }
        }
        
    }
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
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
        for(var i = 0 ; i < this.state.data.length ; i++){
            if(this.state.data[i].title.indexOf(value)!=-1){
                this.state.props.history.push('/friend/'+`${i}`);
            }
        }
    }
    onSelect=()=>{
        this.props.history.push('/addfriend');
    }
    render() {
        let friendList;
        if(this.state.data.length!=0){
            friendList=(
                <List >
                {
                    this.state.data.map((item,idx)=>(
                        <Link to={`/friend/${item.phone}`} key={idx}>
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
                </div>
            </div>
        )
    }
}
export default withRouter(Friend);

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
    data=[
        {
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
        title:'南栀',
    
        },
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
            title:'sunshine',
        },
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
            title:'遍地梧桐花',
        
        },
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
            title:'长安',
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
                                (<Item key="5" value="special" icon={myImg1} style={{ whiteSpace: 'nowrap' }}>添加朋友</Item>),
                                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
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
                <div style={{ marginTop: 10, marginBottom: 10 }}>
                    <Accordion defaultActiveKey="0" onChange={this.onChange}>
                        <Accordion.Panel header="特别关心" style={{color:"#1296db"}}>
                            <List className="my-list">
                                {
                                    this.data.map((item,idx)=>(
                                        <Link to={`/friend/${idx}`} key={idx}>
                                            <List.Item>
                                                <img src={item.img}/>
                                                <span style={{paddingLeft:15}}>{item.title}</span>
                                            </List.Item>
                                        </Link>

                                    ))
                                }
                            </List>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        )
    }
}
export default withRouter(Friend);
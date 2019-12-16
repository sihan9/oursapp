import React, { Component } from 'react'
import {NavBar,SearchBar,List } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
const Item = List.Item;
class Info extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://101.37.172.74:8080/user/massage',{
        })
        .then(res =>res.json())
        .then((res)=>{
            this.setState({data:res.content[0]});
            console.log(res);
            
        })
    }
onClick=()=>{
    this.props.history.push('/mychat')
}
    render() {
        return (
            <div style={{width:"100%"}}>
                <NavBar
                   style={{backgroundColor:'#f7cb3c',color:'#fff',width:"100%"}} 
                  >
                   消息 
                   
               </NavBar>
               <div style={{width:"100%", margin:'0 auto',marginBottom:'6px'}}>
                    <SearchBar
                        placeholder="搜索"
                        style={{margin:"0 auto",backgroundColor:"#fff",width:"90%",borderRadius:80,height:'40px',marginTop:6}}
                        
                    />
                </div>
                <div style={{width:"100%"}}>
                <List className="my-list">
                    <Item  arrow="horizontal" onClick={() => {this.props.history.push('/mychat')}}>聂丹</Item>
                </List>
                </div>
            </div>
        )
    }
}
export default withRouter(Info);

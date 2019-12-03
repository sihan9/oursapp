import React, { Component } from 'react'
import {NavBar,SearchBar,List,Icon } from 'antd-mobile';
const Item = List.Item;
export default class info extends Component {
    data=[
        {
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
        title:'南栀',
       

        },
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg',
            title:'南栀',
          
            
        },  
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
            title:'sunshine',
          
        },
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg',
            title:'南栀',
          
            
        },  
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg',
            title:'南栀',
          
            
        },  
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg',
            title:'南栀',
          
            
        },  
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg',
            title:'南栀',
          
            
        },  
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1571749637,3191380272&fm=111&gp=0.jpg',
            title:'南栀',
           
        
        },
        {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347508467,3785403878&fm=26&gp=0.jpg',
            title:'南栀',
          
            
        },       

]

    render() {
        return (
            <div style={{width:"100%"}}>
                <NavBar
                   style={{backgroundColor:'#1296db',color:'#fff',width:"100%"}} 
                   rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                   
                  ]}
                  >
                   朋友
                   
               </NavBar>
               <div style={{width:"100%", margin:'0 auto',marginBottom:'6px'}}>
                    <SearchBar
                        placeholder="搜索"
                        style={{margin:"0 auto",backgroundColor:"#fff",width:"90%",borderRadius:80,height:'40px',marginTop:6}}
                        
                    />
                </div>
                <div style={{width:"100%"}}>
                <List className="my-list">
                    {
                    this.data.map((item,idx)=>(
                        <Item key={idx} style={{height:'66px'}}>
                        <img src={item.img} style={{float:"left",width:"13%",height:'80%',marginTop:'2%'}}/>
                       
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:'30px',float:"left",width:'70%'}}>{item.title}</p>
                               
                          
                       
                    </Item>

                    ))
                    
                    }
                </List>
                </div>
            </div>
        )
    }
}
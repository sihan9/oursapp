import React, { Component } from 'react'
import { NavBar, Icon,Button ,Toast } from 'antd-mobile';
import { List, TextareaItem,ImagePicker   } from 'antd-mobile';
import zaned from '../image/Community/2.png';
import unzan from '../image/Community/4.png';
import {Link,withRouter} from 'react-router-dom'
// import { TextInput } from 'react-native';
var chapterList =require('./Data');
const data = [];
var allData = {};
class Publish extends Component {
    constructor(){
        super();
        this.state={
            files: data,
            data1:[]
        }
    }
    componentDidMount(){
       
        let my=localStorage.getItem('data');
        my=JSON.parse(my)[0];
      
        this.setState({
            data1:my
        })
    
    }
    onChange = (files) => {
        allData.commentImg = files[0].url;
        this.setState({
          files
        });
    }
    successToast=()=> {
        Toast.success('发布成功', 1);
        var temp = {};
        var today = new Date();
        var data2 = document.getElementById("textarea").value;
        temp.name = this.state.data1.name;
        temp.school = this.state.data1.school;
        temp.title = data2;
        temp.publishTimer = (today.getMonth() + 1) + '-' + today.getDate();
        temp.good = 0;
        temp.talk=[];
        temp.unzan=unzan;
        temp.zaned=zaned;
        temp.img=this.state.data1.img;
        temp.comment = 0;
        temp.commentImg = this.state.files[0].url;
        temp.isfollow = '关注';
        temp.talk = [];
        temp.phone=JSON.parse(localStorage.getItem('data'))[0].phone
        temp.isgood=false;

        // let newForum=JSON.parse(localStorage.getItem('forum')).unshift(temp);
        let newForum=JSON.parse(localStorage.getItem('forum'));
        newForum.unshift(temp);
        localStorage.setItem('forum',JSON.stringify(newForum));
        allData = temp;
        // console.log(temp);
        setTimeout(() => {
            this.props.history.push('/home/community')
        }, 1000);
      }
    render() {
        const { files } = this.state;
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#26bdb0',color:'#fff',width:"100%"}} 
                    leftContent={[
                        <Link key = "1" style={{color:"#fff"}} to='/home/community'>
                            {<Icon type="cross" />}
                        </Link>
                    ]}
                    rightContent={[
                        <form action="#">
                            <Button style={{borderStyle:'none',height:'40px',backgroundColor:"#26bdb0",color:'#fff',position:"static"}}  onClick={this.successToast}>发布</Button>
                        </form>
                    ]}
                    >发布
                </NavBar>
                <div>
                    <img src={`http://101.37.172.74:8015/images/img?name=${this.state.data1.img}`} style={{float:"left",width:60,height:60,borderRadius:60,marginLeft:'2%',marginTop:20}}/>
                <p style={{marginLeft:10,marginTop:23,float:'left',width:"70%",fontSize:'18px',fontWeight:'bold'}}>{this.state.data1.name}</p>
                <p style={{marginLeft:10,float:"left",marginTop:5,width:"70%"}}>{this.state.data1.school}</p>
                </div>
                <List style={{float:"left",width:"100%"}} renderHeader={() => ''}>
                    <TextareaItem
                        id="textarea"
                        rows={3}
                        placeholder="分享新鲜事/提问"
                    />
                    </List>
                <div>
                    <ImagePicker
                        style={{float:"left",width:"100%"}}
                        files={files}
                        onChange={this.onChange}
                        selectable={files.length < 5}
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(Publish);

import React, { Component } from 'react'
import { NavBar, Icon,Button ,Toast } from 'antd-mobile';
import { List, TextareaItem,ImagePicker   } from 'antd-mobile';
import {Link,withRouter} from 'react-router-dom'
var {chapterList} = require('./Data');
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
       
        let data=localStorage.getItem('data');
        let da=JSON.parse(data)[0];
        this.setState({
            data1:da
        })
    }
    onChange = (files) => {
        allData.commentImg = files[0].url;
        this.setState({
          files,
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
        temp.publishTimer = (today.getMonth() + 1) + '/' + today.getDate();
        temp.good = 0;
        temp.talk=[];
        temp.comment = 0;
        temp.commentImg = this.state.files[0].url;
        temp.isfollow = '关注';
        temp.talk = [];
        chapterList.unshift(temp);
        allData = temp;
        setTimeout(() => {
            this.props.history.push('/home/community')
        }, 1000);
      }
    render() {
        const { files } = this.state;
        return (
            <div>
                <NavBar
                    mode="light"
                    leftContent={[
                        <Link key = "1" style={{color:"#f7cb3c"}} to='/home/community'>
                            {<Icon type="cross" />}
                        </Link>
                    ]}
                    rightContent={[
                        <from action="#">
                            <Button style={{border:0,backgroundColor:"#fff",color:'#f7cb3c',position:"static "}}  onClick={this.successToast}>发布</Button>
                        </from>
                    ]}
                    >发布
                </NavBar>
                <div>
                    <img src={`http://101.37.172.74:8080/images/img?name=${this.state.data1.img}`} style={{float:"left",width:45,height:45,borderRadius:45,marginLeft:"10%",marginTop:20}}/>
                <p style={{marginLeft:10,marginTop:23,float:'left',width:"70%"}}>{this.state.data1.name}</p>
                <p style={{marginLeft:10,float:"left",marginTop:5}}>{this.state.data1.school}</p>
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

import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { List, TextareaItem,ImagePicker   } from 'antd-mobile';
import {Link,withRouter} from 'react-router-dom'
var {chapterList} = require('./Data');
const requireContext = require.context('../image/publish', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
const data = [];
var allData = {};
class Publish extends Component {
    state = {
        files: data,
      }
    onChange = (files) => {
        allData.commentImg = files[0].url;
        this.setState({
          files,
        });
    }
    onClick = ()=>{
        var today = new Date();
        var data = document.getElementById("textarea").value;
        allData.name = "安好";
        allData.school = "河北师范大学";
        allData.title = data;
        allData.publishTimer = (today.getMonth() + 1) + '/' + today.getDate();
        allData.good = 0;
        allData.comment = 0;
        chapterList.unshift(allData);
        alert('发布成功');
        this.props.history.push('/home/community')
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
                            <input type="submit" name="Submit"  style={{border:0,backgroundColor:"#fff",color:'#f7cb3c',position:"static "}} onClick={this.onClick} value="发布"/>
                        </from>
                    ]}
                    >发布
                </NavBar>
                <div>
                    <img src={images[0]} style={{float:"left",width:45,height:45,borderRadius:45,marginLeft:"10%",marginTop:20}}/>
                    <p style={{marginLeft:10,marginTop:23,float:'left',width:"70%"}}>河北师范大学</p>
                    <p style={{marginLeft:10,float:"left",marginTop:5}}>安好</p>
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

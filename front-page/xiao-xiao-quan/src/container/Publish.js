import React, { Component } from 'react'
import { NavBar, Icon, Button } from 'antd-mobile';
import { List, TextareaItem,ImagePicker   } from 'antd-mobile';
import {Link} from 'react-router-dom'
const requireContext = require.context('../image/publish', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
const data = [];
var fs1;
export default class Publish extends Component {
    state = {
        files: data,
      }
    onChange = (files) => {
        fs1 = files;
        this.setState({
          files,
        });
    }
    onClick = ()=>{
        var data = document.getElementById("textarea").value;
    }
    render() {
        const { files } = this.state;
        return (
            <div>
                <NavBar
                    mode="light"
                    leftContent={[
                        <Link style={{color:"#f7cb3c"}} to='/home/community'>
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
                {/* <form style={{float:"left",width:"100%",marginTop:20}} renderHeader={() => ''}>
                    <textarea
                        id="textarea"
                        style={{paddingTop:10,width:"100%",border:0,}}
                        placeholder="分享新鲜事/提问"
                        rows="6"
                    >
                    </textarea>
                </form> */}
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

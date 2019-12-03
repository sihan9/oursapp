import React, { Component } from 'react'
import { NavBar, Icon, Button } from 'antd-mobile';
import { List, TextareaItem,ImagePicker   } from 'antd-mobile';
import {Link} from 'react-router-dom'
const requireContext = require.context('../image/publish', true, /^\.\/.*\.png$/)
const images = requireContext.keys().map(requireContext);
const data = [];
export default class Publish extends Component {
    state = {
        files: data,
      }
      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
    render() {
        const { files } = this.state;
        return (
            <div>
                <NavBar
                    mode="light"
                    leftContent={[
                        <Link style={{color:"#1296db"}} to='/community'>
                            {<Icon type="cross" />}
                        </Link>
                    ]}
                    rightContent={[
                        <Button style={{color:'#1296db',position:"static "}}>发布</Button>
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
                        title="标题"
                        autoHeight
                        labelNumber={5}
                    />
                    <TextareaItem
                        rows={3}
                        placeholder="分享新鲜事/提问"
                    />
                </List>
                <div>
                    <ImagePicker
                        style={{float:"left",width:"100%"}}
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 5}
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                    />
                </div>
            </div>
        )
    }
}

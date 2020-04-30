import React, { Component } from 'react'
import { Text, View,ToastAndroid,TouchableOpacity } from 'react-native'
import {Header } from 'react-native-elements';
import { headerStyle, globalStyle, baseBlueColor } from '../themes';
import GoBack from '../components/goback';
import Video from 'react-native-video';
export default class SchooXiangqing extends Component {
    constructor(props){
        super(props);
        this.state={
            schoolName:this.props.navigation.state.params.name,
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'stretch',
            duration: 0.0,
            currentTime: 0.0,
            paused:false,
        }
    }
    onLoad = (data) => {
        
        this.setState({duration: data.duration});
    };

    onProgress = (data) => {
        this.setState({currentTime: data.currentTime});
    };

    onEnd = () => {
        this.setState({paused: true});
        
    };

    onAudioBecomingNoisy = () => {
        this.setState({paused: true})
    };
    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        }
        return 0;
};




stop=()=>{
    var paused=this.state.paused;
    this.setState({
        paused:!paused
    })
}
    render() {
        const { navigation } = this.props;
        // const flexCompleted = this.getCurrentTimePercentage() * 100;
        // const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
       
       



        return (
            <View>
               <Header
                    outerContainerStyles={headerStyle.wrapper}
                    leftComponent={<GoBack navigation={navigation} />}
                    centerComponent={{ text:this.state.schoolName, style: headerStyle.center }}
                />
                <TouchableOpacity onPress={this.stop}>
                <View style={{width:'100%',height:250,backgroundColor:'white',borderWidth:20,borderTopColor:'#d8d8d8',borderLeftColor:'#d8d8d8',borderRightColor:'#f8f8f8',borderBottomColor:'#f8f8f8'}}>
                
                <Video
                    ref={(ref) => {
                        this.player = ref
                      }} 
                    source={require('../video/1.mp4')} 
                    style={{width:'100%',height:'100%'}}//组件样式
                    rate={this.state.rate}//播放速率
                    paused={this.state.paused}//暂停
                    volume={this.state.volume}//调节音量
                    muted={this.state.muted}//控制音频是否静音
                    resizeMode={this.state.resizeMode}//缩放模式
                    
                    onLoad={this.onLoad}//加载媒体并准备播放时调用的回调函数。
                    onProgress={this.onProgress}//视频播放过程中每个间隔进度单位调用的回调函数
                    onEnd={this.onEnd}//视频播放结束时的回调函数
                    onAudioBecomingNoisy={this.onAudioBecomingNoisy}//音频变得嘈杂时的回调 - 应暂停视频
                    onAudioFocusChanged={this.onAudioFocusChanged}//音频焦点丢失时的回调 - 如果焦点丢失则暂停
                    repeat={true}//确定在到达结尾时是否重复播放视频。

                     />
                </View>
                </TouchableOpacity>
               

        </View>
        )
    }
}

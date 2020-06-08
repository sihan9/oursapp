import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { inject, observer } from 'mobx-react/native';
// import { View } from 'react-navigation';
import { Header } from 'react-native-elements';
import GoBack from '../components/goback';
import { headerStyle, globalStyle } from '../themes';
import { RVW, RVH } from '../common';
@inject('nimStore')
@observer
export default class Page extends Component {
  constructor(props){
    super(props);
    this.state={
       account:this.props.nimStore.myInfo.account,
       content:'',
       email:''
    };
 }
  changeContent=(value)=>{
    this.setState({
    content:value
    })
  }
  changeEmail=(value)=>{
    this.setState({
     email:value
    })
  }
  onSubmit = ()=>{
    fetch('http://129.211.62.80:8015/feedback/add',{
    // post提交
      method:"POST",
      body:JSON.stringify(this.state)//把提交的内容转字符串
    })
    .then(res =>res.json())
    .then(res =>{
      this.toast.show('提交成功');
    })
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          leftComponent={<GoBack navigation={navigation} />}
          centerComponent={{ text: '用户反馈', style: headerStyle.center }}
        />
        <ScrollView>
          <View style={styles.slide}>
            <Text style={styles.text}>意见反馈</Text>
          </View>
          <View style={{height:105}}>
            <TextInput
                contentBackgroundColor='#fff'
                placeholder = {'请写下您的意见或建议'} 
                placeholderTextColor = {'#BBBBBB'}
                underlineColorAndroid = {'transparent'} 
                style = {{paddingVertical: 0, paddingLeft: 5, fontSize: 16}}
                onChangeText={this.changeContent}
            />
         </View>
         <View style={styles.slide}>
            <Text style={styles.text}>联系方式</Text>
          </View>
          <TextInput
                placeholder = {'请输入联系方式'} 
                placeholderTextColor = {'#BBBBBB'}
                underlineColorAndroid = {'transparent'} 
                style = {{paddingVertical: 0, paddingLeft: 5, fontSize: 16}}
                onChangeText={this.changeEmail}
          />
          <TouchableOpacity
            style={{justifyContent:'center',alignItems:'center',marginTop:20}}
            onPress={this.onSubmit}
          >
              <View style={{backgroundColor:"#26bdb0",width:200,height:30,justifyContent:'center',alignItems:'center'}}>
                <Text>提交</Text>
              </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    slide:{
        width:RVW*100,
        height:50,
        backgroundColor:'#e7e3e3',
        justifyContent:'center',
        // alignItems:'center'
    },
    text:{
        fontSize:17,
        marginLeft:10,
    }
})

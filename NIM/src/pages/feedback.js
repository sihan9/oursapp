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
          />
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
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

import React, { Component } from 'react';
import { ScrollView, View,Text, ActionSheetIOS, TextInput,StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
// import { View } from 'react-navigation';
import { ListItem, Button, Header } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import GoBack from '../components/goback';
import LeftAvatar from '../components/leftAvatar';
import { globalStyle, headerStyle, baseRedColor } from '../themes';
import { RVW } from '../common';

@inject('nimStore', 'linkAction')
@observer

export default class Page extends Component {
  constructor(props){
     super(props);
     this.state={
        myInfo :this.props.nimStore.myInfo || {},
        phone:''
     }

  }
  componentWillReceiveProps(nextProps) {
    this.setState({myInfo :nextProps.nimStore.myInfo || {}});
}
  logout = () => {
    this.props.linkAction.logout();
  }
  onchange=(value)=>{
    
    
   this.setState({
    phone:value
   })
  
   

   
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          leftComponent={<GoBack navigation={navigation} />}
          centerComponent={{ text: '修改电话', style: headerStyle.center }}
        />
        <View>
            
            <TextInput
                style={styles.style_user_input}
                placeholder={this.state.myInfo.phone}
                autoFocus={true}
                placeholderTextColor="#ccc"
                onChangeText={this.onchange}
            />
        </View>
        <Button
            title="保存修改"
            titleStyle={{ color: '#fff' }}
            onPress={()=>{
              var peo=this.state.myInfo;
              peo.account=this.state.phone;
               this.props.linkAction.onupdatemyinfo(peo);
               this.setState({
                 myInfo:peo
               })

              this.props.navigation.navigate('session');

            }}
            buttonStyle={{
              marginLeft: 10 * RVW,
              width: 80 * RVW,
              backgroundColor: '#26bdb0',
              marginVertical: 20,
              borderRadius: 3,
            }}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    style_user_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:60,
        fontSize:18
        
     },
})

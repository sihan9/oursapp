import React, { Component } from 'react';
import { ScrollView, View,Text, ActionSheetIOS, TextInput,StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
// import { View } from 'react-navigation';
import { Header,Button } from 'react-native-elements';
import GoBack from '../components/goback';
import { globalStyle, headerStyle, baseRedColor } from '../themes';
import { RVW } from '../common';

import DatePicker from 'react-native-datepicker';
@inject('nimStore', 'linkAction')
@observer

export default class Page extends Component {
  constructor(props){
     super(props);
     this.state={
        myInfo :this.props.nimStore.myInfo || {},
        data:"2016-05-15"
     }
    
  }
  componentWillReceiveProps(nextProps) {
    this.setState({myInfo :nextProps.nimStore.myInfo || {}});
}

  logout = () => {
    this.props.linkAction.logout();
  }
  

  onchange=(value)=>{
    
    var peo=this.state.myInfo;
    peo.birth=value;
    this.props.linkAction.onupdatemyinfo(peo);
   this.setState({
    myInfo:this.props.nimStore.myInfo || {}
   })
    this.props.navigation.navigate('session');
   
  
   

   
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          leftComponent={<GoBack navigation={navigation} />}
          centerComponent={{ text: '修改生日', style: headerStyle.center }}
        />  
        <View style={{backgroundColor:'white',height:100,paddingLeft:RVW*30}}>
        <DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="选择日期/时间"
                    androidMode="spinner"
                    format="YYYY-MM-DD"
                    confirmBtnText="确定"
                    cancelBtnText="取消"
                    minDate="1880-01-01"
                    maxDate="2020-06-01"
                    customStyles={{
                        dateIcon: {
                           
                            marginTop:40

                           
                        },
                        dateInput: {
                            backgroundColor:'white',
                            marginTop:40,
                            width:300
                            
                            
                        }
                    }}
                    minuteInterval={10}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />
              
            
        </View>
        <Button
            title="保存修改"
            titleStyle={{ color: '#fff' }}
            onPress={()=>{
              var peo=this.state.myInfo;
              peo.birth=this.state.date;
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

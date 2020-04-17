import React, { Component } from 'react';
import {  View,StyleSheet,Text} from 'react-native';
import { inject, observer } from 'mobx-react/native';
import {Header,Button} from 'react-native-elements';
import Toast from 'react-native-easy-toast';

import GoBack from '../components/goback';
import LeftAvatar from '../components/leftAvatar';
import { globalStyle, headerStyle, baseRedColor } from '../themes';
import { RVW } from '../common';
import RadioModal from "react-native-radio-master"


@inject('nimStore', 'linkAction')
@observer

export default class Page extends Component {
  constructor(props){
     super(props);
     this.state={
        myInfo :this.props.nimStore.myInfo || {},
        gender:this.props.nimStore.myInfo.gender
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
    peo.email=value;
    this.props.linkAction.onupdatemyinfo(peo);
   this.setState({
    myInfo:this.props.nimStore.myInfo || {}
   })
   this.props.navigation.navigate('session');
   

   
  }
  render() {
    var datas= [
      {
        "selecteId":"female",
        "content": "女",
        "selected": this.state.gender==='女'?true:false
      },
      {
        "selecteId": "male",
        "content": "男",
        "selected":  this.state.gender==='男'?true:false
      }
    ]
    const { navigation } = this.props;
    
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          leftComponent={<GoBack navigation={navigation} />}
          centerComponent={{ text: '修改性别', style: headerStyle.center }}
        />
           <RadioModal
              options={{id:'selecteId',value:'content',disabled:'selected'}}
              selectedValue={this.state.gender}
              onValueChange={(id,item) =>{
                this.setState({
                  gender:id
                })
              
              }
                
               }
              seledImg={require('../img/1.png')}
              selImg={require('../img/2.png')}
              selnoneImg={require('../img/1.png')}
              dataOption={datas}
              style={{ flexDirection:'column',
                flexWrap:'wrap',
                alignItems:'flex-start',
                height:100,
                backgroundColor:'#ffffff',padding:10,marginTop:10,
                paddingTop:20
              }} 
               
                >
                 
            </RadioModal>
            <Button
            title="保存修改"
            titleStyle={{ color: '#fff' }}
            onPress={()=>{
              var peo=this.state.myInfo;
              peo.gender=this.state.gender;
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

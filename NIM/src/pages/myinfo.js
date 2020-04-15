import React, { Component } from 'react';
import { ScrollView, View, ActionSheetIOS } from 'react-native';
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
       myInfo :this.props.nimStore.myInfo || {}
    }
   
 }

 componentWillReceiveProps(nextProps) {
   this.setState({myInfo :nextProps.nimStore.myInfo || {}});
}
  logout = () => {
    this.props.linkAction.logout();
  }
  componentDidMount=()=>{
    let gender = '未知';
    if (this.state.myInfo.gender === 'female') {
      gender = '女';
    } else if (this.state.myInfo.gender === 'male') {
      gender = '男';
    }
    const myInfo = this.props.nimStore.myInfo || {};
    myInfo.gender=gender;
    this.setState({
      myInfo:myInfo
    })
  }

  render() {
   
  
    const { navigation } = this.props; 
    return ( 
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          leftComponent={<GoBack navigation={navigation} />}
          centerComponent={{ text: '个人信息', style: headerStyle.center }}
        />
        <ListItem
          key={0}
          leftAvatar={<LeftAvatar uri={this.state.myInfo.avatar} />}
          title={this.state.myInfo.nick}
          subtitle={`账号：${this.state.myInfo.account}`}
          containerStyle={{ marginVertical: 20 }}
        />
        <ScrollView>
          {/* {
          information.map((item,key)=>(
            
              <ListItem
              onPress={()=>
              
                this.props.navigation.navigate('reNick')

              }
                key={key}
                title={item.title}
                rightTitle={item.name}
                rightTitleStyle={globalStyle.listItemRight}
                containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
          />
          
          ))
          } */}
          <ListItem
            onPress={()=>{}}
            key={1}
            title="昵称"
            onPress={()=>
              this.props.navigation.navigate('reNick')
            }
            rightTitle={this.state.myInfo.nick}
            rightTitleStyle={globalStyle.listItemRight}
            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
          />
          <ListItem
            key={2}
            title="性别"
            rightTitle={this.state.myInfo.gender}
            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
            onPress={()=>
              this.props.navigation.navigate('reGender')
            }
          />
          <ListItem
            key={3}
            title="生日"
            rightTitle={this.state.myInfo.birth}
            rightTitleStyle={globalStyle.listItemRight}
            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
            onPress={()=>
              this.props.navigation.navigate('reBirth')
            }
          />
          <ListItem
            key={4}
            title="手机"
            rightTitle={this.state.myInfo.tel}
            rightTitleStyle={globalStyle.listItemRight}
            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
            onPress={()=>
              this.props.navigation.navigate('rePhone')
            }
          />
          <ListItem
            key={5}
            title="邮箱"
            rightTitle={this.state.myInfo.email}
            rightTitleStyle={globalStyle.listItemRight}
            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
            onPress={()=>
              this.props.navigation.navigate('reEmail')
            }
          />
          <ListItem
            key={6}
            title="签名"
            rightTitle={this.state.myInfo.sign}
            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
            onPress={()=>
              this.props.navigation.navigate('reSign')
            }
          />

          <Button
            title="注销"
            titleStyle={{ color: '#fff' }}
            onPress={this.logout}
            buttonStyle={{
              marginLeft: 10 * RVW,
              width: 80 * RVW,
              backgroundColor: baseRedColor,
              marginVertical: 20,
              borderRadius: 3,
            }}
          />
        </ScrollView>
        <Toast ref={(ref) => { this.toast = ref; }} position="center" />
      </View>
    );
  }
}

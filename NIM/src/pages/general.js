import React, { Component } from 'react';
import { ScrollView, Text, View ,Switch} from 'react-native';
import { inject, observer } from 'mobx-react/native';
// import { SafeView } from 'react-navigation';
import { ListItem, Avatar, Header } from 'react-native-elements';
import NavBottom from '../components/navBottom';
import { headerStyle, globalStyle, baseBlueColor } from '../themes';
import { RVW, RFT } from '../common';

@inject('nimStore')
@observer
export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muteVal: false,
      pushVal: false,
      token: 'e10adc3949ba59abbe56e057f20f883e',
    };
  }
  setMuteVal = (val) => {
    this.setState({
      muteVal: val,
    });
  }
  setPushVal = (val) => {
    this.setState({
      pushVal: val,
    });
  }
  render() {
    const myInfo = this.props.nimStore.myInfo || {};
    const { navigation } = this.props;
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          centerComponent={{ text: '我', style: headerStyle.center }}
        />
        <ScrollView>
          <ListItem
            key={0}
            leftAvatar={<Avatar
              source={{ uri: myInfo.avatar }}
              size="large"
              rounded
            />}
            title={<Text style={{ fontSize: 8 * RFT }}>{myInfo.nick}</Text>}
            subtitle={`账号：${myInfo.account}`}
            containerStyle={{ height: 30 * RVW }}
            rightIcon={{
              type: 'ionicon',
              name: 'ios-arrow-forward',
              color: baseBlueColor,
              size: 30,
            }}
            onPress={
              () => {
                this.props.navigation.navigate('myinfo');
              }
            }
            bottomDivider
          />
          <ListItem
            key={1}
            title="消息提醒"
            rightTitle={
              <Switch
                value={this.state.muteVal}
                onValueChange={this.setMuteVal}
              />
            }
            topDivider
            bottomDivider
            containerStyle={{ marginTop: 15 }}
          />
          <ListItem
            key={2}
            title="推送不展示消息详情"
            rightTitle={
              <Switch
                value={this.state.pushVal}
                onValueChange={this.setPushVal}
              />
            }
            bottomDivider
          />
          <ListItem
            key={3}
            title="我的钱包"
            onPress={() => {
              this.props.navigation.navigate('money');
            }}
            chevron
            chevronColor={baseBlueColor}
            bottomDivider
          />
          <ListItem
            key={4}
            title="我的收藏"
            onPress={() => {
              this.props.navigation.navigate('collect');
            }}
            chevron
            chevronColor={baseBlueColor}
            bottomDivider
          />
          <ListItem
            key={5}
            title="关于"
            onPress={() => {
              this.props.navigation.navigate('about');
            }}
            chevron
            chevronColor={baseBlueColor}
            bottomDivider
          />
          <ListItem
            key={6}
            title="用户反馈"
            onPress={() => {
              this.props.navigation.navigate('feedback');
            }}
            chevron
            chevronColor={baseBlueColor}
            bottomDivider
          />
          
        </ScrollView>
        <NavBottom navigation={navigation} />
      </View>
    );
  }
}

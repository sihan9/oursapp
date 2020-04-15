import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
// import { View } from 'react-navigation';
import { Header } from 'react-native-elements';
import GoBack from '../components/goback';
import { headerStyle, globalStyle } from '../themes';

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
          centerComponent={{ text: '我的收藏', style: headerStyle.center }}
        />
        <ScrollView>
          <Text>正在开发中</Text>
        </ScrollView>
      </View>
    );
  }
}
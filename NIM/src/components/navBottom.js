import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { baseBlueColor } from '../themes';
import { RVW, RFT } from '../common';
import { Icon } from 'react-native-elements';

const localStyle = {
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tab: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: 12 * RVW,
  },
  label: {
    fontSize: 3 * RFT,
    lineHeight: 6 * RVW,
    textAlign: 'center',
  },
};

export default (props) => {
  const { navigation } = props;
  const { routeName } = navigation.state;
  const lightBlueColor = '#f0f3fb';
  return (
    <View style={localStyle.wrapper}>
      <TouchableOpacity style={[localStyle.tab, ]} onPress={() => { navigation.navigate('session'); }}>
        <Icon name="comment" color = {routeName === 'session' ? baseBlueColor : '#333'} />
        <Text style={[localStyle.label, { color: routeName === 'session' ? baseBlueColor : '#333' }]}>消息</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[localStyle.tab, ]} onPress={() => { navigation.navigate('contact'); }}>
        <Icon name="people-outline" color = {routeName === 'contact' ? baseBlueColor : '#333'} />
        <Text style={[localStyle.label, { color: routeName === 'contact' ? baseBlueColor : '#333' }]}>联系人</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[localStyle.tab, ]} onPress={() => { navigation.navigate('schoolInfo'); }}>
        <Icon name="group-work" color = {routeName === 'schoolInfo' ? baseBlueColor : '#333'} />
        <Text style={[localStyle.label, { color: routeName === 'schoolInfo' ? baseBlueColor : '#333' }]}>学校</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[localStyle.tab, ]} onPress={() => { navigation.navigate('general'); }}>
        <Icon name="perm-identity" color = {routeName === 'general' ? baseBlueColor : '#333'} />
        <Text style={[localStyle.label, { color: routeName === 'general' ? baseBlueColor : '#333' }]}>我的</Text>
      </TouchableOpacity>
    </View>
  );
}

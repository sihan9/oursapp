import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
// import { View } from 'react-navigation';
import { Header ,CheckBox} from 'react-native-elements';
import GoBack from '../components/goback';
import { headerStyle, globalStyle } from '../themes';

@inject('nimStore')
@observer
export default class Page extends Component {
  render() {
    const { navigation } = this.props;
    const myInfo = this.props.nimStore.myInfo || {};
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          leftComponent={<GoBack navigation={navigation} />}
          centerComponent={{ text: '性别', style: headerStyle.center }}
        />
        <ScrollView>
          <View>
            <View
                style={{
                    borderBottomWidth: 1,
                    borderColor: '#eee'
                }}
            >
                <CheckBox
                    left
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked
                    // checkedColor={skin.main}
                    iconRight
                    title="男"
                    textStyle={{ fontSize: 16 }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        marginTop: -5,
                        borderWidth: 0
                    }}
                    onPress={() => {
                        myInfo.gender='male'
                    }}
                />
            </View>
            <View>
                <CheckBox
                    left
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    // checkedColor={skin.main}
                    iconRight
                    title="女 "
                    textStyle={{ fontSize: 16 }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        borderWidth: 0
                    }}
                    onPress={() => {
                        myInfo.gender='female'
                        alert(myInfo.gender)
                    }}
                />
            </View>
            <View>
                <CheckBox
                    left
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    // checkedColor={skin.main}
                    iconRight
                    title="其他 "
                    textStyle={{ fontSize: 16 }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        borderWidth: 0
                    }}
                    // onPress={() => {
                        
                    // }}
                />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
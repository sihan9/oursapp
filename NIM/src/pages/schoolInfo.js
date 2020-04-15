import React, { Component } from 'react'
import { Text, View,ScrollView,Switch} from 'react-native'
import NavBottom from '../components/navBottom';
import { headerStyle, globalStyle, baseBlueColor } from '../themes';
import { inject, observer } from 'mobx-react/native';
import { ListItem, Avatar, Header } from 'react-native-elements';
import { RVW, RFT } from '../common';
@inject('nimStore')
@observer
export default class Page extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={globalStyle.container}>
                <Header
                    outerContainerStyles={headerStyle.wrapper}
                    centerComponent={{ text: '动态', style: headerStyle.center }}
                />
                <ScrollView containerStyle={{ height: 30 * RVW }}>  
                    <Text>动态页</Text>
                </ScrollView>
                <NavBottom navigation={navigation} />
            </View>
        )
    }
}

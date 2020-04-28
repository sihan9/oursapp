import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header } from 'react-native-elements';
import { headerStyle, globalStyle, baseBlueColor } from '../themes';
import GoBack from '../components/goback';
export default class SchooXiangqing extends Component {
    constructor(props){
        super(props);
        this.state={
            schoolName:this.props.navigation.state.params.name
        }
    }
    render() {
        const { navigation } = this.props;
      
        return (
            <View>
               <Header
                    outerContainerStyles={headerStyle.wrapper}
                    leftComponent={<GoBack navigation={navigation} />}
                    centerComponent={{ text:this.state.schoolName, style: headerStyle.center }}
                />
            </View>
        )
    }
}

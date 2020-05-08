import React, { Component } from 'react'
import { Text, View,ToastAndroid,TouchableOpacity, ScrollView,StyleSheet,Image } from 'react-native'
import {Icon,Header,ListItem } from 'react-native-elements';
import { headerStyle, globalStyle, baseBlueColor } from '../themes';
import GoBack from '../components/goback';
import { RVW, RVH } from '../common';
import Swiper from 'react-native-swiper';
export default class School extends Component {
    constructor(props){
        super(props);
        this.state={
            schoolName:this.props.navigation.state.params.name,
            schoolInfo:{
                cname:'河北师范大学',
                ename:'hebei normal university',
                abbre:'河北师大',
                time:'1923',
                smotto:'怀天下，求真知',
                anniversary:'校庆',
                attribute:'属性',
                type:'类型',
                tmajor:'王牌专业',
                bspot:'亮点',
                province:'河北省',
                img:[
                    'https://zsb.nankai.edu.cn/attachments/20141117092514610.jpg',
                    'https://zsb.nankai.edu.cn/attachments/20141117092525206.jpg',
                    'https://zsb.nankai.edu.cn/attachments/20141117092536452.jpg',
                    'https://zsb.nankai.edu.cn/attachments/20141117092546307.jpg',
                ]

            }
        }
    }
    componentDidMount=()=>{
        fetch('http://129.211.62.80:8015/school/message?cname='+this.state.schoolName)
        .then(res=>res.json())
        .then((res)=>{
           let schoolInfo=res.content[0];
           this.setState({
               schoolInfo:res.content[0]
           })
        }).catch(error => alert(error));
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
            <View>
               <Header
                    outerContainerStyles={headerStyle.wrapper}
                    leftComponent={<GoBack navigation={navigation} />}
                    rightComponent={<Icon
                        type="entypo"
                        name="video"
                        size={9 * RVW}
                        color="#fff"
                        onPress={() => {this.props.navigation.navigate('schoolxiangqing',{name:this.state.schoolName})}}
                      />}
                    centerComponent={{ text:this.state.schoolName, style: headerStyle.center }}
                />
                {/* <View style={{height:200}}>
                 <Swiper  
                    horizontal={true} 
                    showsPagination={true}
                    dotColor='white'
                    activeDotColor='#26bdb0'
                    autoplay={true}
                    
                    >
                    <View style={styles.slide}>
                    <Image  style={{width:'100%',height:200}} source={{uri:this.state.schoolInfo.img[0]}}/>
                    </View>
                    <View style={styles.slide}>
                    <Image  style={{width:'100%',height:200}} source={{uri:this.state.schoolInfo.img[1]}}/>
                    </View>
                    <View style={styles.slide}>
                    <Image  style={{width:'100%',height:200}} source={{uri:this.state.schoolInfo.img[2]}}/>
                    </View>
                    <View style={styles.slide}>
                    <Image  style={{width:'100%',height:200}} source={{uri:this.state.schoolInfo.img[3]}}/>
                    </View>
                    </Swiper>
                    
                </View> */}
                <View style={{backgroundColor:'white',width:RVW*100,marginTop:10,height:RVH*90}}>
                    <Text style={{fontWeight:'bold',fontSize:20,color:'#26bdb0'}}>基本资料</Text>
                    
         
                        <ListItem
                        
                            key={1}
                            title="中文名"
                            rightTitle={this.state.schoolInfo.cname}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                        />
                        <ListItem
                            key={2}
                            title="英文名"
                            rightTitle={this.state.schoolInfo.ename}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                           
                        />
                        <ListItem
                            key={3}
                            title="简称"
                            rightTitle={this.state.schoolInfo.abbre}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                           
                        />
                         <ListItem
                            key={4}
                            title="校训"
                            rightTitle={this.state.schoolInfo.smotto}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                          
                        />
                        <ListItem
                            key={5}
                            title="创办时间"
                            rightTitle={this.state.schoolInfo.time}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                           
                        />
                        <ListItem
                            key={6}
                            title="校庆日"
                            rightTitle={this.state.schoolInfo.anniversary}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                           
                        />
                        <ListItem
                            key={7}
                            title="属性"
                            rightTitle={this.state.schoolInfo.attribute}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                          
                        />
                         <ListItem
                            key={8}
                            title="类型"
                            rightTitle={this.state.schoolInfo.type}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                          
                        />
                         <ListItem
                            key={9}
                            title="王牌专业"
                            rightTitle={this.state.schoolInfo.tmajor}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                          
                        />
                         <ListItem
                            key={10}
                            title="高校所在地"
                            rightTitle={this.state.schoolInfo.province}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                          
                        />
                         <ListItem
                            key={11}
                            title="亮点"
                            rightTitle={this.state.schoolInfo.bspot}
                            rightTitleStyle={globalStyle.listItemRight}
                            containerStyle={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }} 
                        />
                </View>
               

        </View>
        </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    slide:{
        width:RVW*100,
        height:200,
        justifyContent:'center',
        alignItems:'center'
    }
})

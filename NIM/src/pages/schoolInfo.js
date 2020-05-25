import React, { Component } from 'react'
import { Text, View,ScrollView,StyleSheet, TouchableOpacity,Image, FlatList, Alert} from 'react-native'
import NavBottom from '../components/navBottom';
import { headerStyle, globalStyle, baseBlueColor } from '../themes';
import { inject, observer } from 'mobx-react/native';
import {Header } from 'react-native-elements';
import { RVW, RFT,RVH } from '../common';
import getPinyin from '../util/pinyin';
@inject('nimStore')
@observer
export default class Page extends Component {
    constructor(){
        super();
        this.state={
            pro:'',
            school:[],
            list:[]
        }
    }
    componentDidMount() {
        fetch('http://129.211.62.80:8015/school/info?province=北京')
          .then(res => res.json())
          .then(res => {
            this.setState({school: res.content});
          });
        // for(let i in this.state.school){
        //   let pinyin = getPinyin(this.state.school[i].cname, '');
        //   this.state.list.push(pinyin);
        // }
        // this.state.list.sort();
        // alert(this.state.list);
      }
    change=(key,e)=>{
        fetch('http://129.211.62.80:8015/school/info?province='+key)
          .then(res => res.json())
          .then(res => {
            this.setState({school: res.content});
          });
          //拼音
        //   for(let i in this.state.school){
        //     let pinyin = getPinyin(this.state.school[i].cname, '');
        //     this.state.list.push(pinyin);
        //   }
        //   this.state.list.sort();
        //   alert(this.state.list); 
    }
    
    render() {
        const { navigation } = this.props;
        return (
            <View style={globalStyle.container}>
                <Header
                    outerContainerStyles={headerStyle.wrapper}
                    centerComponent={{ text: '学校', style: headerStyle.center }}
                />
                <ScrollView containerStyle={{ height: 30 * RVW }}>  
                <View style={styles.content}>
                    <View style={styles.left}>
                        <TouchableOpacity  onPress={(e)=>{this.change("北京",e)}}>
                            <View style={styles.item}>
                                <Text style={{color:'white',fontSize:17}}>北京</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={(e)=>{this.change("天津",e)}}>
                            <View style={styles.item}>
                                <Text style={{color:'white',fontSize:17}}>天津</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={(e)=>{this.change("河北",e)}}>
                            <View style={styles.item}>
                                <Text style={{color:'white',fontSize:17}}>河北</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={(e)=>{this.change("上海",e)}}>
                            <View style={styles.item}>
                                <Text style={{color:'white',fontSize:17}}>上海</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.right}>
                    {
                        this.state.school.map((item)=>(
                            <TouchableOpacity  style={styles.sch} onPress={()=>{this.props.navigation.navigate('school',{name:item.cname})}}>
                                <Image resizeMode='contain' style={{width:'60%',height:'60%'}}
                                source={{uri:item.badge}}
                            />
                                <Text style={{textAlign:'center',width:'90%'}}>{item.cname}</Text>
                            </TouchableOpacity>
                        ))
                    }
                   
                    </View>
                </View>
                </ScrollView>
                <NavBottom navigation={navigation} />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    content:{
        flexDirection:"row",
        height:RVH*90,

    },
    left:{
        width:RVW*20,
        height:RVH*90,
        // paddingTop:10,
        backgroundColor:'white'
    },
    item:{
        width:'100%',
        height:60,
        marginTop:10,
        fontSize:20,
        backgroundColor:'#26bdb0',
        alignItems:'center',
        justifyContent:'center'
    },
    right:{
        paddingTop:20,
        width:RVW*80,
        height:RVH*90,
        backgroundColor:'white',
        marginLeft:5,
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    sch:{
        width:RVW*25,
        height:140,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15
    }
})

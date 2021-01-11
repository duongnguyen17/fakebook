import React, {Component} from 'react'
import { View, FlatList, Button, Image, Text, StyleSheet } from "react-native";
// import firebase from 'firebase'
// require('firebase/firebase-firestore')
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { Value } from 'react-native-reanimated'
import Header from '../../component/HeaderBar'
import Notification from '../../component/NotificationCard'

function Notifications(props){
    _scroll_y=new Value(0)
  
    
    const _diff_clamp_scroll_y =Animated.diffClamp(_scroll_y, 0, 50)

    const _header_height = Animated.interpolate(_diff_clamp_scroll_y, {
        inputRange:[0, 50],
        outputRange:[50, 0],
        extrapolate:'clamp'
    })

    const _header_translate_y = Animated.interpolate(_diff_clamp_scroll_y, {
        inputRange:[0, 50],
        outputRange:[0, -50],
        extrapolate:'clamp'
    })

    const _header_opacity = Animated.interpolate(_diff_clamp_scroll_y, {
        inputRange:[0, 50],
        outputRange:[1, 0],
        extrapolate:'clamp'
    })
    return(
        <SafeAreaView style={styles.safe_area_view}>
            <Animated.View
                style={[
                    styles.header,
                    {
                        height:_header_height,
                        transform:[{translateY:_header_translate_y}],
                        opacity:_header_opacity
                    }
                ]}
            >
                <Header name={"Notifications"}/>
            </Animated.View>
            <Animated.ScrollView
                style={styles.scroll_view}
                showsVerticalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={5}
                onScroll={Animated.event([
                    {
                        nativeEvent:{contentOffset:{y:_scroll_y}}
                    }
                ])}
            >
                <Notification content={"Test"} 
                    avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"} 
                    time={"kjashdfkhasdh"}/>
                <Notification content={"Test"} 
                    avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"} 
                    time={"kjashdfkhasdh"}/>
                <Notification content={"Test"} 
                    avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"} 
                    time={"kjashdfkhasdh"}/>
                <Notification content={"Test"} 
                    avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"} 
                    time={"kjashdfkhasdh"}/>
                <Notification content={"Test"} 
                    avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"} 
                    time={"kjashdfkhasdh"}/>
                <Notification content={"Test"} 
                    avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"} 
                    time={"kjashdfkhasdh"}/>
                <Notification content={"Test"} 
                    avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"} 
                    time={"kjashdfkhasdh"}/>
                <Notification content={"Test"} 
                    avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"} 
                    time={"kjashdfkhasdh"}/>
                <Notification content={"Test"} 
                    avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"} 
                    time={"kjashdfkhasdh"}/>
                <Notification content={"Test"} 
                    avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"} 
                    time={"kjashdfkhasdh"}/>      
            </Animated.ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe_area_view:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    header:{
        height:50,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16,
        borderBottomWidth:1,
        borderBottomColor:'#bcbcbc'
    },
    scroll_view:{
        flex:1,
        marginHorizontal:15,
    },

})

export default Notifications;
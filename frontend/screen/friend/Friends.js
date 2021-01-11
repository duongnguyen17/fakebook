import React, {useState}from 'react'
import { View, FlatList, Button, Image, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { Value } from 'react-native-reanimated'
import HeaderBar from '../../component/HeaderBar'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {getRequestedFriends, getListSuggestedFriends} from '../../../backend/ListAPIs'
import AsyncStorage from '@react-native-community/async-storage'

import RequestCard from '../../component/RequestCard'

function Friend(props){

    const index = 0
    const count = 5

    const [requestedFriends, setRequestedFriends] = useState([])
    const [countRequest, setCountRequest] = useState()
    const [suggestedFriends, setSuggestedFriends] = useState([])

    useEffect(() => {
        async()=>{
            const token = await AsyncStorage.getItem('token')
            const resRequest=await getRequestedFriends(token, index, count)
            setRequestedFriends(resRequest.data.request)
            setCountRequest(resRequest.data.total)
            const resSuggest=await getListSuggestedFriends(token, index, count)
            setSuggestedFriends(resSuggest.data.list_users)
        }
    }, [])



    //cái này làm cho header động
    {const _scroll_y=new Value(0)
  
    
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
    })}


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
                <HeaderBar name={"Friends"}/>
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
                <View style={styles.button_inner}>
                    <TouchableHighlight style={styles.button_suggest} onPress={props.goSuggestion}>
                        <Text style={{fontSize:16,
                            fontWeight:'bold'}}>
                            Suggestions
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button_all} onPress={props.goAllFriends}>
                        <Text style={{fontSize:16,
                            fontWeight:'bold'}}>
                            All Friends
                        </Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.suggestion_request}>
                    <View style={styles.header_card}>
                        <View style={styles.header_request}>
                            <Text style={{fontSize:22,
                            fontWeight:'bold'}}>
                                Friend Requests
                            </Text>
                            <Text style={{
                                fontSize:22,
                                fontWeight:'bold',
                                color:'#c50e29',
                                marginLeft:5,
                            }}>
                                {countRequest}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={props.goRequest}>
                            <Text
                                style={{color:'#5d99c6', fontSize:20}}
                            >
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {requestedFriends.map((request)=>{
                        <RequestCard request={request}/>
                    })}
                </View>
                <View style={styles.suggestion_request}>
                    <View style={styles.header_card}>
                        <View style={styles.header_request}>
                            <Text style={{fontSize:22,
                            fontWeight:'bold'}}>
                                People You May Know
                            </Text>    
                        </View>
                    </View>
                    {suggestedFriends.map((user)=>{
                        <RequestCard user={user}/>
                    })}
                </View>
                
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
        borderBottomColor:'#e4e6eb'
    },
    scroll_view:{
        marginHorizontal:15,
    },
    button_inner:{
        height:60,
        alignItems:"center",
        flexDirection:'row',
        borderBottomColor:'#e4e6eb',
        borderBottomWidth:1,
        marginBottom:5,
    },
    button_suggest:{
        height:33,
        width:120,
        backgroundColor:'#e4e6eb',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
    },
    button_all:{
        height:33,
        width:100,
        marginLeft:15,
        backgroundColor:'#e4e6eb',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,

    },
    suggestion_request:{
        borderTopColor:'#e4e6eb',
        borderTopWidth:1,
    },
    header_request:{
        flexDirection:'row',
        alignItems:'center'
    }, 
    header_card:{
        marginTop:5,
        flexDirection:"row",
        justifyContent:'space-between'
    }

})

export default Friend;
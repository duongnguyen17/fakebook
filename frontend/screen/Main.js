// Trang chủ fakebook


import React, {useState, useEffect} from 'react'

import AsyncStorage from '@react-native-community/async-storage'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {ToastAndroid} from 'react-native'


import Feed from './feed/Feed'
import Profile from './user_profile/Profile'
import Friend from './friend/Friends'
import Watch from './watch/Watch'
import Notification from './notification/Notifications'

const Tab = createMaterialBottomTabNavigator();

function Home(props) {
    const [time, setTime] = useState(Date.now.toString())

    useEffect(() => {
        async()=>{
            const userid = await AsyncStorage.getItem('userid')
            global.userid=userid
            const username = await AsyncStorage.getItem('username')
            global.username=username
            const avatar = await AsyncStorage.getItem('avatar')
            global.avatar = avatar
        }
    }, [])
    useEffect(() => {
        if (props.route.params?.time) {
            setTime(props.route.params.time)
        }
    }, [props.route.params])

    const goCreatePost = () =>{
        props.navigation.navigate("CreatePost")
    }

    const goMessenger = ()=>{
        props.navigation.navigate("Messenger")
    }
    const goRequest = ()=>{
        props.navigation.navigate("Request")
    }

    const goAllFriends = () =>{
        props.navigation.navigate("AllFriends")
    }

    const goSuggestion = ()=>{
        props.navigation.navigate("Suggestion")
    }

    const goProfile = () => {
        props.navigation.navigate("Profile")
    }
    global.goProfile = goProfile

    const goUserProfile = (userId) => {
        props.navigation.navigate("UserProfile", {
            userId: userId,
        })
    }
    global.goUserProfile=goUserProfile

    const goSearch = () => {
        props.navigation.navigate("Search")
    }
    global.goSearch = goSearch
    
    const logout =()=>{
    }
    return (
        <Tab.Navigator initialRouteName="Feed" labeled={false} 
            activeColor="#1e90ff"
            barStyle={{ backgroundColor: '#ffffff' }}>
            <Tab.Screen name="Feed"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
                children={()=><Feed goCreatePost={goCreatePost} time={time}  
                                    goProfile={goProfile} goUserProfile={goUserProfile} 
                                    goMessenger={goMessenger} goSearch={goSearch}
                                    />} 
                />
            <Tab.Screen name="Watch"
                options={{
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="television-play" color={color} size={26} />
                    ),
                }}
                children={() => <Watch goSearch={goSearch} goUserProfile={goUserProfile} />}
                />
            <Tab.Screen name="Notification"
                options={{
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
                children={()=><Notification goSearch={goSearch}/>}
                />
            <Tab.Screen name="Friend" 
                options={{
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="account-multiple-outline" color={color} size={26} />
                    ),
                }}
                children={()=> <Friend goUserProfile={goUserProfile} goSearch={goSearch}
                        goAllFriends={goAllFriends} goRequest={goRequest} goSuggestion={goSuggestion}
                />}
                />
            <Tab.Screen name="Profile"
            options={{
                tabBarIcon:({color, size}) => (
                    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                ),
            }}
            children ={()=><Profile logout={logout}/>}
            />
        </Tab.Navigator>
    )
}

export default Home
import React, {Component} from 'react'

import {
    View,
    StyleSheet
} from 'react-native'


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import ChatList from './ChatList'
import Online from './Online'

const Tab = createMaterialBottomTabNavigator();


function Chat (props){
    const goToChatting=()=>{
        props.navigation.navigate("Chatting")
    }

    return(
        <Tab.Navigator 
            initialRouteName="ChatList"             
            activeColor="#1e90ff"
            barStyle={{ backgroundColor: '#ffffff' }}>
            <Tab.Screen name="ChatList"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={26} />
                    ),
                }} 
                children={()=><ChatList goToChatting={goToChatting}/>}
                />
            <Tab.Screen name="Online"
                options={{
                    tabBarIcon:({color, size})=>(
                        <MaterialCommunityIcons name="account-multiple-outline" color={color} size={26}/>
                    )
                }}
                children={()=><Online goToChatting={goToChatting}/>}
            />
        </Tab.Navigator>
    )

}

export default Chat
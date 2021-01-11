import React from "react"

import {
    View, Text
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ChatScreen from './Chat'
import Chatting from './Chatting'

const Stack=createStackNavigator()

function Messenger(props) {
    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Chat">
                <Stack.Screen name="Chat" component={ChatScreen}/>
                <Stack.Screen name="Chatting" component={Chatting}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Messenger
import React from 'react'

import {
    View,
    StyleSheet,
    ScrollView,
    Button,
    SafeAreaView
} from 'react-native'


import ChatItem from '../../component/ChatItem'

function ChatList(props) {

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex:1}}>

            </ScrollView>
        </SafeAreaView>
    )
}


export default ChatList
const styles= StyleSheet.create({
    container:{
        flex:1,
        
    }
})
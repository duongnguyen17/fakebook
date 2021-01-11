import React from 'react'

import {
    View,
    StyleSheet,
    ScrollView,
    Button
} from 'react-native'

import OnlineCard from '../../component/OnlineCard'


function Online(props) {

    return(
        <ScrollView>
            <OnlineCard online goToChatting={PopStateEvent.goToChatting} />
        </ScrollView>
    )
}


export default Online
const styles= StyleSheet.create({

})
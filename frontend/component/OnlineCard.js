import React from 'react'

import {
    StyleSheet
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'


function OnlineCard(props){
    return(
        <TouchableHighlight style={styles.container}
            onPress={props.goToChatting}
        >
            <View style={{flexDirection:'row'}}>
                <Image style={styles.avatar}/>
                <Text style={{fontWeight:'bold'}}></Text>
            </View>
            <View style={{backgroundColor:this.props.online? '#dddddd' : '#007aff'}}/>
        </TouchableHighlight>
    )
}

export default OnlineCard

const styles= StyleSheet.create({
    container:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:40,
    },
})
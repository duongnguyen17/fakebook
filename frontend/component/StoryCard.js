import React from 'react'
import { Component } from 'react'

import {
    ImageBackground,
    Image,
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native'

import PropTypes from 'prop-types';


function StoryCard(props){

    return(
    <TouchableHighlight style={styles.container}
        //onPress={props.goStoryScreen}
    >
        <ImageBackground style={styles.image_background}
        source={{uri: props.imageUrl}}
        >  
            <Image style={styles.avatar}
            source={{uri: props.avatarUrl}}            
            />
            <Text style={styles.name}>{props.name}</Text>
        </ImageBackground>
    </TouchableHighlight>
    )

}

StoryCard.propTypes={
    name: PropTypes.string.isRequired,
    avatarUrl : PropTypes.string.isRequired,
    imageUrl : PropTypes.string.isRequired,
}
export default StoryCard

const styles=StyleSheet.create({
    container:{
        width: 100,
        height: 170,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 12, 

    },
    image_background:{
        flex:1,
        justifyContent:'space-between',
        width:null, 
        height: null
    },
    avatar:{
        width:35,
        height:35,
        borderWidth:1,
        borderColor:'#ffffff',
        borderRadius:40,
        marginTop:10,
        marginLeft:10
    },
    name:{
        width:80,
        color:'#ffffff',
        marginLeft:5,
        fontWeight:'bold',
        fontSize:14,
    }
})
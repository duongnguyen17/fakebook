import React from 'react'

import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function CreatePostBar(props){
    return(
        <View style={styles.post_bar_inner}>

            <TouchableOpacity 
                onPress={props.goProfile}
            >
                <Image
                source={{uri: "https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}}
                style={styles.avatar}
                />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={props.goCreatePost}
                style={styles.create_post}
            >
                <Text style={{color:'#000000', fontSize:18}}>
                    What's on your mind?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                    activeOpacity={.5}
                    //onPress={}
                    style={styles.gallery_icon}>
                    <MaterialCommunityIcons name="folder-multiple-image" color={"#bcbcbc"} size={26} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    post_bar_inner:{
        flex:1,
        height: 65,
        paddingHorizontal: 10,
        backgroundColor:'#ffffff',
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    avatar:{
        width: 40,
        height: 40,
        borderRadius: 60,
        marginRight: 10
    },
    create_post:{
        width: 250,
        height: 35,
        backgroundColor:'#ffffff',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        alignItems:'center',
        justifyContent:'center'
    },

    gallery_icon:{
        width:35,
        height: 35,
        borderRadius: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
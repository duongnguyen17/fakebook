//trang newfeed

import React, {useState, useEffect} from 'react'
import { Text, TouchableHighlight, SafeAreaView, StyleSheet, View, ToastAndroid } from 'react-native'
import Animated, { Value } from 'react-native-reanimated'

import { getListPosts } from '../../../backend/ListAPIs'

import CreatePostBar from '../../component/CreatePostBar'
import StoryBar from '../../component/StoryBar'
import SearchBar from '../../component/SearchBar'
import Post from '../../component/Post/Post'


// const wait = (timeout)=>{
//     return new Promise(resolve=>{
//         setTimeout(resolve,timeout)
//     })
// }

function Feed(props){

    const [posts, setPosts] = useState([])
    const [id, setId] = useState('no')
    const [refresh, setRefresh] = useState(false)
    const [index, setIndex] = useState(0)
    const [count, setCount] = useState(10)

    useEffect(() => {
        async()=>{
            const response = await getListPosts(global.token, index, count)
            if(response.data.code===1000){
                setPosts(res.data.data.posts)
            }
        }
    }, [])
    const getPosts=async()=>{
        const res = await getListPosts()//chỗ này chưa xong
        setPosts(res.data.posts)
    }

    // const getMorePosts= async()=>{
    //     const res = await getListPosts()//chỗ này chưa xong
    //     setPosts(res.data.posts)
    // }

    // const onRefresh = useCallback(()=>{
    //     setRefresh(true)
    //     wait(100).then(async()=> await getPost())
    //     wait(2000).then(setRefresh(false))
    // },[])



    //làm cho header động
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
    })
    }
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
                <SearchBar gotoSearch={props.goSearch.bind(this)} gotoMessenger={props.goMessenger.bind(this)}/>
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

                // refreshControl = {
                //     <RefreshControl refreshing={refresh} onRefresh={onRefresh}  />
                // }
                scrollEventThrottle={0}
            >
                <CreatePostBar avatar ={avatar} userid={userid} goCreatePost={props.goCreatePost.bind(this)} goProfile={props.goProfile.bind(this)}/>
                <View style={styles.stories}>
                    <StoryBar/>
                </View>
                {posts.map((post, index)=> (
                    <Post post={post} key={index} />
                ))}
            </Animated.ScrollView>
        </SafeAreaView>
    )
}

export default Feed

const styles = StyleSheet.create({
    safe_area_view:{
        flex:1,
        backgroundColor:'#bcbcbc'
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
        flex:1
    },
    stories:{
        marginTop:10,
        marginBottom:10,
    },
    fake_post:{
        height:250,
        marginBottom:10,
        backgroundColor:'#ffffff'
    },


})
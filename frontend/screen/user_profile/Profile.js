import React, {useState, useEffect} from 'react'
import {
    View,
    Text
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import {getUserInfo, getUserFriend, getListPosts, setUserInfo} from '../../../backend/ListAPIs'

function Profile(props){
    const [username,setUsername] = useState('')
    const [avatar, setAvatar] = useState('')
    const [coverImage, setCoverImage] = uCeState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [friends, setFriends] = useState([])
    const [numFriend, setNumFriends] = useState()
    const [isFriend, setIsFriend] = useState(false)
    const [err, setErr] = useState('')

    useEffect(() => {
        async()=>{
            const token =await AsyncStorage.getItem('token')
            if(props.userId===userId){
                const response = await getUserInfo(token, '')
                if(response.status===200){
                    try{
                        setUsername(response.data.username)
                        setAvatar(response.data.avatar)
                        setCoverImage(response.data.cover_image)
                        setAddress(response.data.address)
                        setCity(response.data.city)
                        setCountry(response.data.country)   
                    }catch{error=>setErr(error)}
                }
                else{
                    setErr(response.data.message)
                }
            }else {
                const response = await getUserInfo(token, props.userId)
                if(response.status===200){
                    try{
                        setUsername(response.data.username)
                        setAvatar(response.data.avatar)
                        setCoverImage(response.data.cover_image)
                        setAddress(response.data.address)
                        setCity(response.data.city)
                        setCountry(response.data.country)
                    }catch{error=>setErr(error)}
                }
                else{
                    setErr(response.data.message)
                }
            }
        }
    }, [])

    return(
        <View>
            <Text>
                test
            </Text>
        </View>
    )
}
export default Profile
import React, {useState, useEffect} from 'react'
import { View, StyleSheet} from 'react-native'
import SearchBar from 'react-native-elements'
import {getUserFriend} from '../../../backend/ListAPIs'
import AsyncStorage from '@react-native-community/async-storage'
import { ScrollView } from 'react-native-gesture-handler'

import FriendCard from '../../component/FriendCard'

function AllFriends(props){
    const [numFriends, setNumFriends] = useState()
    const [friends, setFriends] = useState([])
    const [index, setIndex] = useState(0)
    const count = 10
    const [search, setSearch] = useState("")
    useEffect(() => {
        async() =>{
            const userid = await AsyncStorage.getItem('userid')
            const token = await AsyncStorage.getItem('token')
            const resFriend = await getUserFriend(userid, token, index,count)
            setFriends(resFriend.data.friends)
            setNumFriends(resFriend.data.total)
        }
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <SearchBar placeholder="Tìm kiếm bạn bè" onChangeText={(text)=>setSearch(text)} value={search}/>
                <ScrollView>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>{numFriends} friends</Text>
                        <Text style={{color:'#5d99c6', fontSize:20}} >Sort</Text>
                    </View>
                    {friends.map((friend)=>{
                        <FriendCard friend={friend}/>
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default AllFriends

const styles=StyleSheet.create({
    container:{},

})